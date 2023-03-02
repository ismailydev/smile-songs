import Nav from "@/components/Nav";

export default function Layout({ children }) {
    return (
        <div className="min-h-screen bg-black/95 text-slate-200 font-poppins">
            <Nav />
            <div className="max-w-5xl mx-auto px-4 lg:px-0">{children}</div>
        </div>
    );
}
