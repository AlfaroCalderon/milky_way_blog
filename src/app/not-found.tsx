import { House } from "lucide-react";
import Link from "next/link";

export default function NotFound(){
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-slate-200 text-gray-900 font-sans">
            <h1 className="text-6xl font-bold mb-4 text-red-500 tracking-wider">404</h1>
            <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
            <p className="text-lg mb-8 text-slate-500 text-center max-w-md">
            Sorry, the page you are looking for does not exist or has been moved.
            </p>
            <Link href="/" className="px-6 py-3 bg-blue-600 text-white rounded-lg flex items-center font-semibold shadow hover:bg-blue-700 transition">
                <House className="inline-block mr-2" size={20} />Go Home
            </Link>
        </div>
    )
}