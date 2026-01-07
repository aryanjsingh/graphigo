"use client"

import { Play } from "lucide-react"
import { motion } from "framer-motion"

const shorts = [
    {
        title: "Day in the life of a CEO",
        category: "Lifestyle",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDDzwsI6Odb_4_uUzP6gyVTLfaaGBsAc05HVu3-AK4eRkmn9uJp7Y-NliWHgbSnL2qwbrTOJ6lphgGQhHU6qs6vEZ8POMW7bKdLpFff2qLN2Id6O_RlGMVYoRZ0QnwK6M7U7PJbSmeDuBfkeAoTBHYePKOPzxWTdpLM7YuYfvjGfLLDLON8m-ONQRehQpYnsVtEpNqczcByd_BeqjJuTji7Gbbqyu_ZzOioeIpb-4qniQBykbbSSKmPuF09nP4a7lRx8bBiHLiiH6s",
    },
    {
        title: "Summer Collection Teaser",
        category: "Fashion",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCfS4oRiIAzBL5RQFDYO2NmbKVzveWvaN4bugUeeGoaxirBGjO_I4rI06UnbmuMxP1xEeSiX-f9Wl6J1-I06ab01u-wVz6NhTwWVK38j9vmZarSKP4K5l-aEx-Z3JmHHxIz--sQDh12_g-3bChUTKPUclq4ufvoap95hkRCeckzVw8EoyunTP3_ZdkCL9cimlXF9wpQIygsR3qvLwZRAUkD9tY6QVv-gcIzynqsK67-myIhnvFw41WPyq2e9LQQEOc0iy2JS35d2Ww",
    },
    {
        title: "The Future of AI is Here",
        category: "Tech",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC4KJV2eX3u-n-lUKB8cmRcHBpYHhrtTsPxg6b1QGNHIYxvy1TIE4e8NfYjEPTy4pxr998tAaorOEdzL5vcZtSO-qvdG1Dr-QIIRH3q155b9uaolidQK5abwklClspa0w2E6FJb4eJPBluXX4IKpZzrNVbBatLk0s3pYI32ZZ99SQ3Q1gPQgs_yPoNF3N0bnWvE6x8Li11xVtJNN8nXaWi3EVdIQe5y_6nEVcFea33X5xexAEKbQ9yI72CsuNN6EWP169rk7WwWb8E",
    },
    {
        title: "Investment Tips 101",
        category: "Finance",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD_bXOo30hUUBpBSBnRjChaqh3vQH5GljqaAk_hQSPAagkqdgMUbHYiHTAOt-vdrpnzPKfWvP9kaByvN8vVcczjnc-sbZCLndAk5L5F3v_Zl3MHkbMH1Z38u1DuQcLIcRaeiqn2zOsEs12mrxyoxbFmjf_pFDLZM0HR4_ZH3yHHlDLGcpZzBtDnx-0w-a2aMMswmF6v2ewJSxkrUqcjbxehfZqr5FqyXJfnS3JOWgdIfziF3YmlYGgFCDFCEcz8M8tPBwVipUnCC5Y",
    },
]

export function ShortFormMagic() {
    return (
        <section className="mb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="flex items-end justify-between mb-10 border-b border-gray-200 dark:border-white/10 pb-4">
                <div>
                    <h2 className="text-2xl font-bold mb-1">Short Form Magic</h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Reels, TikToks & Shorts optimized for retention.</p>
                </div>
                <button className="hidden sm:flex items-center text-[#00E0C6] text-sm font-medium hover:underline">
                    View All Shorts <span className="ml-1">→</span>
                </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {shorts.map((short, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="group relative aspect-[9/16] bg-gray-200 dark:bg-[#0f0f0f] rounded-2xl overflow-hidden border border-gray-200 dark:border-white/5 hover:border-[#00E0C6]/50 transition-all duration-300 shadow-lg"
                    >
                        <img
                            alt={short.title}
                            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                            src={short.image}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90"></div>
                        <div className="absolute bottom-4 left-4 right-4 text-left">
                            <span className="inline-block px-2 py-1 bg-white/20 backdrop-blur-sm rounded text-[10px] uppercase tracking-wider text-white mb-2">
                                {short.category}
                            </span>
                            <h3 className="text-white font-medium text-sm leading-snug">{short.title}</h3>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="w-12 h-12 bg-[#00E0C6]/90 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,224,198,0.6)] backdrop-blur-md">
                                <Play size={20} className="text-black ml-1 fill-black" />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
