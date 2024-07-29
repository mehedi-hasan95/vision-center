import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Footer } from "@/components/common/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Community Eye Center",
    description: "Community Eye Center",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={cn(
                    inter.className,
                    "bg-gradient-to-b from-[#98B5C7] via-[#316B93] to-[#004679] bg-no-repeat bg-contain min-h-screen"
                )}
            >
                <div className="max-w-screen-lg mx-auto bg-white">
                    {children}
                    <Footer />
                </div>
            </body>
        </html>
    );
}
