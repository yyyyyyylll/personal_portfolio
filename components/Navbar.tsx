"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
    { name: "About Me", href: "#hero" },
    { name: "AI英语学习APP", href: "#my-app" },
    { name: "实习经历", href: "#experience" },
    { name: "项目经历", href: "#work" },
    { name: "社交媒体影响力", href: "#social-media" },
];

export default function Navbar() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-fit px-4"
        >
            <nav
                className="flex items-center gap-2 p-1.5 bg-background/50 backdrop-blur-md rounded-full border border-border/40 shadow-sm hover:shadow-md transition-all duration-300"
                onMouseLeave={() => setHoveredIndex(null)}
            >
                {/* Home Icon */}
                <a
                    href="#hero"
                    onClick={(e) => handleClick(e, "#hero")}
                    className="flex items-center justify-center w-8 h-8 rounded-full bg-background/50 hover:bg-background/80 transition-colors border border-white/10 text-foreground/80 hover:text-foreground"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
                </a>

                <div className="flex items-center px-1">
                    {navItems.map((item, index) => (
                        <a
                            key={item.name}
                            href={item.href}
                            onClick={(e) => handleClick(e, item.href)}
                            onMouseEnter={() => setHoveredIndex(index)}
                            className="relative px-3 py-1.5 text-xs font-medium text-foreground/80 hover:text-foreground transition-colors rounded-full"
                        >
                            <span className="relative z-10">{item.name}</span>
                            <AnimatePresence>
                                {hoveredIndex === index && (
                                    <motion.span
                                        layoutId="hoverBackground"
                                        className="absolute inset-0 bg-foreground/10 rounded-full"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.8 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                    />
                                )}
                            </AnimatePresence>
                        </a>
                    ))}
                </div>

                {/* Contact Action Button */}
                <a
                    href="#social-media"
                    onClick={(e) => handleClick(e, "#social-media")}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-foreground text-background text-xs font-medium rounded-full hover:opacity-90 transition-opacity"
                >
                    <span>Contact Me</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                </a>
            </nav>
        </motion.header>
    );
}
