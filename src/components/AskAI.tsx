/* eslint-disable */
// @ts-nocheck
"use client";

import { useChat } from '@ai-sdk/react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

export default function AskAI() {
    const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat();
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Auto-scroll to bottom of messages
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, isLoading]);

    return (
        <section className="relative z-20 bg-[#121212] py-24 px-8 md:px-24 border-t border-white/10">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-10 text-center md:text-left"
                >
                    <h3 className="text-sm uppercase tracking-widest text-blue-400 mb-4 font-bold flex items-center justify-center md:justify-start gap-2">
                        <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                        Digital Twin
                    </h3>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white">
                        Ask Hemant&apos;s AI
                    </h2>
                    <p className="mt-4 text-neutral-400 max-w-2xl leading-relaxed text-sm md:text-base mx-auto md:mx-0">
                        Have a question about my experience, skills, or methodologies? Ask my AI assistant. It&apos;s trained exclusively on my professional background.
                    </p>
                </motion.div>

                {/* Chat Interface Container */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-[#1a1a1a] border border-white/10 rounded-2xl md:rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.5)] flex flex-col h-[500px] md:h-[600px] relative z-10"
                >
                    {/* Header */}
                    <div className="px-6 py-4 border-b border-white/10 bg-white/5 flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8V4H8" /><rect width="16" height="12" x="4" y="8" rx="2" /><path d="M2 14h2" /><path d="M20 14h2" /><path d="M15 13v2" /><path d="M9 13v2" /></svg>
                        </div>
                        <div>
                            <h4 className="text-white font-bold tracking-tight">Hemant AI</h4>
                            <p className="text-xs text-neutral-400 flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block"></span>
                                Online & Ready
                            </p>
                        </div>
                    </div>

                    {/* Messages Area */}
                    <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6 [scrollbar-width:thin] scrollbar-track-transparent scrollbar-thumb-white/10">
                        <AnimatePresence initial={false}>
                            {messages.length === 0 ? (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="h-full flex flex-col items-center justify-center text-center text-neutral-500 space-y-4"
                                >
                                    <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-2">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                                    </div>
                                    <p className="text-sm max-w-[250px]">Start a conversation.<br />Try asking "What is your experience with SAP BTP?"</p>
                                </motion.div>
                            ) : (
                                messages.map((m: { id: string, role: string, content: string }) => (
                                    <motion.div
                                        key={m.id}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                                    >
                                        <div className={`max-w-[85%] md:max-w-[75%] rounded-2xl px-5 py-3.5 ${m.role === 'user'
                                            ? 'bg-blue-600 text-white rounded-tr-sm shadow-md'
                                            : 'bg-white/10 text-neutral-200 rounded-tl-sm border border-white/5'
                                            }`}>
                                            <p className="text-sm md:text-base leading-relaxed whitespace-pre-wrap">{m.content}</p>
                                        </div>
                                    </motion.div>
                                ))
                            )}

                            {isLoading && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex justify-start"
                                >
                                    <div className="bg-white/10 text-neutral-200 rounded-2xl rounded-tl-sm border border-white/5 px-5 py-4 flex items-center gap-1.5">
                                        <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                                        <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                                        <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full animate-bounce"></span>
                                    </div>
                                </motion.div>
                            )}
                            <div ref={messagesEndRef} className="h-1" />
                        </AnimatePresence>
                    </div>

                    {/* Input Area */}
                    <div className="p-4 bg-white/5 border-t border-white/10">
                        <form onSubmit={handleSubmit} className="flex gap-3 relative">
                            <input
                                className="flex-1 bg-black/40 border border-white/10 rounded-full py-3.5 pl-6 pr-14 text-sm md:text-base text-white placeholder:text-neutral-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
                                value={input}
                                onChange={handleInputChange}
                                placeholder="Ask me anything..."
                                disabled={isLoading}
                            />
                            <button
                                type="submit"
                                disabled={isLoading || !input?.trim()}
                                className="absolute right-2 top-1/2 -translate-y-1/2 w-10 md:w-11 h-10 md:h-11 bg-blue-600 hover:bg-blue-500 text-white rounded-full flex items-center justify-center transition-colors disabled:opacity-50 disabled:hover:bg-blue-600 shadow-md"
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-0.5"><path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" /></svg>
                            </button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
