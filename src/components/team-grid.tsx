"use client"

import { Mail, Link as LinkIcon } from "lucide-react"

const team = [
    {
        name: "Sarah Jenkins",
        role: "Lead Editor",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDu-l-nAUzJicaXM0CrdTbfodUDGk8RbOaKbLFs4uy_pc_AsuB5BixmDWbaudA55GuvLVmLqIShI9lYENEG4j-UQmpT8naA1OrF9AISCeZxIBfxplxYwm7xaUeVnK9e2t-7BvX3hwmTj9KTrLYuf7wNAUKO74fzyJsydCqEa2UuyG6U73KpMXOjBpzVN8Xr7-sYX27L-RkU-ni-3xSZphk1VU9-D0Heity1F0RvMBzM-E_fQNgEVXcZTJtlBuSueCeFKAsuMe2cC9c",
        color: "primary", // Using primary/teal as custom
        textColor: "group-hover:text-[#00E0C6]",
        borderColor: "group-hover:border-[#00E0C6]",
        glowColor: "bg-[#00E0C6]/20 group-hover:bg-[#00E0C6]/40",
    },
    {
        name: "David Chen",
        role: "VFX Specialist",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuASsYK9bLjVIdX-MLBcNK-5sBDQVokShgDJ3ZtPyeaKhkGn04zOBHiDyGnGEZlfPtIRaZMJBtCl9CzXJZMBlfUPI-wc3kcmVkiBC1QAX41fduRmNAJjf7_hTuj9omS6NPnRNKbTLjxpIou1nt1lQLbvgbhV9So0FD48D9ARGEkRWGApjTXerbBN_Tcy_D9Mf9n1qx24jcb47tCO_jqe1eiaVMaFHHyCE8jYtbBcQWvdKGHG5xaTmy-AAH54e4A_8fabrS12-dNAqrM",
        textColor: "group-hover:text-purple-400",
        borderColor: "group-hover:border-purple-500",
        glowColor: "bg-purple-500/20 group-hover:bg-purple-500/40",
    },
    {
        name: "Elena Rodriguez",
        role: "Creative Director",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDDzwsI6Odb_4_uUzP6gyVTLfaaGBsAc05HVu3-AK4eRkmn9uJp7Y-NliWHgbSnL2qwbrTOJ6lphgGQhHU6qs6vEZ8POMW7bKdLpFff2qLN2Id6O_RlGMVYoRZ0QnwK6M7U7PJbSmeDuBfkeAoTBHYePKOPzxWTdpLM7YuYfvjGfLLDLON8m-ONQRehQpYnsVtEpNqczcByd_BeqjJuTji7Gbbqyu_ZzOioeIpb-4qniQBykbbSSKmPuF09nP4a7lRx8bBiHLiiH6s",
        textColor: "group-hover:text-blue-400",
        borderColor: "group-hover:border-blue-500",
        glowColor: "bg-blue-500/20 group-hover:bg-blue-500/40",
    },
    {
        name: "Marcus Johnson",
        role: "Motion Designer",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC4KJV2eX3u-n-lUKB8cmRcHBpYHhrtTsPxg6b1QGNHIYxvy1TIE4e8NfYjEPTy4pxr998tAaorOEdzL5vcZtSO-qvdG1Dr-QIIRH3q155b9uaolidQK5abwklClspa0w2E6FJb4eJPBluXX4IKpZzrNVbBatLk0s3pYI32ZZ99SQ3Q1gPQgs_yPoNF3N0bnWvE6x8Li11xVtJNN8nXaWi3EVdIQe5y_6nEVcFea33X5xexAEKbQ9yI72CsuNN6EWP169rk7WwWb8E",
        textColor: "group-hover:text-pink-400",
        borderColor: "group-hover:border-pink-500",
        glowColor: "bg-pink-500/20 group-hover:bg-pink-500/40",
    },
    {
        name: "Priya Patel",
        role: "Content Strategist",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCfzGJ7e7IN08qEVhHCZjlClQWXWIlyGAOB7G0G66834vQfNLhFMikPq4zxJ6S98DmRv1L0tUAKu4yz4u9n6K9dqwa_COZRGdUDYAHmORmxNfyHkiEr_9tEteK3Kjf_iHD7fuVCKceF2nzaKMD4a6pEsyW2HCSFijcYwFK-jMRemyiRCX7QibVrD3cGIktxGoUtwslLI-DbKj5BkjT5-jbz82Zzgpk1Jn75n2pkweCUDq3kj4mQRdyQd284Z8JGwqngBkLfynZpA8s",
        textColor: "group-hover:text-yellow-400",
        borderColor: "group-hover:border-yellow-500",
        glowColor: "bg-yellow-500/20 group-hover:bg-yellow-500/40",
    },
    {
        name: "Tom Baker",
        role: "Sound Engineer",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD_bXOo30hUUBpBSBnRjChaqh3vQH5GljqaAk_hQSPAagkqdgMUbHYiHTAOt-vdrpnzPKfWvP9kaByvN8vVcczjnc-sbZCLndAk5L5F3v_Zl3MHkbMH1Z38u1DuQcLIcRaeiqn2zOsEs12mrxyoxbFmjf_pFDLZM0HR4_ZH3yHHlDLGcpZzBtDnx-0w-a2aMMswmF6v2ewJSxkrUqcjbxehfZqr5FqyXJfnS3JOWgdIfziF3YmlYGgFCDFCEcz8M8tPBwVipUnCC5Y",
        textColor: "group-hover:text-green-400",
        borderColor: "group-hover:border-green-500",
        glowColor: "bg-green-500/20 group-hover:bg-green-500/40",
    },
]

export function TeamGrid() {
    return (
        <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20 dark:opacity-5">
                <div className="w-[800px] h-[800px] bg-gradient-to-br from-[#00E0C6]/30 to-purple-600/30 rounded-full blur-[100px]"></div>
            </div>
            <div className="relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4">
                        The <span className="text-[#00E0C6]">Crew</span>
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
                        The talented individuals making magic happen behind the screens.
                    </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-16">
                    {team.map((member, index) => (
                        <div key={index} className="group flex flex-col items-center text-center">
                            <div className="relative w-32 h-32 md:w-40 md:h-40 mb-6">
                                <div
                                    className={`absolute inset-0 rounded-full blur-md transition-all duration-300 scale-90 group-hover:scale-105 ${member.glowColor}`}
                                ></div>
                                <div
                                    className={`w-full h-full rounded-full overflow-hidden border-2 border-gray-200 dark:border-white/10 transition-colors duration-300 bg-gray-800 relative z-10 ${member.borderColor}`}
                                >
                                    <img
                                        alt={member.name}
                                        className="w-full h-full object-cover"
                                        src={member.image}
                                    />
                                </div>
                            </div>
                            <h3
                                className={`text-lg font-bold text-gray-900 dark:text-white transition-colors ${member.textColor}`}
                            >
                                {member.name}
                            </h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{member.role}</p>
                            <div className="mt-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                                <a href="#" className={`text-gray-400 ${member.textColor.replace('text-', 'hover:text-')}`}>
                                    <Mail size={16} />
                                </a>
                                <a href="#" className={`text-gray-400 ${member.textColor.replace('text-', 'hover:text-')}`}>
                                    <LinkIcon size={16} />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
