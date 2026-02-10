"use client";

import { motion } from "framer-motion";
import { Phone, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer id="footer" className="py-16 px-8 md:px-12 bg-[#0a0a0a] text-white">
            <div className="max-w-7xl mx-auto space-y-10">
                {/* Motto */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <p className="text-3xl md:text-4xl font-semibold text-white/90 tracking-wide">
                        "The best way to predict the future is to <span className="italic text-orange-500">invent it</span>."
                    </p>
                </motion.div>


                {/* Contact Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-center space-y-4"
                >
                    <h3 className="text-lg font-medium text-white/80">与我联系</h3>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0 text-white/70">
                        <a
                            href="tel:15976488648"
                            className="flex-1 flex items-center justify-end gap-2 hover:text-white transition-colors md:pr-6"
                        >
                            <Phone className="w-4 h-4" />
                            <span>电话/微信：15976488648</span>
                        </a>
                        <span className="hidden md:inline text-white/30">|</span>
                        <a
                            href="mailto:15976488648@163.com"
                            className="flex-1 flex items-center justify-start gap-2 hover:text-white transition-colors md:pl-6"
                        >
                            <Mail className="w-4 h-4" />
                            <span>邮箱：15976488648@163.com</span>
                        </a>
                    </div>
                </motion.div>


                {/* Copyright */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-center"
                >
                    <p className="text-sm text-white/50">
                        © 2026 Link. All rights reserved.
                    </p>
                </motion.div>
            </div>
        </footer>
    );
}
