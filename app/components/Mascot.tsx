"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function Mascot() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);
  const positionRef = useRef(position);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const scrollHandlerRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    positionRef.current = position;
  }, [position]);

  useEffect(() => {
    setIsClient(true);
    // Set initial position to bottom-left after mount to access window
    setPosition({ x: 34, y: window.innerHeight - 120 });
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      e.preventDefault();
      
      // Calculate new position
      let newX = e.clientX - offset.x;
      let newY = e.clientY - offset.y;

      // Boundary checks (optional, keeps it on screen)
      const maxX = window.innerWidth - 100; // width of mascot
      const maxY = window.innerHeight - 100; // height of mascot
      
      // newX = Math.max(0, Math.min(newX, maxX));
      // newY = Math.max(0, Math.min(newY, maxY));

      setPosition({ x: newX, y: newY });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      document.body.style.userSelect = '';
      document.body.style.pointerEvents = '';

      const snapToCorner = () => {
        const { x, y } = positionRef.current;
        const winW = window.innerWidth;
        const winH = window.innerHeight;
        const size = 96; // w-24
        const margin = 24;

        const corners = [
          { x: margin, y: margin }, // Top-Left
          { x: winW - size - margin, y: margin }, // Top-Right
          { x: margin, y: winH - size - margin }, // Bottom-Left
          { x: winW - size - margin, y: winH - size - margin }, // Bottom-Right
        ];

        const closest = corners.reduce((prev, curr) => {
          const distPrev = Math.hypot(prev.x - x, prev.y - y);
          const distCurr = Math.hypot(curr.x - x, curr.y - y);
          return distCurr < distPrev ? curr : prev;
        });

        setPosition(closest);

        // Cleanup
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
          timeoutRef.current = null;
        }
        if (scrollHandlerRef.current) {
          window.removeEventListener('scroll', scrollHandlerRef.current);
          scrollHandlerRef.current = null;
        }
      };

      // Store reference for cancellation
      scrollHandlerRef.current = snapToCorner;

      // Schedule snap
      timeoutRef.current = setTimeout(snapToCorner, 2000);
      window.addEventListener('scroll', snapToCorner, { once: true });
    };

    if (isDragging) {
      document.body.style.userSelect = 'none';
      // Allow pointer events only for dragging, but we might need to be careful not to block mouseup
      // Actually, user-select: none is usually enough to prevent text selection.
      // To prevent other interactions (like hover effects on other elements), we can use a transparent overlay or pointer-events: none on body *except* the mascot.
      // But simpler is just userSelect none.
      
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      document.body.style.userSelect = '';
    };
  }, [isDragging, offset]);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent default drag behavior
    
    // Cancel any pending snap
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    if (scrollHandlerRef.current) {
      window.removeEventListener('scroll', scrollHandlerRef.current);
      scrollHandlerRef.current = null;
    }

    setIsDragging(true);
    setOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  if (!isClient) return null;

  return (
    <div
      style={{
        position: "fixed",
        left: position.x,
        top: position.y,
        zIndex: 9999,
        cursor: isDragging ? "grabbing" : "grab",
        touchAction: "none", // Prevent scrolling on touch devices while dragging
        transition: isDragging ? "none" : "left 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275), top 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
      }}
      onMouseDown={handleMouseDown}
      className="group hidden md:block"
    >
      {/* Floating animation wrapper */}
      <div className="animate-float hover:pause">
        <div className="relative w-24 h-24 drop-shadow-2xl transition-transform hover:scale-110">
            <Image
              src="/RedDevilOnePiece.png"
              alt="Mascot"
              width={96}
              height={96}
              className="object-contain pointer-events-none select-none"
              draggable={false}
              unoptimized
            />
        </div>
      </div>
    </div>
  );
}
