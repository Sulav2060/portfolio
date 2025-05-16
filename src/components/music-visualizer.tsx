"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Pause, Play } from "lucide-react";

import { Button } from "@/components/ui/button";

declare global {
  interface Window {
    webkitAudioContext?: typeof AudioContext;
  }
}

export function MusicVisualizer() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas dimensions
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;

    // Create audio context and analyser
    if (!audioContextRef.current) {
      // Fix: Remove 'any' by using the global window webkitAudioContext declaration
      audioContextRef.current = new (window.AudioContext ||
        window.webkitAudioContext)();
      analyserRef.current = audioContextRef.current.createAnalyser();
      analyserRef.current.fftSize = 256;
    }

    // Connect audio element to analyser
    if (audioRef.current && analyserRef.current && audioContextRef.current) {
      const source = audioContextRef.current.createMediaElementSource(
        audioRef.current
      );
      source.connect(analyserRef.current);
      analyserRef.current.connect(audioContextRef.current.destination);
    }

    // Animation function
    const animate = () => {
      if (!ctx || !analyserRef.current) return;

      const bufferLength = analyserRef.current.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);
      analyserRef.current.getByteFrequencyData(dataArray);

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw visualizer
      const barWidth = (canvas.width / bufferLength) * 2.5;
      let x = 0;

      for (let i = 0; i < bufferLength; i++) {
        const barHeight = (dataArray[i] / 255) * canvas.height * 0.8;

        // Calculate gradient color based on frequency
        const hue = (i / bufferLength) * 60 + 240; // From blue to purple
        ctx.fillStyle = `hsl(${hue}, 80%, 60%)`;

        ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);
        x += barWidth + 1;
      }

      requestAnimationFrame(animate);
    };

    // Start animation
    const animationId = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 rounded-lg bg-background shadow-lg"
    >
      <h3 className="text-xl font-semibold mb-4">Music Visualizer</h3>
      <div className="relative h-40 mb-4">
        <canvas
          ref={canvasRef}
          className="w-full h-full rounded-md bg-black/10 dark:bg-white/5"
        ></canvas>
      </div>
      <div className="flex items-center justify-between">
        <div className="text-sm text-muted-foreground">Guitar Sample Track</div>
        <Button
          variant="outline"
          size="sm"
          onClick={togglePlay}
          className="gap-2"
        >
          {isPlaying ? (
            <Pause className="w-4 h-4" />
          ) : (
            <Play className="w-4 h-4" />
          )}
          {isPlaying ? "Pause" : "Play"}
        </Button>
      </div>
      <audio
        ref={audioRef}
        src="https://assets.mixkit.co/music/preview/mixkit-tech-house-vibes-130.mp3"
        loop
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        className="hidden"
      ></audio>
    </motion.div>
  );
}