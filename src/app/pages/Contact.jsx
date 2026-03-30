import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Contact() {
    return (
        <div className="w-full bg-white py-12 md:py-16 px-4 md:px-8 flex justify-center font-montserrat-regular">
            <div className="max-w-7xl w-full">

                <div className="flex flex-col items-start mb-8 md:mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 border-b-[3px] border-orange-500 pb-2">İletişim</h2>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-stretch">

                    {/* İletişim Bilgileri */}
                    <div className="w-full lg:w-2/5 bg-[#062327] rounded-2xl p-7 md:p-10 text-gray-200 shadow-xl flex flex-col justify-between">
                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white">Bize Ulaşın</h3>
                            <p className="text-gray-400 mb-8 md:mb-10 text-base md:text-lg font-light">
                                Faaliyetlerimiz hakkında bilgi almak veya bize katılmak için iletişime geçebilirsiniz.
                            </p>

                            <div className="flex flex-col gap-6 md:gap-8">
                                <div className="flex items-center gap-4 md:gap-5">
                                    <div className="w-11 h-11 md:w-14 md:h-14 bg-orange-500/20 rounded-full flex items-center justify-center text-orange-500 text-xl md:text-2xl shrink-0">
                                        <FaPhoneAlt />
                                    </div>
                                    <div className="text-base md:text-xl font-bold">+90 541 479 88 09</div>
                                </div>

                                <div className="flex items-center gap-4 md:gap-5">
                                    <div className="w-11 h-11 md:w-14 md:h-14 bg-orange-500/20 rounded-full flex items-center justify-center text-orange-500 text-xl md:text-2xl shrink-0">
                                        <FaEnvelope />
                                    </div>
                                    <div className="text-sm md:text-xl font-bold break-all">kardes@hareketidernegi.com</div>
                                </div>

                                <div className="flex items-start gap-4 md:gap-5">
                                    <div className="w-11 h-11 md:w-14 md:h-14 bg-orange-500/20 rounded-full flex items-center justify-center text-orange-500 text-xl md:text-2xl shrink-0">
                                        <FaMapMarkerAlt />
                                    </div>
                                    <div className="text-sm md:text-lg">
                                        Mehmet Akif Mahallesi, Fatih Bulvarı No:147,<br /> Sultanbeyli / İstanbul
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-10 pt-7 border-t border-gray-700/50">
                            <h4 className="text-sm md:text-lg font-semibold mb-4 md:mb-5 text-gray-300">Sosyal Medyada Biz</h4>
                            <div className="flex gap-3 md:gap-4">
                                <a href="https://www.instagram.com/kardeshareketi?igsh=ejIyYW41cWpucG85" target="_blank" rel="noopener noreferrer" className="w-10 h-10 md:w-12 md:h-12 bg-white/10 hover:bg-orange-500 hover:text-white rounded-full flex items-center justify-center text-xl md:text-2xl transition-all duration-300">
                                    <FaInstagram />
                                </a>
                                <a href="#" className="w-10 h-10 md:w-12 md:h-12 bg-white/10 hover:bg-orange-500 hover:text-white rounded-full flex items-center justify-center text-xl md:text-2xl transition-all duration-300">
                                    <FaYoutube />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* İletişim Formu */}
                    <div className="w-full lg:w-3/5 bg-gray-50 rounded-2xl p-7 md:p-10 shadow-lg border border-gray-100">
                        <h3 className="text-2xl md:text-3xl font-bold mb-5 md:mb-6 text-gray-800">Mesaj Gönderin</h3>
                        <form className="flex flex-col gap-4 md:gap-6">
                            <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
                                <input
                                    type="text"
                                    placeholder="Adınız Soyadınız"
                                    className="w-full px-4 md:px-5 py-3 md:py-4 rounded-xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 transition shadow-sm text-sm md:text-base"
                                />
                                <input
                                    type="text"
                                    placeholder="Telefon Numaranız"
                                    className="w-full px-4 md:px-5 py-3 md:py-4 rounded-xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 transition shadow-sm text-sm md:text-base"
                                />
                            </div>
                            <input
                                type="email"
                                placeholder="E-posta Adresiniz"
                                className="w-full px-4 md:px-5 py-3 md:py-4 rounded-xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 transition shadow-sm text-sm md:text-base"
                            />
                            <textarea
                                placeholder="Mesajınız..."
                                rows="5"
                                className="w-full px-4 md:px-5 py-3 md:py-4 rounded-xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 transition shadow-sm resize-none text-sm md:text-base"
                            />
                            <button
                                type="button"
                                className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 md:py-4 rounded-xl transition mt-1 shadow-md hover:shadow-lg text-sm md:text-base"
                            >
                                Mesajı Gönder
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
}
