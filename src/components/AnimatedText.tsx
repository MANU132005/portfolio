"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface AnimatedTextProps {
  text: string;
  className?: string;
  itemClassName?: string;
  delay?: number;
  stagger?: number;
  animateBy?: "word" | "character";
}

export default function AnimatedText({ 
  text, 
  className, 
  itemClassName = "",
  delay = 0, 
  stagger, 
  animateBy = "character" 
}: AnimatedTextProps) {
  const items = animateBy === "word" ? text.split(" ") : text.split("");
  const defaultStagger = animateBy === "word" ? 0.1 : 0.02;
  const activeStagger = stagger ?? defaultStagger;

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: activeStagger, delayChildren: delay },
    },
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y: 10,
      filter: "blur(4px)",
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 200,
      },
    },
  } as const;

  return (
    <motion.span
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={`${className} inline-block`}
    >
      {items.map((item, index) => (
        <motion.span
          variants={child}
          className={`${itemClassName} inline-block whitespace-pre`}
          key={index}
        >
          {item}{animateBy === "word" && index !== items.length - 1 ? "\u00A0" : ""}
        </motion.span>
      ))}
    </motion.span>
  );
}
