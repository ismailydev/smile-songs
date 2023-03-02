import Link from "next/link";

export default function Nav() {
    return (
        <nav className="bg-black/20">
            <div className="max-w-5xl mx-auto flex items-center justify-between py-5 px-4 lg:px-0">
                <Link href="/" className="font-lora">
                    smile-songs
                </Link>
                <div className="flex gap-4 md:gap-20 items-center justify-between">
                    <Link href="/addnew">add new</Link>
                    <Link href="/stats">stats</Link>
                </div>
            </div>
        </nav>
    );
}
