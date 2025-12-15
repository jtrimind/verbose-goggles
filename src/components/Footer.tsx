import { Link } from 'react-router-dom';


export default function Footer() {
    return (
        <footer className="bg-[#f8f8f8] border-t border-gray-200 py-16 mt-auto">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border-b border-gray-300 pb-8 mb-8">
                    <div className="font-bold text-xl tracking-tight">Samsung Tech</div>
                    <div className="flex gap-8 text-sm font-medium text-gray-600">
                        <Link to="/privacy-policy" className="hover:text-black transition-colors">Privacy Policy</Link>
                        <a href="#" className="hover:text-black transition-colors">Terms & Conditions</a>
                        <a href="#" className="hover:text-black transition-colors">Contact Us</a>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Samsung Electronics Co., Ltd. All Rights Reserved.</p>
                    <div className="flex gap-4">
                        {/* Social icons or other links could go here */}
                        <span>Global Site</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
