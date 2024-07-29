"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menus = [
    { id: 1, label: "HOME", href: "/" },
    { id: 2, label: "ABOUT US", href: "/about-us" },
    { id: 3, label: "SERVICES", href: "/services" },
    { id: 4, label: "CONTACT", href: "/contact" },
];

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
    const pathName = usePathname();
    return (
        <div>
            <div className="flex justify-between bg-[#41A2D9] py-1">
                <div className="flex items-center gap-x-4">
                    <Image
                        src="/logo.gif"
                        alt="Vision Center"
                        height={120}
                        width={120}
                    />
                    <p className="hidden md:block text-white text-2xl font-bold">
                        Community Eye Center
                    </p>
                </div>
            </div>
            <div className="bg-gradient-to-r from-[#99D96B] to-[#5AC110]">
                <div className="flex justify-end gap-x-0.5">
                    {menus.map((item) => (
                        <Link
                            key={item.id}
                            href={item.href}
                            className={cn(
                                "text-white hover:bg-blue-600 py-2 px-3 text-sm",
                                pathName === item.href &&
                                    "bg-blue-600 font-bold hover:font-bold py-2"
                            )}
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
            </div>
            {children}
        </div>
    );
};

export default PublicLayout;
