"use client"

import { motion } from "framer-motion"
import { Play } from "lucide-react"

const longForm = [
    {
        title: "The Future of Digital Marketing in 2025",
        category: "Podcast",
        duration: "45 min watch",
        description: "We sat down with industry leaders to discuss the shifting landscape of social media algorithms and what it means for creators.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuASsYK9bLjVIdX-MLBcNK-5sBDQVokShgDJ3ZtPyeaKhkGn04zOBHiDyGnGEZlfPtIRaZMJBtCl9CzXJZMBlfUPI-wc3kcmVkiBC1QAX41fduRmNAJjf7_hTuj9omS6NPnRNKbTLjxpIou1nt1lQLbvgbhV9So0FD48D9ARGEkRWGApjTXerbBN_Tcy_D9Mf9n1qx24jcb47tCO_jqe1eiaVMaFHHyCE8jYtbBcQWvdKGHG5xaTmy-AAH54e4A_8fabrS12-dNAqrM",
    },
    {
        title: "Scaling a Mountain: A Journey Within",
        category: "Vlog",
        duration: "12 min watch",
        description: "An cinematic travel vlog editing showcasing the raw beauty of the Himalayas. Edited for high retention and emotional impact.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCfzGJ7e7IN08qEVhHCZjlClQWXWIlyGAOB7G0G66834vQfNLhFMikPq4zxJ6S98DmRv1L0tUAKu4yz4u9n6K9dqwa_COZRGdUDYAHmORmxNfyHkiEr_9tEteK3Kjf_iHD7fuVCKceF2nzaKMD4a6pEsyW2HCSFijcYwFK-jMRemyiRCX7QibVrD3cGIktxGoUtwslLI-DbKj5BkjT5-jbz82Zzgpk1Jn75n2pkweCUDq3kj4mQRdyQd284Z8JGwqngBkLfynZpA8s",
    },
    {
        title: "Company Culture: Behind The Scenes",
        category: "Corporate",
        duration: "3 min watch",
        description: "Highlighting the vibrant team culture at TechCorp. Fast-paced cuts mixed with interview segments.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCsrdnuy5uYPsSNUMcVXIn_FS_avINKM7GV2zGsqo1_f5oC21rk0Evo1UlXI6MzQgR1g6U8SL0ERWPeSG4DIeSLzZrwVapnXt1-ojVYgsCOy8eMWt6jkCwSfM7cTV_s2hNdv-Tv6SJY2pvdicWcDj5LaBwGNOCSuO-7_8E2LOVuZ7h22aRMxEsvnuixn2WwmoxE2Ey1jqnsFfqKgL24Yp_BNQriu_3vwT3e83A57XbguTbN_pa4DpOnCAzXW04seET9lba0oVFyGsA",
    },
    {
        title: "Retro Gaming Tech Review",
        category: "Review",
        duration: "15 min watch",
        description: "A nostalgic deep dive into 90s gaming consoles. Effects-heavy editing to simulate the CRT era.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDu-l-nAUzJicaXM0CrdTbfodUDGk8RbOaKbLFs4uy_pc_AsuB5BixmDWbaudA55GuvLVmLqIShI9lYENEG4j-UQmpT8naA1OrF9AISCeZxIBfxplxYwm7xaUeVnK9e2t-7BvX3hwmTj9KTrLYuf7wNAUKO74fzyJsydCqEa2UuyG6U73KpMXOjBpzVN8Xr7-sYX27L-RkU-ni-3xSZphk1VU9-D0Heity1F0RvMBzM-E_fQNgEVXcZTJtlBuSueCeFKAsuMe2cC9c",
    },
]

export function LongFormStorytelling() {
    return (
        <section className="mb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="flex items-end justify-between mb-10 border-b border-gray-200 dark:border-white/10 pb-4">
                <div>
                    <h2 className="text-2xl font-bold mb-1">Long Form Storytelling</h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Deep dives, podcasts & documentaries.</p>
                </div>
                <button className="hidden sm:flex items-center text-[#00E0C6] text-sm font-medium hover:underline">
                    View Channel <span className="ml-1">→</span>
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {longForm.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="group bg-gray-50 dark:bg-[#0f0f0f] rounded-2xl overflow-hidden border border-gray-200 dark:border-white/5 hover:border-[#00E0C6]/30 transition-all duration-300 hover:shadow-2xl hover:shadow-[#00E0C6]/5"
                    >
                        <div className="aspect-video w-full bg-black relative">
                            <img
                                alt={item.title}
                                className="w-full h-full object-cover opacity-90"
                                src={item.image}
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-16 h-12 bg-red-600 rounded-lg flex items-center justify-center cursor-pointer shadow-lg hover:bg-red-700 transition-colors">
                                    <Play size={32} className="text-white fill-white" />
                                </div>
                            </div>
                        </div>
                        <div className="p-6 text-left">
                            <div className="flex items-center gap-3 mb-3">
                                <span className="px-2 py-1 bg-[#00E0C6]/10 text-[#00E0C6] text-xs rounded font-medium">
                                    {item.category}
                                </span>
                                <span className="text-gray-400 text-xs">{item.duration}</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-[#00E0C6] transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400 text-sm line-clamp-2">
                                {item.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
