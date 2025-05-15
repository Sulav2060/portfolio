"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/components/theme-provider";

interface Skill {
  name: string;
  level: number;
  x: number;
  y: number;
  z: number;
  scale: number;
  opacity: number;
}

export function SkillsGlobe() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [skills, setSkills] = useState<Skill[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const animationRef = useRef<number | null>(null);
  const { theme } = useTheme();

  const skillsList = [
    { name: "PHP", level: 60 },
    { name: "Laravel", level: 65 },
    { name: "MongoDB", level: 80 },
    { name: "React", level: 90 },
    { name: "nextJs", level: 90 },
    { name: "Tailwind CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "HTML/CSS", level: 95 },
    { name: "Git", level: 80 },
    { name: "MySQL", level: 75 },
    { name: "Django", level: 60 },
    { name: "UI/UX", level: 70 },
    { name: "RESTful APIs", level: 85 },
  ];

  useEffect(() => {
    if (!containerRef.current) return;

    const updateDimensions = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        setDimensions({ width, height });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  useEffect(() => {
    if (dimensions.width === 0 || dimensions.height === 0) return;

    // Initialize skills with random positions on a sphere
    const initialSkills: Skill[] = skillsList.map((skill) => {
      // Random position on a sphere
      const theta = Math.random() * Math.PI * 2; // longitude
      const phi = Math.acos(2 * Math.random() - 1); // latitude
      const radius = Math.min(dimensions.width, dimensions.height) * 0.4;

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      return {
        ...skill,
        x,
        y,
        z,
        scale: 1,
        opacity: 1,
      };
    });

    setSkills(initialSkills);

    // Animation loop
    let angle = 0;
    const animate = () => {
      angle += 0.0002;
      setSkills((prevSkills) =>
        prevSkills.map((skill, i) => {
          // Rotate around Y axis
          const x = skill.x * Math.cos(angle) + skill.z * Math.sin(angle);
          const z = -skill.x * Math.sin(angle) + skill.z * Math.cos(angle);

          // Calculate scale and opacity based on z position
          const scale = mapRange(
            z,
            -dimensions.width * 0.3,
            dimensions.width * 0.3,
            0.8,
            1.2
          );
          const opacity = mapRange(
            z,
            -dimensions.width * 0.3,
            dimensions.width * 0.3,
            0.4,
            1
          );

          return {
            ...skill,
            x,
            z,
            scale,
            opacity,
          };
        })
      );

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [dimensions]);

  // Helper function to map a value from one range to another
  const mapRange = (
    value: number,
    inMin: number,
    inMax: number,
    outMin: number,
    outMax: number
  ) => {
    return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
  };

  return (
    <div
      ref={containerRef}
      className="relative h-[400px] w-full overflow-hidden"
    >
      {skills.map((skill, index) => {
        // Calculate position in 2D space
        const x = skill.x + dimensions.width / 2;
        const y = skill.y + dimensions.height / 2;

        // Calculate color based on skill level
        const hue = mapRange(skill.level, 60, 95, 260, 280); // Lavender hues
        const saturation = mapRange(skill.level, 60, 95, 70, 90);
        const lightness = theme === "dark" ? 70 : 50;

        return (
          <motion.div
            key={index}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 whitespace-nowrap"
            style={{
              left: `${x}px`,
              top: `${y}px`,
              zIndex: Math.floor(skill.z),
              scale: skill.scale,
              opacity: skill.opacity,
              color: `hsl(${hue}, ${saturation}%, ${lightness}%)`,
            }}
            animate={{
              x: x - dimensions.width / 2,
              y: y - dimensions.height / 2,
              scale: skill.scale,
              opacity: skill.opacity,
            }}
            transition={{ duration: 0.1 }}
          >
            <div className="px-3 py-1 text-sm font-medium rounded-full bg-background/80 backdrop-blur-sm border border-lavender-200 dark:border-lavender-800">
              {skill.name}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
