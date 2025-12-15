import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function HeroBanner() {
    return (
        <div className="w-full bg-[#000520] text-white">
            <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                loop={true}
                className="w-full h-[400px] md:h-[500px]"
            >
                {/* Slide 1: Samsung Tech Conference */}
                <SwiperSlide className="relative flex items-center justify-center bg-gradient-to-r from-blue-950 to-black overflow-hidden cursor-grab active:cursor-grabbing">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] opacity-20 bg-cover bg-center"></div>
                    <div className="relative z-10 max-w-[1200px] w-full px-6 flex flex-col justify-center h-full">
                        <div className="md:w-2/3">
                            <h2 className="text-xl md:text-2xl font-bold mb-4">Samsung Tech Blog</h2>
                            <h1 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter leading-tight">
                                Samsung<br />
                                Tech Conference 2025
                            </h1>
                            <div className="flex items-center gap-6 text-lg md:text-xl font-medium">
                                <span className="text-white">November 20</span>
                                <span className="text-pink-500 font-bold">Online</span>
                                <span className="text-gray-400 text-sm md:text-base">Pre-registration 2025.11.6 - 11.20</span>
                            </div>
                        </div>
                        {/* Decorative Text Element */}
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden md:block opacity-80">
                            <span className="text-[200px] font-black tracking-tighter bg-gradient-to-b from-blue-500/50 to-transparent bg-clip-text text-transparent transform">
                                STC
                            </span>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Slide 2: AI Innovation */}
                <SwiperSlide className="relative flex items-center justify-center bg-gradient-to-r from-indigo-950 to-black overflow-hidden cursor-grab active:cursor-grabbing">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2000&auto=format&fit=crop')] opacity-20 bg-cover bg-center"></div>
                    <div className="relative z-10 max-w-[1200px] w-full px-6 flex flex-col justify-center h-full">
                        <div className="md:w-2/3">
                            <span className="inline-block px-3 py-1 bg-blue-600 rounded-full text-xs font-bold mb-6 tracking-wide uppercase">Featured</span>
                            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                                The Era of<br />
                                Agentic AI
                            </h1>
                            <p className="text-gray-300 text-lg md:text-xl max-w-xl mb-8 leading-relaxed">
                                Discover how autonomous agents are redefining software interaction and problem-solving in the digital age.
                            </p>
                            <button className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors">
                                Read the Insight
                            </button>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Slide 3: Sustainable Future */}
                <SwiperSlide className="relative flex items-center justify-center bg-gradient-to-r from-green-950 to-black overflow-hidden cursor-grab active:cursor-grabbing">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2000&auto=format&fit=crop')] opacity-20 bg-cover bg-center"></div>
                    <div className="relative z-10 max-w-[1200px] w-full px-6 flex flex-col justify-center h-full">
                        <div className="md:w-2/3">
                            <span className="inline-block px-3 py-1 bg-green-600 rounded-full text-xs font-bold mb-6 tracking-wide uppercase">Sustainability</span>
                            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                                Innovating for a<br />
                                Greener Tomorrow
                            </h1>
                            <p className="text-gray-300 text-lg md:text-xl max-w-xl mb-8 leading-relaxed">
                                See how we are reducing our carbon footprint through eco-conscious design and manufacturing.
                            </p>
                            <button className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors">
                                Learn More
                            </button>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

            {/* Custom Styles for Swiper Pagination */}
            <style>{`
        .swiper-pagination-bullet {
          background-color: #ffffff;
          opacity: 0.3;
        }
        .swiper-pagination-bullet-active {
          background-color: #ffffff;
          opacity: 1;
        }
      `}</style>
        </div>
    );
}
