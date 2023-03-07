import Link from "next/link";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

export default function Nav() {
    const [mounted, setMounted] = useState(false);
    const { systemTheme, theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    return (
        <nav className="bg-slate-300 dark:bg-black/20">
            <div className="max-w-5xl mx-auto flex items-center justify-between py-5 px-4 lg:px-0">
                <Link href="/" className="font-lora">
                    smile-songs
                </Link>
                <div className="flex gap-4 md:gap-20 items-center justify-between">
                    <Link href="/addnew">add new</Link>
                    <Link href="/stats">stats</Link>
                    {currentTheme === "dark" ? (
                        <SunIcon
                            className="mt-1 h-5 w-5 cursor-pointer text-accent-dark"
                            onClick={() => setTheme("light")}
                        />
                    ) : (
                        <MoonIcon
                            className="mt-1 h-4 w-4 cursor-pointer text-primary-dark"
                            onClick={() => setTheme("dark")}
                        />
                    )}
                </div>
            </div>
        </nav>
    );
}
