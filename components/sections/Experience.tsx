"use client";

import { motion } from "framer-motion";


export default function Experience() {
    const experiences = [
        {
            company: "广州中视科技有限公司",
            role: "AIGC产品经理",
            period: "Internship", // Assuming internship, user didn't specify dates but implied role
            overview: "面向公司新媒体运营人员，开发内容创作 Agent，搭建产品图 AI 生成工作流，推动运营团队内容产出效率提升 40%。",
            details: [
                {
                    title: "模型评测",
                    content: "为业务寻找最优性价比的 API 方案，建立包含用户感知层、模型表现层、系统性能层和成本资源层的四维指标体系，构建 30 条真实业务数据集，评测 15+ 主流 LLM 及多模态模型，筛选出高性价比方案。"
                },
                {
                    title: "服务号平台算法逆向",
                    content: "为抢占正在灰度测试的微信服务号流量入口，针对服务号的推荐算法与AI内容推流规则，通过追踪 200+ 条样本数据进行逆向探测，梳理流量池分级阈值，制定内容生产与发布策略；在新账号试运营中实现单篇 1000+ 浏览量，验证了 AI 内容合规分发的闭环。"
                },
                {
                    title: "内容创作 Agent 开发",
                    content: "为解决新媒体内容的产出效率瓶颈，基于 Coze 平台搭建自动化撰稿 Agent，使用 CoT 和 Few-shot learning 的方法进行 Prompt 优化，构建 RAG 系统使AI掌握公司产品知识；开发、评测、交付并维护撰稿 Agent 产品，带动运营人员新媒体内容产出效率提升 40% 。"
                },
                {
                    title: "多模态工作流搭建",
                    content: "针对AI生图工具使用门槛高、质量不稳的痛点，优化基于 Stable Diffusion ComfyUI 的产品图生产工作流；撰写工作流使用 SOP，建立预设模板，进行员工培训，使AI图片业务采纳率提升 30% 。"
                }
            ]
        }
    ];

    return (
        <section id="experience" className="py-12 px-6 md:px-12 bg-background relative flex items-center min-h-screen">
            <div className="max-w-6xl mx-auto space-y-8 w-full">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-3">实习经历</h2>
                    <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="space-y-8">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="space-y-6"
                        >
                            {/* Header */}
                            <div className="border-l-4 border-primary pl-4 py-1">
                                <h3 className="text-xl md:text-2xl font-bold text-foreground">
                                    {exp.company} <span className="text-muted-foreground mx-2">-</span> {exp.role}
                                </h3>
                                <p className="text-base text-foreground/80 mt-1 font-serif italic">
                                    {exp.overview}
                                </p>
                            </div>

                            {/* Details Grid with Clockwise Flow */}
                            <div className="grid md:grid-cols-2 gap-x-16 gap-y-12 pt-4 relative">
                                {exp.details.map((detail, idx) => {
                                    // Determine order for clockwise flow:
                                    // Index 0 (Item 1) -> TL -> order 1
                                    // Index 1 (Item 2) -> TR -> order 2
                                    // Index 2 (Item 3) -> BR -> order 4
                                    // Index 3 (Item 4) -> BL -> order 3
                                    const orderClass = idx === 2 ? "md:order-4" : idx === 3 ? "md:order-3" : `md:order-${idx + 1}`;

                                    // Custom Very Thick Block Arrow Component
                                    const ThickArrow = ({ className }: { className?: string }) => (
                                        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
                                            <path d="M6 15h9v4l7-7l-7-7v4h-9z" />
                                        </svg>
                                    );

                                    return (
                                        <div key={idx} className={`w-full flex flex-col items-center ${orderClass} relative`}>
                                            <div className="w-full bg-white/50 p-6 rounded-2xl border border-muted hover:border-primary/20 transition-all shadow-sm hover:shadow-md h-full flex flex-col relative z-10">
                                                <h4 className="text-lg font-bold text-primary mb-2">
                                                    {detail.title}
                                                </h4>
                                                <p className="text-muted-foreground leading-relaxed text-sm flex-grow">
                                                    {detail.content}
                                                </p>
                                            </div>

                                            {/* Mobile Arrows (Down) */}
                                            {idx < exp.details.length - 1 && (
                                                <div className="md:hidden my-4 text-primary/30 pointer-events-none">
                                                    <ThickArrow className="w-10 h-10 rotate-90" />
                                                </div>
                                            )}

                                            {/* Desktop Arrows (Clockwise) */}
                                            {/* Arrow 1 -> 2 (Right) */}
                                            {idx === 0 && (
                                                <div className="hidden md:flex absolute -right-8 top-1/2 -translate-y-1/2 z-0 translate-x-1/2 text-primary/30 pointer-events-none">
                                                    <ThickArrow className="w-16 h-16" />
                                                </div>
                                            )}

                                            {/* Arrow 2 -> 3 (Down) */}
                                            {idx === 1 && (
                                                <div className="hidden md:flex absolute -bottom-6 left-1/2 -translate-x-1/2 z-0 translate-y-1/2 text-primary/30 pointer-events-none">
                                                    <ThickArrow className="w-16 h-16 rotate-90" />
                                                </div>
                                            )}

                                            {/* Arrow 3 -> 4 (Left) - Using Item 3 (Index 2) which is at BR */}
                                            {idx === 2 && (
                                                <div className="hidden md:flex absolute -left-8 top-1/2 -translate-y-1/2 z-0 -translate-x-1/2 text-primary/30 pointer-events-none">
                                                    <ThickArrow className="w-16 h-16 rotate-180" />
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
