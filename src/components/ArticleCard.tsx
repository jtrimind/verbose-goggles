
import { Eye, Heart } from 'lucide-react';

interface ArticleProps {
    title: string;
    description: string;
    date: string;
    author: string;
    views: number;
    likes: number;
    tag: string;
    image: string;
}

export default function ArticleCard({ title, description, date, author, views, likes, tag, image }: ArticleProps) {
    return (
        <article className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-300 border border-gray-100 hover:-translate-y-1 cursor-pointer">
            <div className="relative h-56 overflow-hidden bg-gray-100">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                />
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold text-blue-800 uppercase tracking-widest border border-white/50 shadow-sm">
                    {tag}
                </span>
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-xs text-gray-500 mb-3 font-medium">
                    <span>{date}</span>
                    <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                    <span>{author}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 leading-snug group-hover:text-blue-700 transition-colors">
                    {title}
                </h3>

                <p className="text-gray-600 text-sm line-clamp-3 mb-6 flex-grow leading-relaxed">
                    {description}
                </p>

                <div className="flex items-center justify-between text-xs text-gray-400 border-t border-gray-100 pt-4 mt-auto">
                    <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1.5 hover:text-gray-600 transition-colors">
                            <Eye className="w-4 h-4" /> {views.toLocaleString()}
                        </span>
                        <span className="flex items-center gap-1.5 hover:text-red-500 transition-colors">
                            <Heart className="w-4 h-4" /> {likes.toLocaleString()}
                        </span>
                    </div>
                    <span className="font-semibold text-blue-600 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">Read More &rarr;</span>
                </div>
            </div>
        </article>
    );
}
