"use client";

import { motion } from "framer-motion";

export default function SocialMedia() {
    // 5 Xiaohongshu screenshot images
    const images = [
        "/images/social/小红书1.jpg",
        "/images/social/小红书2.jpg",
        "/images/social/小红书3.jpg",
        "/images/social/小红书4.jpg",
        "/images/social/小红书5.jpg"
    ];

    return (
        <section id="social-media" className="py-24 px-8 md:px-12 bg-background relative overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-3xl -z-10 pointer-events-none" />

            <div className="max-w-7xl mx-auto space-y-16">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-3">社交媒体影响力</h2>
                    <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
                </motion.div>

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="max-w-6xl mx-auto text-lg text-foreground/80 leading-[1.5] font-['Microsoft_YaHei'] text-justify"
                >
                    <p className="indent-[2em] mb-4">
                        为建立个人品牌并为后续产品宣发积累种子用户，我从 2025 年 8 月底开始运营小红书账号 Link（学习AI中），持续输出 AI 产品知识分享、AI工具实用技巧和项目复盘笔记。（账号链接：<a href="https://xhslink.com/m/3WAWoSFKKGS" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4 font-medium">https://xhslink.com/m/3WAWoSFKKGS</a>）
                    </p>
                    <p className="indent-[2em] mb-4">
                        在运营过程中，基于互动率与后台数据持续迭代封面风格、标题结构与内容选题，逐步形成稳定的内容增长模型，8 篇笔记成为爆款。账号累计获得 1700+ 粉丝，赞藏量超过 1.5 万。
                    </p>
                    <p className="indent-[2em]">
                        同时，将公域流量沉淀至私域社群，建立并运营一个 270+ 人的 AI 学习交流社区，完成从内容触达到粉丝沉淀、社群转化的基础增长闭环。
                    </p>
                </motion.div>

                {/* Frosted Glass Gallery - 5 Columns on large screens */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {images.map((image, index) => (
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
                                <div
                                    className="relative bg-[#1c1c1e] rounded-[28px] p-[5px] shadow-lg"
                                    style={{
                                        boxShadow: "0 10px 40px -10px rgba(0, 0, 0, 0.3)"
                                    }}
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
                                            alt={`小红书截图 ${index + 1}`}
                                            className="w-full h-auto object-contain"
                                        />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
