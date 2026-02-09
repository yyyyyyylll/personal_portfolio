"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="min-h-screen flex items-center py-24 px-8 md:px-12 bg-background relative overflow-hidden">
            {/* Organic Background Shape - moved to bottom center/right to match reference */}
            <div className="absolute bottom-[-10%] left-[30%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl -z-10 animate-pulse-slow pointer-events-none opacity-60" />

            <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center">
                {/* Left Column: Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative aspect-square md:aspect-[4/5] w-full max-w-md mx-auto"
                >
                    <div className="absolute inset-0 bg-secondary rounded-[40px] transform rotate-[-3deg] translate-y-4 translate-x-4 -z-10" />
                    <div className="w-full h-full bg-muted-foreground/10 rounded-[40px] overflow-hidden shadow-warm">
                        {/* Placeholder for user image */}
                        <div className="w-full h-full bg-stone-200 flex items-center justify-center text-muted-foreground">
                            <span>Image Placeholder</span>
                        </div>
                    </div>
                </motion.div>

                {/* Right Column: Content */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="space-y-8"
                >
                    <div className="space-y-4">
                        <h2 className="text-5xl md:text-6xl font-bold font-serif text-foreground">
                            About Me
                        </h2>
                        <div className="h-1 w-full bg-foreground rounded-full" />
                    </div>

                    <div className="space-y-6 text-lg md:text-xl leading-relaxed text-foreground/80 font-sans">
                        <p>
                            I'm <span className="font-bold text-foreground">Zhiyu</span>, a frontend developer and web designer based in... well, currently here.
                            With a background in product management and AI, I focus my work on interactivity and novelty,
                            always exploring different ways to make things pop.
                        </p>
                        <p>
                            Outside of work, I love keeping my brain engaged with miscellaneous projects.
                            Coding, designing, and exploring new tech are some of the ways that I stay creative.
                        </p>
                    </div>

                    <div>
                        <a href="#" className="inline-block text-xl font-bold text-primary hover:text-accent transition-colors pb-1 border-b-2 border-primary/20 hover:border-accent">
                            see my resume
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
