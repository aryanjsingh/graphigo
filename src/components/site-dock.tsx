"use client";

import React from "react";
import Link from "next/link";
import {
    HomeIcon,
    BriefcaseIcon,
    UserIcon,
    MailIcon
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Dock, DockIcon, DockItem, DockLabel } from "@/components/ui/dock";
import { ContactModal } from "@/components/contact-modal";

const DATA = [
    {
        label: "Home",
        href: "/",
        icon: HomeIcon,
    },
    {
        label: "Works",
        href: "/works",
        icon: BriefcaseIcon,
    },
    {
        label: "About Us",
        href: "/about",
        icon: UserIcon,
    },
];

export function SiteDock() {
    return (
        <div className="fixed bottom-8 left-1/2 max-w-full -translate-x-1/2 z-[5000]">
            <Dock className="bg-background/60 backdrop-blur-md border border-white/10 rounded-full">
                {DATA.map((item) => (
                    <DockItem key={item.label} className="aspect-square rounded-full">
                        <Link href={item.href} aria-label={item.label}>
                            <DockLabel>{item.label}</DockLabel>
                            <DockIcon>
                                <item.icon className="size-6 text-muted-foreground hover:text-foreground transition-colors" />
                            </DockIcon>
                        </Link>
                    </DockItem>
                ))}

                {/* Contact Item using Modal */}
                <DockItem className="aspect-square rounded-full">
                    <DockLabel>Contact Us</DockLabel>
                    <DockIcon>
                        <ContactModal
                            triggerText=""
                            className="p-0 bg-transparent text-muted-foreground hover:text-foreground hover:bg-transparent shadow-none"
                        >
                            <MailIcon className="size-6" />
                        </ContactModal>
                    </DockIcon>
                </DockItem>
            </Dock>
        </div>
    );
}
