"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navItems = [
    { name: "自我介绍", href: "#hero" },
    { name: "AI英语学习APP", href: "#my-app" },
    { name: "实习经历", href: "#experience" },
    { name: "项目经历", href: "#work" },
    { name: "社交媒体影响力", href: "#social-media" },
    { name: "联系方式", href: "#footer" },
];

export default function Navbar() {
    const [activeSection, setActiveSection] = useState<string>("#hero");

    useEffect(() => {
        const sectionIds = navItems.map(item => item.href.replace("#", ""));

        const handleScroll = () => {
            if ((window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 50) {
                setActiveSection("#footer");
            }
        };

        window.addEventListener("scroll", handleScroll);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(`#${entry.target.id}`);
                    }
                });
            },
            {
                rootMargin: "-20% 0px -60% 0px",
                threshold: 0,
            }
        );

        sectionIds.forEach((id) => {
            const element = document.getElementById(id);
            if (element) {
                observer.observe(element);
            }
        });

        return () => {
            observer.disconnect();
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        setActiveSection(href);
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
            className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
        >
            <nav className="flex items-center gap-1 px-2 py-2 rounded-full bg-white/80 backdrop-blur-md border border-gray-200/50 shadow-sm">
                {/* Left Icon */}
                <button className="flex items-center justify-center w-9 h-9 rounded-full hover:bg-gray-100 transition-colors text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="4" x2="4" y1="21" y2="14" />
                        <line x1="4" x2="4" y1="10" y2="3" />
                        <line x1="12" x2="12" y1="21" y2="12" />
                        <line x1="12" x2="12" y1="8" y2="3" />
                        <line x1="20" x2="20" y1="21" y2="16" />
                        <line x1="20" x2="20" y1="12" y2="3" />
                        <line x1="2" x2="6" y1="14" y2="14" />
                        <line x1="10" x2="14" y1="8" y2="8" />
                        <line x1="18" x2="22" y1="16" y2="16" />
                    </svg>
                </button>

                {/* Nav Links */}
                <div className="flex items-center gap-1 px-2">
                    {navItems.map((item) => {
                        const isActive = activeSection === item.href;
                        return (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={(e) => handleClick(e, item.href)}
                                className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-full ${isActive ? "text-white" : "text-gray-600 hover:text-gray-900"
                                    }`}
                            >
                                {isActive && (
                                    <motion.span
                                        layoutId="nav-highlight"
                                        className="absolute inset-0 bg-orange-500 rounded-full"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        style={{ zIndex: -1 }}
                                    />
                                )}
                                {item.name}
                            </a>
                        );
                    })}
                </div>
            </nav>
        </motion.header>
    );
}
