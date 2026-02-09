"use client";

import { motion } from "framer-motion";

export default function MyApp() {
    // 10 APP screenshots
    const screenshots = [
        "/images/app/APP1.jpg",
        "/images/app/APP2.jpg",
        "/images/app/APP3.jpg",
        "/images/app/APP4.jpg",
        "/images/app/APP5.jpg",
        "/images/app/APP6.jpg",
        "/images/app/APP7.jpg",
        "/images/app/APP8.jpg",
        "/images/app/APP9.jpg",
        "/images/app/APP10.jpg",
    ];

    return (
        <section id="my-app" className="py-24 px-8 md:px-12 bg-background relative">
            <div className="max-w-7xl mx-auto space-y-16">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <div className="inline-block">
                        <h2 className="text-[32px] md:text-[48px] font-bold font-serif text-foreground mb-4">AI英语学习APP - SnapTalk</h2>
                        <div className="h-1 w-full bg-primary rounded-full" />
                    </div>
                </motion.div>

                {/* Screenshots Grid - 2 Rows of 5 */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8">
                    {screenshots.map((image, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex justify-center"
                        >
                            {/* Slim iPhone Frame */}
                            <div className="relative group">
                                {/* iPhone Outer Shell */}
                                <motion.div
                                    className="relative bg-[#1c1c1e] rounded-[28px] p-[5px] shadow-lg"
                                    style={{
                                        boxShadow: "0 10px 40px -10px rgba(0, 0, 0, 0.3)"
                                    }}
                                    whileHover={{
                                        y: -15,
                                        boxShadow: "0 30px 60px -12px rgba(0, 0, 0, 0.5)"
                                    }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                >
                                    {/* Side Button - Right (Power) */}
                                    <div className="absolute -right-[1.5px] top-[70px] w-[2px] h-[24px] bg-[#2c2c2e] rounded-r-sm" />

                                    {/* Side Buttons - Left (Silent + Volume) */}
                                    <div className="absolute -left-[1.5px] top-[50px] w-[2px] h-[14px] bg-[#2c2c2e] rounded-l-sm" />
                                    <div className="absolute -left-[1.5px] top-[75px] w-[2px] h-[28px] bg-[#2c2c2e] rounded-l-sm" />
                                    <div className="absolute -left-[1.5px] top-[110px] w-[2px] h-[28px] bg-[#2c2c2e] rounded-l-sm" />

                                    {/* Screen Area */}
                                    <div className="relative bg-black rounded-[23px] overflow-hidden">
                                        {/* Dynamic Island */}
                                        <div className="absolute top-[8px] left-1/2 -translate-x-1/2 w-[55px] h-[16px] bg-black rounded-full z-10" />

                                        {/* Screen Content - Full Image */}
                                        <img
                                            src={image}
                                            alt={`APP截图 ${index + 1}`}
                                            className="w-full h-auto object-contain"
                                        />
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* App Description */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="max-w-6xl mx-auto text-lg text-foreground/80 leading-[1.5] font-['Microsoft_YaHei'] text-justify"
                >
                    <div>
                        <p className="mb-4 indent-[2em]">
                            作为英语学习者，我始终没有找到适合自己的口语学习产品。基于长期体验，我将当前主流英语学习产品归为三类，并通过拆解 百词斩、Duolingo、Speak AI 等5款竞品，结合用户深度访谈，分析现有产品的优势与局限：
                        </p>
                        <ul className="list-disc list-outside space-y-2 ml-[2em] pl-5 mb-4 indent-0">
                            <li>一是背单词类产品，学习方式偏机械，抽象词汇难以与真实情境建立联想，难以迁移到实际口语表达；</li>
                            <li>二是 AI 对话类产品，预设话题多偏宏观、抽象，难以衔接真实细微的日常生活情境，用户也很难完成话题冷启动；</li>
                            <li>三是真人外教对话练习，虽效果较好，但价格较高，且对内向用户而言心理成本较大。</li>
                        </ul>
                        <p className="font-medium text-primary indent-[2em] mb-4">
                            综合竞品分析与用户调研，我识别出英语学习者难以坚持口语练习、练习效果不佳的核心痛点在于真实语境缺失，即“学”与“用”之间存在明显断裂。
                        </p>
                    </div>

                    <div>
                        <p className="mb-4 indent-[2em]">
                            随着生成式 AI 能力的成熟，低成本解决这一问题成为可能。我设计了一款 AI 驱动的轻量化英语口语学习 App <strong>SnapTalk</strong>，将学习价值嫁接到用户已有的高频行为“拍照”上，把真实生活瞬间转化为个性化口语练习素材，而不是创造新的学习场景或强制改变用户习惯。
                        </p>
                        <p className="mb-4 indent-[2em]">
                            围绕这一核心策略，我规划了 v1.0–v3.0 的产品路线图，并撰写了 MVP 版本的 PRD：
                        </p>
                        <ul className="list-disc list-outside space-y-2 ml-[2em] pl-5 mb-4 indent-0">
                            <li><span className="font-semibold text-primary">在碎片化户外场景中，设计「核心词汇—场景描述—表达例句」三层学习卡片生成机制，帮助用户从真实场景理解推进到可直接使用的场景角色表达；</span></li>
                            <li><span className="font-semibold text-primary">在专注学习场景中，设计基于照片场景库的 AI 对话机制，解决对话话题抽象、启动困难的问题。</span></li>
                        </ul>
                        <p className="mb-4 indent-[2em]">
                            在商业模式上，采用增值服务的订阅结构。随着用户持续拍照与对话练习，产品会沉淀个人生活场景语料库，用户体验随时间增强，逐步形成以用户数据积累为核心的数据飞轮。
                        </p>
                        <p className="indent-[2em]">
                            在产品落地阶段，我使用 Figma Make 绘制高保真原型图，借助 Claude Code 等 AI Coding 工具进行 Vibe Coding，开发出 MVP 版本的 iOS APP，实现核心功能闭环。目前产品已进入 Apple App Store 上架准备阶段，后续将通过种子用户反馈与埋点数据分析持续迭代优化产品。
                        </p>
                    </div>
                </motion.div>

            </div>
        </section >
    );
}
