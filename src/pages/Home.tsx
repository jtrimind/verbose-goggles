import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ArticleCard from '../components/ArticleCard';

const ARTICLES = [
    {
        id: 1,
        title: "Optimizing AI Models for On-Device Performance",
        description: "Explore the latest techniques in quantization and pruning to make large language models run efficiently on mobile devices without sacrificing accuracy.",
        date: "Dec 12, 2024",
        author: "Jiwon Lee",
        views: 12500,
        likes: 450,
        tag: "AI",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 2,
        title: "The Future of 6G Connectivity",
        description: "Samsung Research is leading the way in defining the standards for the next generation of wireless communication. Here's what to expect.",
        date: "Dec 10, 2024",
        author: "Michael Park",
        views: 8200,
        likes: 320,
        tag: "Connectivity",
        image: "https://images.unsplash.com/photo-1614064641938-3e852943721d?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 3,
        title: "Enhancing User Security with Knox Matrix",
        description: "A deep dive into how Knox Matrix provides end-to-end protection across all your connected devices in the ecosystem.",
        date: "Dec 08, 2024",
        author: "Security Team",
        views: 15600,
        likes: 680,
        tag: "Security",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 4,
        title: "Sustainable Tech: Using Ocean Bound Plastics",
        description: "How we are incorporating recycled materials into our latest flagship devices to reduce environmental impact.",
        date: "Dec 05, 2024",
        author: "Green Ops",
        views: 9100,
        likes: 540,
        tag: "Sustainability",
        image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 5,
        title: "Advanced Camera Systems in the S25 Series",
        description: "Unveiling the new sensor technology that allows for unprecedented low-light photography and 100x space zoom improvements.",
        date: "Dec 01, 2024",
        author: "Camera Lab",
        views: 22000,
        likes: 1200,
        tag: "Mobile",
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 6,
        title: "Smart Home Interoperability with Matter",
        description: "Seamlessly connecting devices from different manufacturers. A practical guide to setting up your smart home with Matter.",
        date: "Nov 28, 2024",
        author: "IoT Group",
        views: 7800,
        likes: 290,
        tag: "IoT",
        image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80&w=800"
    }
];

export default function Home() {
    const [activeTag, setActiveTag] = useState('All');

    return (
        <div className="min-h-screen bg-white flex flex-col font-sans">
            <Header />

            <main className="flex-grow pt-[110px] pb-20 px-6">
                <div className="max-w-[1200px] mx-auto">

                    <div className="mb-16 pt-8">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tighter text-gray-900">
                            Latest <span className="text-blue-700">Insights</span>
                        </h1>
                        <p className="text-gray-500 text-lg max-w-2xl leading-relaxed">
                            Discover the technologies shaping the future, from AI and 6G to sustainable innovation.
                        </p>
                    </div>

                    {/* Popular Tags */}
                    <div className="flex gap-3 mb-12 overflow-x-auto pb-4 scrollbar-hide">
                        {['All', 'Artificial Intelligence', 'Data Architecture', 'Security', 'Connectivity', 'Mobile'].map((tag) => (
                            <button
                                key={tag}
                                onClick={() => setActiveTag(tag)}
                                className={`px-6 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-300 ${activeTag === tag
                                    ? 'bg-black text-white shadow-lg shadow-black/20 ring-2 ring-black ring-offset-2'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-black'
                                    }`}
                            >
                                {tag}
                            </button>
                        ))}
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12">
                        {ARTICLES.map(article => (
                            <ArticleCard key={article.id} {...article} />
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="mt-24 flex justify-center">
                        <button className="px-10 py-4 bg-gray-900 text-white rounded-full font-bold text-sm tracking-wide hover:bg-black transition-all shadow-xl shadow-gray-200 hover:shadow-2xl hover:-translate-y-1 active:translate-y-0 active:scale-95">
                            LOAD MORE ARTICLES
                        </button>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
