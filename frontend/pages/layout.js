import Nav from "@/components/Nav";
import { ThemeProvider } from "next-themes";

export default function Layout({ children }) {
    return (
        <ThemeProvider enableSystem={true} attribute="class">
            <div className="min-h-screen bg-slate-200 dark:bg-black/95 text-black dark:text-slate-200 font-poppins transition-colors duration-500 ease-in-out">
                <Nav />
                <div className="max-w-5xl mx-auto px-4 lg:px-0">{children}</div>
            </div>
        </ThemeProvider>
    );
}
