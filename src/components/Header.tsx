
import { Search, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 h-[72px] transition-all duration-300">
            <div className="max-w-[1200px] mx-auto px-6 h-full flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-3 group">
                    {/* Samsung Logo Placeholder or Text */}
                    <span className="font-bold text-2xl tracking-tighter text-black">Samsung Tech</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-10">
                    {['AI', 'Data', 'Security', 'Cloud', 'Mobile', 'IoT'].map((item) => (
                        <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-600 hover:text-black font-medium text-sm transition-colors relative group">
                            {item}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all group-hover:w-full"></span>
                        </a>
                    ))}
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-2">
                    <button className="p-2 text-gray-700 hover:bg-gray-100 rounded-full transition-colors" aria-label="Search">
                        <Search className="w-5 h-5" />
                    </button>
                    <button className="md:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-full transition-colors" aria-label="Menu">
                        <Menu className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </header>
    );
}
