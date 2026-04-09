"use client";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { Button, Modal } from "antd";
import { useState, useEffect } from "react";
import { Dropdown, Space } from "antd";
import Image from "next/image";
import WhoAreWe from "@/app/pages/WhoAreWe";
import Contact from "@/app/pages/Contact";
import MainCarousel from "@/app/Components/MainCarousel";
import BizeKatil from "@/app/pages/BizeKatil";

import logo from "@/Images/Qolorly.png";

const DEFAULT_IMAGES = {
    activity_usume_1: "/Images/usume1.JPG",
    activity_usume_2: "/Images/usume2.JPG",
    activity_usume_3: "/Images/usume3.jpg",
    activity_kirtasiye_1: "https://iili.io/FMLmpxj.jpg",
    activity_kirtasiye_2: "https://iili.io/FMLpfOg.jpg",
    activity_kirtasiye_3: "https://iili.io/FMLmDOu.jpg",
    activity_yardim_kart_1: "https://iili.io/FMLpK5F.jpg",
    activity_yardim_kart_2: "https://iili.io/FMLpFJ1.jpg",
    activity_yardim_kart_3: "https://iili.io/FMLmDOu.jpg",
    activity_senligi_1: "https://iili.io/FMLpqba.jpg",
    activity_senligi_2: "https://iili.io/FMLmpxj.jpg",
    activity_senligi_3: "https://iili.io/FMLpfOg.jpg",
    activity_kurban_1: "https://i.imghippo.com/files/FEX3798xuw.jpeg",
    activity_kurban_2: "https://i.imghippo.com/files/mac6312nE.jpeg",
    activity_kurban_3: "https://i.imghippo.com/files/OsIO2212kJs.jpeg",
    activity_eglence_1: "https://i.imghippo.com/files/FEX3798xuw.jpeg",
    activity_eglence_2: "https://i.imghippo.com/files/mac6312nE.jpeg",
    activity_eglence_3: "https://i.imghippo.com/files/OsIO2212kJs.jpeg",
    home_about: "/Images/cocuklarElSalliyor.jpeg",
};

// Scroll-reveal: currentState'e bağlı — sayfa değişince elemanlar yeniden observe edilir
function useReveal(currentState) {
    useEffect(() => {
        // Yeni render edilen elemanların visible sınıfını sıfırla, yeniden gözlemle
        const els = document.querySelectorAll(".reveal, .reveal-left, .reveal-right");
        els.forEach((el) => el.classList.remove("visible"));

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                    }
                });
            },
            { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
        );
        els.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, [currentState]);
}

export default function Main() {
    const [siteImages, setSiteImages] = useState(null); // null = yükleniyor
    const [currentState, setCurrentState] = useState(0);
    const [menuOpen, setMenuOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentTitle, setCurrentTitle] = useState("");
    const [currentImage, setCurrentImage] = useState("");
    const [currentContent, setCurrentContent] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [showFullScreenModal, setShowFullScreenModal] = useState(false);

    useReveal(currentState);

    useEffect(() => {
        const CACHE_KEY = "site_images_main";
        // Cache varsa anında göster
        try {
            const cached = localStorage.getItem(CACHE_KEY);
            if (cached) setSiteImages({ ...DEFAULT_IMAGES, ...JSON.parse(cached) });
        } catch {}

        // Arka planda taze veri çek
        fetch("/api/images")
            .then((r) => r.json())
            .then((data) => {
                if (data && typeof data === "object") {
                    try { localStorage.setItem(CACHE_KEY, JSON.stringify(data)); } catch {}
                    setSiteImages({ ...DEFAULT_IMAGES, ...data });
                } else {
                    setSiteImages((s) => s || DEFAULT_IMAGES);
                }
            })
            .catch(() => setSiteImages((s) => s || DEFAULT_IMAGES));
    }, []);

    const navigate = (state) => {
        setCurrentState(state);
        setMenuOpen(false);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const imgs = siteImages || DEFAULT_IMAGES;

    const Cards = [
        {
            title: "Üşüme Kardeşim",
            content: "İhtiyaç sahibi kardeşlerimize mont, bot, eldiven, atkı ve bere yardımında bulunuyoruz.",
            images: { image1: imgs.activity_usume_1, image2: imgs.activity_usume_2, image3: imgs.activity_usume_3 },
        },
        {
            title: "Kırtasiye Yardımı",
            content: "İhtiyaç sahibi öğrencilerimize okul öncesi kırtasiye desteği sağlıyoruz.",
            images: { image1: imgs.activity_kirtasiye_1, image2: imgs.activity_kirtasiye_2, image3: imgs.activity_kirtasiye_3 },
        },
        {
            title: "Yardım Kartı",
            content: "Yardıma muhtaç ailelere ihtiyaçlarını kendileri karşılayabilmeleri için yardım kartı desteği veriyoruz.",
            images: { image1: imgs.activity_yardim_kart_1, image2: imgs.activity_yardim_kart_2, image3: imgs.activity_yardim_kart_3 },
        },
        {
            title: "Kardeş Şenliği",
            content: "Her bahar yetim ve öksüz kardeşlerimizle bir araya gelerek Kardeş Şenliği düzenliyoruz.",
            images: { image1: imgs.activity_senligi_1, image2: imgs.activity_senligi_2, image3: imgs.activity_senligi_3 },
        },
        {
            title: "Kurban Faaliyetleri",
            content: "Farz ve nafile kurbanlarınızı ihtiyaç sahiplerine ulaştırıyoruz.",
            images: { image1: imgs.activity_kurban_1, image2: imgs.activity_kurban_2, image3: imgs.activity_kurban_3 },
        },
        {
            title: "Eğlenceli Faaliyetler",
            content: "Kardeşlerimizin mutluluğu için düzenli eğlenceli etkinlikler düzenliyoruz.",
            images: { image1: imgs.activity_eglence_1, image2: imgs.activity_eglence_2, image3: imgs.activity_eglence_3 },
        },
    ];

    const handleCancel = () => { setIsModalOpen(false); setShowFullScreenModal(false); };
    const closeModal = () => setShowFullScreenModal(false);

    const scrollToSection = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    const itemsHakkimizda = [
        { label: <div className="font-montserrat-semibold py-1" onClick={() => navigate(1)}>Biz Kimiz?</div>, key: "0" },
        { label: <div className="font-montserrat-semibold py-1" onClick={() => navigate(2)}>Yönetim Kurulu</div>, key: "1" },
        { label: <div className="font-montserrat-semibold py-1" onClick={() => navigate(3)}>Dernek Tüzüğü</div>, key: "2" },
        { label: <div className="font-montserrat-semibold py-1" onClick={() => navigate(4)}>KVKK</div>, key: "3" },
    ];
    const itemsFaaliyetlerimiz = [
        { label: <div className="font-montserrat-semibold py-1" onClick={() => navigate(5)}>Tüm Faaliyetler</div>, key: "0" },
    ];

    const mobileNavItems = [
        { label: "Ana Sayfa",        action: () => navigate(0) },
        { label: "Biz Kimiz?",       action: () => navigate(1) },
        { label: "Yönetim Kurulu",   action: () => navigate(2) },
        { label: "Dernek Tüzüğü",    action: () => navigate(3) },
        { label: "KVKK",             action: () => navigate(4) },
        { label: "Faaliyetlerimiz",  action: () => navigate(5) },
        { label: "İletişim",         action: () => navigate(7) },
    ];

    return (
        <div className="bg-white text-gray-800 relative font-montserrat-regular" id="main">

            {/* ── HEADER ── */}
            <header className="h-16 flex items-center justify-between px-6 z-50 w-full fixed top-0 bg-[#062327]/95 backdrop-blur-md border-b border-white/10 text-gray-200 shadow-lg">
                {/* Logo */}
                <div
                    className="w-14 h-14 flex items-center cursor-pointer flex-shrink-0"
                    onClick={() => { navigate(0); }}
                >
                    <Image src={logo} alt="logo" className="w-full" />
                </div>

                {/* Masaüstü nav */}
                <nav className="hidden md:flex items-center justify-center gap-6">
                    <button
                        className="px-3 py-1.5 rounded-md cursor-pointer hover:text-white hover:scale-105 transition duration-200 font-bold text-sm"
                        onClick={() => navigate(0)}
                    >Ana Sayfa</button>

                    <Dropdown menu={{ items: itemsHakkimizda }}>
                        <a onClick={(e) => e.preventDefault()}>
                            <Space className="font-bold cursor-pointer hover:text-white hover:scale-105 transition duration-200 px-3 py-1.5 text-sm">
                                Kurumsal
                            </Space>
                        </a>
                    </Dropdown>

                    <Dropdown menu={{ items: itemsFaaliyetlerimiz }}>
                        <a onClick={(e) => e.preventDefault()}>
                            <Space className="font-bold cursor-pointer hover:text-white hover:scale-105 transition duration-200 px-3 py-1.5 text-sm">
                                Faaliyetlerimiz
                            </Space>
                        </a>
                    </Dropdown>

                    <button
                        className="px-3 py-1.5 rounded-md cursor-pointer hover:text-white hover:scale-105 transition duration-200 font-bold text-sm"
                        onClick={() => navigate(7)}
                    >İletişim</button>
                </nav>

                <div className="flex items-center gap-3">
                    <button
                        onClick={() => navigate(8)}
                        className="px-5 py-2 rounded-full bg-orange-600 hover:bg-orange-500 hover:scale-105 active:scale-95 transition-all duration-300 font-bold text-white shadow-md text-sm"
                    >
                        Bize Katıl!
                    </button>

                    {/* Hamburger — sadece mobil */}
                    <button
                        className="md:hidden flex flex-col justify-center gap-[5px] w-9 h-9 p-1.5 rounded-md hover:bg-white/10 transition-colors z-50"
                        onClick={() => setMenuOpen((v) => !v)}
                        aria-label="Menü"
                    >
                        <span className={`block h-0.5 bg-white rounded-full transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-[7px] w-full" : "w-full"}`} />
                        <span className={`block h-0.5 bg-white rounded-full transition-all duration-300 ${menuOpen ? "opacity-0 w-0" : "w-full"}`} />
                        <span className={`block h-0.5 bg-white rounded-full transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-[7px] w-full" : "w-full"}`} />
                    </button>
                </div>
            </header>

            {/* ── MOBİL MENÜ OVERLAY ── */}
            <div
                className={`fixed inset-0 z-40 md:hidden flex flex-col transition-all duration-300 ${
                    menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                }`}
                style={{ background: "rgba(6,35,39,0.98)", backdropFilter: "blur(8px)" }}
            >
                {/* Üst bar: logo + kapat */}
                <div className="flex items-center justify-between px-5 h-16 border-b border-white/10 flex-shrink-0">
                    <Image src={logo} alt="logo" className="w-12 h-12" />
                    <button
                        onClick={() => setMenuOpen(false)}
                        className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-white text-xl hover:bg-white/20 transition"
                    >
                        ✕
                    </button>
                </div>

                {/* Nav linkleri */}
                <nav className="flex-1 flex flex-col justify-center px-6 gap-1 overflow-y-auto py-4">
                    {mobileNavItems.map((item, i) => (
                        <button
                            key={i}
                            onClick={item.action}
                            className={`flex items-center gap-3 w-full text-left px-4 py-3.5 rounded-xl text-gray-200 hover:text-orange-400 hover:bg-white/5 transition-all duration-200 font-montserrat-semibold text-base ${
                                menuOpen ? "anim-fadeInUp" : ""
                            }`}
                            style={{ animationDelay: `${i * 0.04}s` }}
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0" />
                            {item.label}
                        </button>
                    ))}
                </nav>

                {/* Alt buton */}
                <div className="px-6 pb-8 pt-2 border-t border-white/10 flex-shrink-0">
                    <button
                        onClick={() => navigate(8)}
                        className="w-full py-3.5 bg-orange-600 hover:bg-orange-500 text-white font-montserrat-bold rounded-xl shadow-lg text-base transition-all duration-300 active:scale-95"
                    >
                        Bize Katıl!
                    </button>
                </div>
            </div>

            {/* ── HERO TEXT OVERLAY ── */}
            <div className={`absolute w-full flex justify-end items-center z-10 ${currentState !== 0 ? "pt-[160px] md:pt-52" : "pt-[45svh] md:pt-80"}`}>
                <div className="absolute z-10 bg-gradient-radial from-black to-transparent h-[200px] md:h-[300px] w-[90vw] md:w-[700px] rounded-full mr-4 md:mr-16 opacity-80 blur-xl" />
                <div className={`absolute z-20 flex flex-col items-end justify-center px-5 md:px-12 mx-2 md:mx-6 ${currentState !== 0 ? "mt-0 md:mt-16" : ""}`}>
                    <span className={`anim-fadeInUp anim-d2 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent select-none font-montserrat-bold ${currentState !== 0 ? "text-xl md:text-4xl" : "text-2xl md:text-6xl"}`}>
                        Kardeş Hareketi
                    </span>
                    <div className={`anim-fadeInUp anim-d3 text-right font-montserrat-light select-none ${currentState !== 0 ? "text-lg md:text-3xl" : "text-xl md:text-5xl mt-1.5 md:mt-4"}`}>
                        <span className="text-gray-200">Burada Bir{" "}</span>
                        <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent font-montserrat-bold">Kardeş'in</span>
                        <span className="text-gray-200">{" "}Var</span>
                    </div>
                    {currentState === 0 && (
                        <button
                            onClick={() => scrollToSection("about")}
                            className="anim-fadeInUp anim-d4 mt-3 md:mt-6 px-5 md:px-7 py-2 md:py-3 bg-orange-600 hover:bg-orange-500 active:scale-95 text-white font-montserrat-bold rounded-full shadow-lg transition-all duration-300 hover:scale-105 text-xs md:text-base"
                        >
                            Biz Kimiz?
                        </button>
                    )}
                </div>
            </div>

            {/* ── CAROUSEL ── */}
            <div className="pt-16">
                <MainCarousel state={currentState} />
            </div>

            {/* ── ANA SAYFA İÇERİĞİ ── */}
            {currentState === 0 && (
                <div>
                    {/* BİZ KİMİZ */}
                    <section id="about" className="bg-[#062327] py-16 md:py-24 overflow-hidden">
                        <div className="flex items-center justify-center mb-10 md:mb-14 reveal">
                            <div className="flex flex-col items-center gap-3">
                                <span className="text-orange-400 text-xs md:text-sm font-montserrat-semibold tracking-widest uppercase">Hakkımızda</span>
                                <h2 className="text-3xl md:text-4xl font-montserrat-bold text-white">Biz Kimiz?</h2>
                                <div className="h-1 w-16 bg-orange-500 rounded-full" />
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row justify-center items-center gap-10 md:gap-14 px-6 md:px-16">
                            <div className="reveal-left w-full lg:w-1/3 xl:w-2/5 max-w-xl">
                                <div className="text-orange-400 text-6xl md:text-7xl font-montserrat-black opacity-20 leading-none select-none">"</div>
                                <p className="text-lg md:text-xl font-montserrat-light text-gray-200 leading-relaxed -mt-4">
                                    Kardeş Hareketi, dünyanın farklı coğrafyalarında yaşayan ihtiyaç sahipleri için dayanışmayı büyütmeyi amaçlayan gönüllü bir iyilik hareketidir.
                                    İyiliğin sınır tanımadığına ve her insanın bir diğerinin kardeşi olduğuna inanıyoruz.
                                </p>
                                <p className="text-lg md:text-xl font-montserrat-light text-gray-300 leading-relaxed mt-5 md:mt-6">
                                    Çalışmalarımızda özellikle 0–13 yaş arası yetim ve öksüz çocukları önceleyerek onların temel ihtiyaçlarına, eğitimlerine ve güvenli bir çocukluk geçirmelerine destek olmayı hedefliyoruz.
                                </p>
                                <button
                                    onClick={() => navigate(1)}
                                    className="mt-6 md:mt-8 px-6 py-2.5 border border-orange-400 text-orange-400 hover:bg-orange-500 hover:text-white hover:border-orange-500 rounded-full font-montserrat-semibold transition-all duration-300 text-sm md:text-base"
                                >
                                    Misyon & Vizyon →
                                </button>
                            </div>
                            <div className="reveal-right w-full lg:w-1/3 xl:w-2/5 max-w-xl h-[320px] md:h-[480px] lg:h-[520px] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
                                <img
                                    src={imgs.home_about}
                                    alt="Kardeş Hareketi"
                                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>
                    </section>

                    {/* FALİYETLERİMİZ */}
                    <section id="actions" className="py-16 md:py-24 bg-gray-50">
                        <div className="flex flex-col items-center mb-10 md:mb-14 reveal px-4">
                            <span className="text-orange-500 text-xs md:text-sm font-montserrat-semibold tracking-widest uppercase mb-2">Ne Yapıyoruz?</span>
                            <h2 className="text-3xl md:text-4xl font-montserrat-bold text-gray-800">Faaliyetlerimiz</h2>
                            <div className="h-1 w-16 bg-orange-500 rounded-full mt-3" />
                        </div>

                        <div
                            className="flex items-stretch gap-4 md:gap-6 overflow-x-auto pb-6 px-6 md:px-12"
                            style={{ scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch" }}
                        >
                            {Cards.map((card, index) => (
                                <div
                                    key={index}
                                    onClick={() => {
                                        setCurrentTitle(card.title);
                                        setCurrentContent(card.content);
                                        setCurrentIndex(index);
                                        setCurrentImage(card.images.image1);
                                        setCurrentImageIndex(0);
                                        setIsModalOpen(true);
                                    }}
                                    className="relative w-[240px] md:w-[280px] h-[360px] md:h-[400px] rounded-2xl overflow-hidden cursor-pointer flex-shrink-0 shadow-lg group"
                                    style={{ scrollSnapAlign: "center" }}
                                >
                                    <img
                                        src={card.images.image1}
                                        alt={card.title}
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                                    <div className="absolute inset-0 bg-orange-600/0 group-hover:bg-orange-600/20 transition-all duration-500" />
                                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                                        <h3 className="text-white font-montserrat-bold text-lg md:text-xl mb-2">{card.title}</h3>
                                        <p className="text-gray-200 text-xs md:text-sm font-montserrat-light leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-400 max-h-0 group-hover:max-h-32 overflow-hidden">
                                            {card.content}
                                        </p>
                                        <div className="mt-2 md:mt-3 inline-flex items-center gap-1 text-orange-400 text-xs md:text-sm font-montserrat-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                                            Detayları Gör →
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Modal */}
                        <Modal
                            open={isModalOpen}
                            onCancel={handleCancel}
                            centered
                            zIndex={100}
                            footer={[<Button key="cancel" onClick={handleCancel}>Kapat</Button>]}
                        >
                            <div className="flex flex-col items-center p-2 md:p-4 gap-4">
                                <div className="flex w-full gap-3 overflow-x-auto snap-x">
                                    {Object.values(Cards.at(currentIndex).images).map((img, i) => (
                                        <img
                                            key={i}
                                            src={img}
                                            alt={`Fotoğraf ${i + 1}`}
                                            className="object-cover w-[280px] md:w-[480px] h-[200px] md:h-[280px] rounded-xl cursor-zoom-in flex-shrink-0"
                                            onClick={() => { setCurrentImage(img); setCurrentImageIndex(i); setShowFullScreenModal(true); }}
                                        />
                                    ))}
                                </div>
                                <div className="w-full">
                                    <h3 className="text-xl md:text-2xl font-montserrat-bold mb-2">{currentTitle}</h3>
                                    <p className="text-gray-600 font-montserrat-regular text-sm md:text-base">{currentContent}</p>
                                </div>
                            </div>
                        </Modal>

                        {showFullScreenModal && (
                            <Modal open onCancel={closeModal} zIndex={200} width="95vw" centered footer={[<Button key="close" onClick={closeModal}>Kapat</Button>]}>
                                <div className="p-2 md:p-4">
                                    <img src={currentImage} alt="" className="object-contain w-full max-h-[70vh] rounded-xl" />
                                </div>
                            </Modal>
                        )}
                    </section>

                    {/* KATILIM ÇAĞRISI */}
                    <section className="bg-[#062327] py-16 md:py-20 text-center px-6 md:px-8 reveal">
                        <h2 className="text-3xl md:text-4xl font-montserrat-bold text-white mb-4">
                            Sen de Bu Kardeşliğe Ortak Ol
                        </h2>
                        <p className="text-gray-300 font-montserrat-light text-base md:text-lg max-w-xl mx-auto mb-8">
                            Gönüllü olarak yanımızda yer al, iyiliğin sesine ses kat.
                        </p>
                        <button
                            onClick={() => navigate(8)}
                            className="px-8 md:px-10 py-3 md:py-3.5 bg-orange-600 hover:bg-orange-500 active:scale-95 text-white font-montserrat-bold rounded-full shadow-lg transition-all duration-300 hover:scale-105 text-base md:text-lg"
                        >
                            Bize Katıl!
                        </button>
                    </section>
                </div>
            )}

            {/* Alt sayfalar */}
            {currentState > 0 && currentState < 7 && (
                <WhoAreWe state={currentState} setCurrentState={navigate} />
            )}
            {currentState === 7 && <Contact />}
            {currentState === 8 && <BizeKatil />}

            {/* ── FOOTER ── */}
            <footer className="bg-gray-950 text-gray-400">
                <div className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-16">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 pb-10 md:pb-12 border-b border-gray-800">
                        {/* Logo & Açıklama */}
                        <div>
                            <div
                                className="w-14 h-14 cursor-pointer mb-4"
                                onClick={() => navigate(0)}
                            >
                                <Image src={logo} alt="logo" className="w-full" />
                            </div>
                            <p className="text-sm leading-relaxed">
                                İyiliğin ve kardeşliğin ortak dili olmak niyetiyle yola çıkan gönüllü bir dayanışma hareketidir.
                            </p>
                        </div>

                        {/* Hızlı Linkler */}
                        <div>
                            <h4 className="text-white font-montserrat-semibold mb-4 md:mb-5 text-sm uppercase tracking-wider">Hızlı Erişim</h4>
                            <ul className="space-y-2 md:space-y-3 text-sm">
                                {[
                                    { label: "Ana Sayfa",       action: () => navigate(0) },
                                    { label: "Biz Kimiz?",      action: () => navigate(1) },
                                    { label: "Faaliyetlerimiz", action: () => { navigate(0); setTimeout(() => scrollToSection("actions"), 300); } },
                                    { label: "İletişim",        action: () => navigate(7) },
                                    { label: "Bize Katıl",      action: () => navigate(8) },
                                ].map((link) => (
                                    <li key={link.label}>
                                        <button
                                            onClick={link.action}
                                            className="hover:text-orange-400 transition-colors duration-200"
                                        >
                                            {link.label}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* İletişim */}
                        <div>
                            <h4 className="text-white font-montserrat-semibold mb-4 md:mb-5 text-sm uppercase tracking-wider">İletişim</h4>
                            <ul className="space-y-2 md:space-y-3 text-sm">
                                <li>📞 +90 541 479 88 09</li>
                                <li>✉️ kardes@hareketidernegi.com</li>
                                <li>📍 Mehmet Akif Mah. Fatih Bulvarı No:147, Sultanbeyli / İstanbul</li>
                            </ul>
                            <div className="flex gap-4 mt-5 md:mt-6">
                                <a href="https://www.instagram.com/kardeshareketi?igsh=ejIyYW41cWpucG85" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 hover:bg-orange-600 rounded-full flex items-center justify-center text-lg transition-all duration-300">
                                    <FaInstagram />
                                </a>
                                <a href="#" className="w-10 h-10 bg-white/5 hover:bg-orange-600 rounded-full flex items-center justify-center text-lg transition-all duration-300">
                                    <FaYoutube />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="pt-6 md:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
                        <p>© 2024 Kardeş Hareketi Derneği. Tüm hakları saklıdır.</p>
                        <button
                            onClick={() => navigate(4)}
                            className="hover:text-orange-400 transition-colors duration-200"
                        >
                            KVKK & Gizlilik Politikası
                        </button>
                    </div>
                </div>
            </footer>
        </div>
    );
}
