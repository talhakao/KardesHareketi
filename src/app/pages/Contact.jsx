import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Contact() {
    return (
        <div className="w-full bg-white py-16 px-8 flex justify-center font-montserrat-regular">
            <div className="max-w-7xl w-full">
                
                {/* Sayfa Başlığı */}
                <div className="flex flex-col items-start mb-12">
                    <h2 className="text-4xl font-bold text-gray-800 border-b-[3px] border-orange-500 pb-2">İletişim</h2>
                </div>

                <div className="flex max-lg:flex-col gap-12 items-stretch">
                    
                    {/* Sol Taraf: İletişim Bilgileri */}
                    <div className="w-2/5 max-lg:w-full bg-[#062327] rounded-2xl p-10 text-gray-200 shadow-xl flex flex-col justify-between">
                        <div>
                            <h3 className="text-3xl font-bold mb-4 text-white">Bize Ulaşın</h3>
                            <p className="text-gray-400 mb-10 text-lg font-light">Faaliyetlerimiz hakkında bilgi almak veya bize katılmak için iletişime geçebilirsiniz.</p>

                            <div className="flex flex-col gap-8">
                                <div className="flex items-center gap-5">
                                    <div className="w-14 h-14 bg-orange-500/20 rounded-full flex items-center justify-center text-orange-500 text-2xl shrink-0">
                                        <FaPhoneAlt />
                                    </div>
                                    <div className="text-xl font-bold">+90 541 479 88 09</div>
                                </div>

                                <div className="flex items-center gap-5">
                                    <div className="w-14 h-14 bg-orange-500/20 rounded-full flex items-center justify-center text-orange-500 text-2xl shrink-0">
                                        <FaEnvelope />
                                    </div>
                                    <div className="text-xl font-bold">bilgi@kardeshareketi.org</div>
                                </div>

                                <div className="flex items-start gap-5">
                                    <div className="w-14 h-14 bg-orange-500/20 rounded-full flex items-center justify-center text-orange-500 text-2xl shrink-0">
                                        <FaMapMarkerAlt />
                                    </div>
                                    <div className="text-lg">Örnek Mahallesi, İyilik Sokak No: 1,<br/> İstanbul, Türkiye</div>
                                </div>
                            </div>
                        </div>

                        {/* Sosyal Medya */}
                        <div className="mt-12 pt-8 border-t border-gray-700/50">
                            <h4 className="text-lg font-semibold mb-5 text-gray-300">Sosyal Medyada Biz</h4>
                            <div className="flex gap-4">
                                <a href="#" className="w-12 h-12 bg-white/10 hover:bg-orange-500 hover:text-white rounded-full flex items-center justify-center text-2xl transition-all duration-300">
                                    <FaInstagram />
                                </a>
                                <a href="#" className="w-12 h-12 bg-white/10 hover:bg-orange-500 hover:text-white rounded-full flex items-center justify-center text-2xl transition-all duration-300">
                                    <FaXTwitter />
                                </a>
                                <a href="#" className="w-12 h-12 bg-white/10 hover:bg-orange-500 hover:text-white rounded-full flex items-center justify-center text-2xl transition-all duration-300">
                                    <FaYoutube />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Sağ Taraf: İletişim Formu */}
                    <div className="w-3/5 max-lg:w-full bg-gray-50 rounded-2xl p-10 shadow-lg border border-gray-100">
                        <h3 className="text-3xl font-bold mb-6 text-gray-800">Mesaj Gönderin</h3>
                        <form className="flex flex-col gap-6">
                            <div className="flex max-md:flex-col gap-6">
                                <input type="text" placeholder="Adınız Soyadınız" className="w-full px-5 py-4 rounded-xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 transition shadow-sm" />
                                <input type="text" placeholder="Telefon Numaranız" className="w-full px-5 py-4 rounded-xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 transition shadow-sm" />
                            </div>
                            <input type="email" placeholder="E-posta Adresiniz" className="w-full px-5 py-4 rounded-xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 transition shadow-sm" />
                            <textarea placeholder="Mesajınız..." rows="5" className="w-full px-5 py-4 rounded-xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 transition shadow-sm resize-none"></textarea>
                            <button type="button" className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 rounded-xl transition mt-2 shadow-md hover:shadow-lg">Mesajı Gönder</button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
}