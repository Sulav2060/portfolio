"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { X } from "lucide-react"

import { Button } from "@/components/ui/button"

interface ChessEasterEggProps {
  onClose: () => void
}

export function ChessEasterEgg({ onClose }: ChessEasterEggProps) {
  const [chessPosition, setChessPosition] = useState([
    ["r", "n", "b", "q", "k", "b", "n", "r"],
    ["p", "p", "p", "p", "p", "p", "p", "p"],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["P", "P", "P", "P", "P", "P", "P", "P"],
    ["R", "N", "B", "Q", "K", "B", "N", "R"],
  ])

  const [selectedPiece, setSelectedPiece] = useState<{ row: number; col: number } | null>(null)
  const [message, setMessage] = useState("You found the chess easter egg! Make a move.")
  const [gameState] = useState<"playing" | "checkmate" | "stalemate">("playing")

  const getPieceSymbol = (piece: string) => {
    const symbols: Record<string, string> = {
      r: "♜",
      n: "♞",
      b: "♝",
      q: "♛",
      k: "♚",
      p: "♟",
      R: "♖",
      N: "♘",
      B: "♗",
      Q: "♕",
      K: "♔",
      P: "♙",
      "": "",
    }
    return symbols[piece]
  }

  const handleCellClick = (row: number, col: number) => {
    if (gameState !== "playing") return

    // If no piece is selected and the cell has a piece
    if (selectedPiece === null && chessPosition[row][col]) {
      // Only allow white pieces (uppercase) to be selected
      if (chessPosition[row][col] === chessPosition[row][col].toUpperCase()) {
        setSelectedPiece({ row, col })
        setMessage("Select where to move this piece.")
      } else {
        setMessage("It's white's turn to move.")
      }
    }
    // If a piece is already selected
    else if (selectedPiece) {
      // If clicking the same piece, deselect it
      if (selectedPiece.row === row && selectedPiece.col === col) {
        setSelectedPiece(null)
        setMessage("Move canceled. Select a piece to move.")
      }
      // If clicking a different cell, try to move the piece
      else {
        const newPosition = [...chessPosition.map((r) => [...r])]
        newPosition[row][col] = chessPosition[selectedPiece.row][selectedPiece.col]
        newPosition[selectedPiece.row][selectedPiece.col] = ""
        setChessPosition(newPosition)
        setSelectedPiece(null)
        setMessage("Good move! Your opponent is thinking...")

        // Simulate opponent's move after a delay
        setTimeout(() => {
          const opponentMove = makeRandomBlackMove(newPosition)
          setChessPosition(opponentMove)
          setMessage("Your turn again.")
        }, 1500)
      }
    }
  }

  // Simple function to make a random legal move for black
  const makeRandomBlackMove = (position: string[][]) => {
    const newPosition = [...position.map((row) => [...row])]

    // Find all black pieces
    const blackPieces: { row: number; col: number; piece: string }[] = []
    for (let r = 0; r < 8; r++) {
      for (let c = 0; c < 8; c++) {
        const piece = position[r][c]
        if (piece && piece === piece.toLowerCase()) {
          blackPieces.push({ row: r, col: c, piece })
        }
      }
    }

    // Pick a random black piece
    if (blackPieces.length > 0) {
      const randomPiece = blackPieces[Math.floor(Math.random() * blackPieces.length)]

      // For simplicity, just move the piece one square forward if it's a pawn
      if (randomPiece.piece === "p" && randomPiece.row < 7) {
        if (position[randomPiece.row + 1][randomPiece.col] === "") {
          newPosition[randomPiece.row + 1][randomPiece.col] = "p"
          newPosition[randomPiece.row][randomPiece.col] = ""
          return newPosition
        }
      }

      // For other pieces, just find an empty square nearby
      const possibleMoves = [
        { r: 1, c: 0 },
        { r: -1, c: 0 },
        { r: 0, c: 1 },
        { r: 0, c: -1 },
        { r: 1, c: 1 },
        { r: 1, c: -1 },
        { r: -1, c: 1 },
        { r: -1, c: -1 },
      ]

      const validMoves = possibleMoves.filter((move) => {
        const newRow = randomPiece.row + move.r
        const newCol = randomPiece.col + move.c
        return (
          newRow >= 0 &&
          newRow < 8 &&
          newCol >= 0 &&
          newCol < 8 &&
          (position[newRow][newCol] === "" || position[newRow][newCol] === position[newRow][newCol].toUpperCase())
        )
      })

      if (validMoves.length > 0) {
        const randomMove = validMoves[Math.floor(Math.random() * validMoves.length)]
        const newRow = randomPiece.row + randomMove.r
        const newCol = randomPiece.col + randomMove.c

        newPosition[newRow][newCol] = randomPiece.piece
        newPosition[randomPiece.row][randomPiece.col] = ""
      }
    }

    return newPosition
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        className="w-full max-w-md p-6 bg-white rounded-lg shadow-xl dark:bg-background"
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold">Chess Easter Egg!</h3>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="w-5 h-5" />
          </Button>
        </div>

        <p className="mb-4 text-sm text-muted-foreground">{message}</p>

        <div className="overflow-hidden border rounded-md">
          {chessPosition.map((row, rowIndex) => (
            <div key={rowIndex} className="flex">
              {row.map((piece, colIndex) => (
                <div
                  key={`${rowIndex}-${colIndex}`}
                  className={`w-10 h-10 flex items-center justify-center text-2xl cursor-pointer
                    ${(rowIndex + colIndex) % 2 === 0 ? "bg-lavender-100 dark:bg-lavender-900/30" : "bg-white dark:bg-background"}
                    ${selectedPiece && selectedPiece.row === rowIndex && selectedPiece.col === colIndex ? "bg-lavender-300 dark:bg-lavender-700" : ""}
                  `}
                  onClick={() => handleCellClick(rowIndex, colIndex)}
                >
                  {getPieceSymbol(piece)}
                </div>
              ))}
            </div>
          ))}
        </div>

        <p className="mt-4 text-xs text-center text-muted-foreground">
          Hint: This is a simplified chess game. White pieces move first.
        </p>
      </motion.div>
    </motion.div>
  )
}
