import Header from '../components/Header';
import Footer from '../components/Footer';

export default function TermsAndConditions() {
    return (
        <div className="min-h-screen bg-white flex flex-col font-sans">
            <Header />

            <main className="flex-grow pt-[110px] pb-20 px-6">
                <div className="max-w-[800px] mx-auto">
                    <h1 className="text-3xl md:text-4xl font-bold mb-8 tracking-tighter text-gray-900 border-b border-black pb-6">
                        삼성전자 기술블로그(Tech Blog) 이용약관 (Terms & Conditions)
                    </h1>

                    <div className="prose prose-lg text-gray-600 leading-relaxed">
                        <section className="mb-10">
                            <h2 className="text-lg font-bold text-gray-900 mb-2">제 1 조 (목적)</h2>
                            <p className="text-sm">
                                본 약관은 삼성전자 주식회사(이하 "회사"라 합니다)가 제공하는 기술블로그(Tech Blog) 및 관련 제반 서비스(이하 “서비스”라 합니다)의 이용과 관련하여 회사와 회원 간의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-lg font-bold text-gray-900 mb-2">제 2 조 (정의)</h2>
                            <p className="text-sm mb-2">
                                이 약관에서 사용하는 용어의 정의는 다음과 같습니다.
                            </p>
                            <ol className="list-decimal pl-6 text-sm space-y-1">
                                <li>"서비스"라 함은 구현되는 단말기(PC, TV, 휴대형단말기 등 각종 유무선 장치를 포함)와 상관없이 "회원"이 이용할 수 있는 삼성전자 기술블로그 및 관련 제반 서비스를 의미합니다.</li>
                                <li>"회원"이라 함은 회사의 "서비스"에 접속하여 이 약관에 따라 "회사"와 이용계약을 체결하고 "회사"가 제공하는 "서비스"를 이용하는 고객을 말합니다.</li>
                                <li>"게시물"이라 함은 "회원"이 "서비스"를 이용함에 있어 "서비스상"에 게시한 부호ㆍ문자ㆍ음성ㆍ음향ㆍ화상ㆍ동영상 등의 정보 형태의 글, 사진, 동영상 및 각종 파일과 링크 등을 의미합니다.</li>
                            </ol>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-lg font-bold text-gray-900 mb-2">제 3 조 (약관의 게시와 개정)</h2>
                            <p className="text-sm">
                                1. "회사"는 이 약관의 내용을 "회원"이 쉽게 알 수 있도록 서비스 초기 화면에 게시합니다.
                                <br />
                                2. "회사"는 「약관의 규제에 관한 법률」, 「정보통신망 이용촉진 및 정보보호 등에 관한 법률(이하 "정보통신망법")」 등 관련법을 위배하지 않는 범위에서 이 약관을 개정할 수 있습니다.
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-lg font-bold text-gray-900 mb-2">제 4 조 (서비스의 제공 등)</h2>
                            <p className="text-sm">
                                회사는 회원에게 아래와 같은 서비스를 제공합니다.
                            </p>
                            <ul className="list-disc pl-6 text-sm mt-2 space-y-1">
                                <li>기술 관련 정보 제공 서비스</li>
                                <li>게시판형 서비스</li>
                                <li>기타 회사가 추가 개발하거나 다른 회사와의 제휴계약 등을 통해 회원에게 제공하는 일체의 서비스</li>
                            </ul>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-lg font-bold text-gray-900 mb-2">부칙</h2>
                            <p className="text-sm">
                                본 약관은 2024년 12월 15일부터 시행합니다.
                            </p>
                        </section>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
