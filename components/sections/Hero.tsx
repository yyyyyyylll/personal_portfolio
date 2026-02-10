"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, ArrowRight } from "lucide-react";


export default function Hero() {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center px-8 md:px-12 py-24 overflow-hidden relative bg-background">
            <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-start gap-12 md:gap-16">
                {/* Left Column: Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative w-64 h-64 md:w-72 md:h-72 flex-shrink-0 rounded-[2rem] rounded-tr-none overflow-hidden bg-muted border-5 border-[#8B4513]"
                    style={{
                        boxShadow: "12px 12px 20px rgba(139, 69, 19, 0.4)"
                    }}
                >
                    <Image
                        src="/profile.png"
                        alt="Zhiyu"
                        fill
                        className="object-cover"
                        priority
                    />
                </motion.div>

                {/* Right Column: Content */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="flex-1 space-y-5 text-left"
                >
                    {/* Title */}
                    <div className="space-y-4">
                        <h1 className="text-4xl md:text-5xl font-bold font-sans text-foreground">
                            About Me
                        </h1>
                        <div className="h-[2px] w-full bg-foreground/20 rounded-full" />
                    </div>

                    <div className="space-y-2 text-lg leading-relaxed text-foreground/80 font-sans text-justify relative">
                        <p>
                            我是罗友平，中山大学传播学专业 2027 届本科生，关注 AI 应用层，求职意向为产品经理。
                        </p>
                        <p>
                            我有一段AI产品经理实习，期间负责搭建面向公司内部的<strong className="text-foreground">内容创作 Agent 与 AI 生图工作流</strong>，推动运营团队内容产出效率提升 40%；并独立完成过一款 AI 英语口语学习 <strong className="text-foreground">App 的 0–1 设计与开发</strong>，沉淀自己的产品方法论。产品目前已进入 Apple App Store 上架准备阶段。
                        </p>
                        <p>
                            我熟悉 PRD 撰写、原型设计、产品评测与数据分析，具备 Agent、RAG 和 Context Engineering 的实际项目经验。
                        </p>
                        <div className="flex justify-end mt-0">
                            <a
                                href="/Resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex flex-row items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors group cursor-pointer"
                            >
                                <span className="text-xl font-medium">查看简历</span>
                                <ArrowUpRight className="w-6 h-6" />
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll to Work Button */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                className="absolute bottom-23 left-1/2 -translate-x-1/2"
            >
                <button
                    onClick={() => {
                        document.getElementById('my-app')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="flex flex-row items-center gap-2 text-primary hover:text-primary/80 transition-colors group cursor-pointer"
                >
                    <span className="text-2xl font-medium">浏览作品</span>
                    <motion.div
                        animate={{ y: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <ArrowDown className="w-8 h-8" />
                    </motion.div>
                </button>
            </motion.div>


        </section>
    );
}
