"use client";
import React, { useState } from "react";
import {
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalTrigger,
} from "./ui/animated-modal";
import { motion } from "framer-motion";

export function ContactModal({ triggerText = "Book a Call", className }: { triggerText?: string, className?: string }) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        service: "Video Editing",
        description: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real application, you would send this data to your backend
        // For now, we'll try to open a mailto link
        const subject = `Service Inquiry: ${formData.service}`;
        const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0AService: ${formData.service}%0D%0ADescription: ${formData.description}`;
        window.location.href = `mailto:contact@graphigo.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="flex items-center justify-center">
            <Modal>
                <ModalTrigger className={className}>
                    {triggerText}
                </ModalTrigger>
                <ModalBody>
                    <ModalContent>
                        <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-6">
                            Book your{" "}
                            <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
                                Service
                            </span>{" "}
                            now! 🚀
                        </h4>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-1.5">
                                    <label htmlFor="name" className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 rounded-lg bg-gray-50 dark:bg-neutral-900 border border-gray-200 dark:border-neutral-700 focus:ring-2 focus:ring-primary focus:outline-none transition-all"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <label htmlFor="email" className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 rounded-lg bg-gray-50 dark:bg-neutral-900 border border-gray-200 dark:border-neutral-700 focus:ring-2 focus:ring-primary focus:outline-none transition-all"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>
                            <div className="space-y-1.5">
                                <label htmlFor="service" className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                                    Service
                                </label>
                                <select
                                    name="service"
                                    id="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 rounded-lg bg-gray-50 dark:bg-neutral-900 border border-gray-200 dark:border-neutral-700 focus:ring-2 focus:ring-primary focus:outline-none transition-all appearance-none"
                                >
                                    <option value="Video Editing">Video Editing</option>
                                    <option value="Graphic Design">Graphic Design</option>
                                    <option value="Management">Management</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            <div className="space-y-1.5">
                                <label htmlFor="description" className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                                    Description
                                </label>
                                <textarea
                                    name="description"
                                    id="description"
                                    rows={3}
                                    required
                                    value={formData.description}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 rounded-lg bg-gray-50 dark:bg-neutral-900 border border-gray-200 dark:border-neutral-700 focus:ring-2 focus:ring-primary focus:outline-none transition-all resize-none"
                                    placeholder="Tell us about your project..."
                                ></textarea>
                            </div>

                            <div className="pt-4">
                                <button
                                    type="submit"
                                    className="w-full px-4 py-3 rounded-lg font-bold bg-primary text-primary-foreground hover:bg-primary/90 transition-colors shadow-lg"
                                >
                                    Submit Request
                                </button>
                            </div>
                        </form>
                    </ModalContent>
                </ModalBody>
            </Modal>
        </div>
    );
}
