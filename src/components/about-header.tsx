"use client"

import { Users } from "lucide-react"

export function AboutHeader() {
    return (
        <header className="text-center mb-20 pt-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-xs font-medium text-gray-600 dark:text-gray-400 mb-6">
                <Users size={14} />
                <span>Who We Are</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                Meet The <span className="font-serif italic font-normal text-gray-500 dark:text-gray-400">Team</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                A collective of creative minds dedicated to transforming your vision into compelling digital narratives. We are the architects of engagement.
            </p>
        </header>
    )
}
