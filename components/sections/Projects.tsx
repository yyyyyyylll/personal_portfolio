"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { ArrowUpRight, Github, Globe, FileText } from "lucide-react";
import Image from "next/image";

export default function Projects() {
    return (
        <section id="work" className="py-24 px-4 bg-background">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-3">项目经历</h2>
                    <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group relative bg-card rounded-2xl p-5 shadow-sm hover:shadow-warm transition-all duration-300 border border-muted/50 flex flex-col h-full"
                        >
                            <div className="relative aspect-video w-full mb-4 rounded-xl overflow-hidden bg-black/5">
                                {project.video ? (
                                    <video
                                        src={project.video}
                                        controls
                                        className="w-full h-full object-cover"
                                        poster={project.image.startsWith("/") ? project.image : undefined} // Optional: use image as poster if valid path
                                    />
                                ) : project.image.startsWith("/") ? (
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                ) : (
                                    <div className={`w-full h-full bg-gradient-to-br ${project.image} opacity-80 group-hover:opacity-100 transition-opacity`} />
                                )}
                            </div>

                            <div className="mb-4">
                                <div className="flex justify-between items-center mb-2">
                                    <p className="text-sm font-medium text-primary">{project.category}</p>
                                    <div className="flex gap-2">
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 hover:bg-primary hover:text-white transition-all text-sm font-medium group"
                                                aria-label="View Source Code"
                                            >
                                                <Github className="w-4 h-4" />
                                                <span>查看文件</span>
                                            </a>
                                        )}
                                        {project.prompt && (
                                            <a
                                                href={project.prompt}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 hover:bg-primary hover:text-white transition-all text-sm font-medium group"
                                                aria-label="View Prompt"
                                            >
                                                <FileText className="w-4 h-4" />
                                                <span>查看System Prompt</span>
                                            </a>
                                        )}
                                        {project.demo && (
                                            <a
                                                href={project.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 hover:bg-primary hover:text-white transition-all text-sm font-medium group"
                                                aria-label="View Live Demo"
                                            >
                                                <Globe className="w-4 h-4" />
                                                <span>{project.id === "2" ? "进行对话" : "访问网页"}</span>
                                            </a>
                                        )}

                                    </div>
                                </div>
                                <h3 className="text-lg font-bold text-foreground">{project.title}</h3>
                            </div>

                            <p className="text-sm text-foreground mb-4 flex-grow leading-relaxed text-justify">
                                {project.description}
                            </p>

                            <div className="space-y-4">
                                {/* Impact description removed */}
                                <div className="flex flex-wrap items-center gap-2">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="px-3 py-1 bg-muted rounded-full text-xs text-muted-foreground">
                                            {tag}
                                        </span>
                                    ))}
                                    {/* Date - pushed to right */}
                                    <span className="ml-auto text-[12px] text-muted-foreground/70">{project.date}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
