"use client";

import { motion } from "framer-motion";

export default function FluidBlob() {
    return (
        <div className="relative w-[600px] h-[400px]">
            <svg
                viewBox="0 0 600 400"
                className="w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <linearGradient id="blobGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.6" />
                        <stop offset="50%" stopColor="#A855F7" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="#6366F1" stopOpacity="0.4" />
                    </linearGradient>
                    <filter id="goo">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                        <feColorMatrix
                            in="blur"
                            mode="matrix"
                            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                            result="goo"
                        />
                    </filter>
                </defs>
                <g filter="url(#goo)">
                    <motion.ellipse
                        cx="300"
                        cy="200"
                        rx="120"
                        ry="80"
                        fill="url(#blobGradient)"
                        animate={{
                            rx: [120, 140, 100, 130, 120],
                            ry: [80, 100, 90, 70, 80],
                            cx: [300, 280, 320, 290, 300],
                            cy: [200, 210, 190, 205, 200],
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                    <motion.ellipse
                        cx="350"
                        cy="180"
                        rx="80"
                        ry="60"
                        fill="url(#blobGradient)"
                        animate={{
                            rx: [80, 90, 70, 85, 80],
                            ry: [60, 70, 55, 65, 60],
                            cx: [350, 370, 340, 360, 350],
                            cy: [180, 170, 190, 175, 180],
                        }}
                        transition={{
                            duration: 7,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 0.5,
                        }}
                    />
                    <motion.ellipse
                        cx="250"
                        cy="220"
                        rx="90"
                        ry="70"
                        fill="url(#blobGradient)"
                        animate={{
                            rx: [90, 100, 80, 95, 90],
                            ry: [70, 60, 75, 65, 70],
                            cx: [250, 230, 260, 245, 250],
                            cy: [220, 230, 210, 225, 220],
                        }}
                        transition={{
                            duration: 9,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1,
                        }}
                    />
                </g>
            </svg>
        </div>
    );
}
