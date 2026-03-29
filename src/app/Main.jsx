"use client";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
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

// Scroll-reveal hook
function useReveal() {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                    }
                });
            },
            { threshold: 0.12 }
        );
        const els = document.querySelectorAll(".reveal, .reveal-left, .reveal-right");
        els.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);
}

export default function Main() {
    const [siteImages, setSiteImages] = useState(DEFAULT_IMAGES);
    useReveal();

    useEffect(() => {
        fetch("/api/images")
            .then((r) => r.json())
            .then((data) => {
                if (data && typeof data === "object") {
                    setSiteImages((prev) => ({ ...prev, ...data }));
                }
            })
            .catch(() => {});
    }, []);

    const Cards = [
        {
            title: "Üşüme Kardeşim",
            content: "İhtiyaç sahibi kardeşlerimize mont, bot, eldiven, atkı ve bere yardımında bulunuyoruz.",
            images: { image1: siteImages.activity_usume_1, image2: siteImages.activity_usume_2, image3: siteImages.activity_usume_3 },
        },
        {
            title: "Kırtasiye Yardımı",
            content: "İhtiyaç sahibi öğrencilerimize okul öncesi kırtasiye desteği sağlıyoruz.",
            images: { image1: siteImages.activity_kirtasiye_1, image2: siteImages.activity_kirtasiye_2, image3: siteImages.activity_kirtasiye_3 },
        },
        {
            title: "Yardım Kartı",
            content: "Yardıma muhtaç ailelere ihtiyaçlarını kendileri karşılayabilmeleri için yardım kartı desteği veriyoruz.",
            images: { image1: siteImages.activity_yardim_kart_1, image2: siteImages.activity_yardim_kart_2, image3: siteImages.activity_yardim_kart_3 },
        },
        {
            title: "Kardeş Şenliği",
            content: "Her bahar yetim ve öksüz kardeşlerimizle bir araya gelerek Kardeş Şenliği düzenliyoruz.",
            images: { image1: siteImages.activity_senligi_1, image2: siteImages.activity_senligi_2, image3: siteImages.activity_senligi_3 },
        },
        {
            title: "Kurban Faaliyetleri",
            content: "Farz ve nafile kurbanlarınızı ihtiyaç sahiplerine ulaştırıyoruz.",
            images: { image1: siteImages.activity_kurban_1, image2: siteImages.activity_kurban_2, image3: siteImages.activity_kurban_3 },
        },
        {
            title: "Eğlenceli Faaliyetler",
            content: "Kardeşlerimizin mutluluğu için düzenli eğlenceli etkinlikler düzenliyoruz.",
            images: { image1: siteImages.activity_eglence_1, image2: siteImages.activity_eglence_2, image3: siteImages.activity_eglence_3 },
        },
    ];

    const [currentState, setCurrentState] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentTitle, setCurrentTitle] = useState("");
    const [currentImage, setCurrentImage] = useState("");
    const [currentContent, setCurrentContent] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [showFullScreenModal, setShowFullScreenModal] = useState(false);

    const handleCancel = () => { setIsModalOpen(false); setShowFullScreenModal(false); };
    const closeModal = () => setShowFullScreenModal(false);

    const scrollToSection = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    const itemsHakkimizda = [
        { label: <div className="font-montserrat-semibold py-1" onClick={() => setCurrentState(1)}>Biz Kimiz?</div>, key: "0" },
        { label: <div className="font-montserrat-semibold py-1" onClick={() => setCurrentState(2)}>Yönetim Kurulu</div>, key: "1" },
        { label: <div className="font-montserrat-semibold py-1" onClick={() => setCurrentState(3)}>Dernek Tüzüğü</div>, key: "2" },
        { label: <div className="font-montserrat-semibold py-1" onClick={() => setCurrentState(4)}>KVKK</div>, key: "3" },
    ];
    const itemsFaaliyetlerimiz = [
        { label: <div className="font-montserrat-semibold py-1" onClick={() => setCurrentState(5)}>Tüm Faaliyetler</div>, key: "0" },
    ];

    return (
        <div className="bg-white text-gray-800 relative font-montserrat-regular" id="main">

            {/* ── HEADER ── */}
            <header className="h-20 max-md:h-24 flex items-center justify-between px-8 max-md:px-2 z-50 w-full fixed top-0 bg-[#062327]/95 backdrop-blur-md border-b border-white/10 text-gray-200 shadow-lg">
                <div
                    className="w-20 max-md:w-24 h-20 max-md:h-24 flex items-center max-md:ml-4 cursor-pointer"
                    onClick={() => { setCurrentState(0); scrollToSection("main"); }}
                >
                    <Image src={logo} alt="logo" className="w-full" />
                </div>

                <nav className="flex items-center justify-center gap-8 max-lg:gap-2 max-md:hidden">
                    <button
                        className="px-3 py-1.5 rounded-md cursor-pointer hover:text-white hover:scale-105 transition duration-200 font-bold"
                        onClick={() => { scrollToSection("main"); setCurrentState(0); }}
                    >Ana Sayfa</button>

                    <Dropdown menu={{ items: itemsHakkimizda }}>
                        <a onClick={(e) => e.preventDefault()}>
                            <Space className="font-bold cursor-pointer hover:text-white hover:scale-105 transition duration-200 px-3 py-1.5">
                                Kurumsal
                            </Space>
                        </a>
                    </Dropdown>

                    <Dropdown menu={{ items: itemsFaaliyetlerimiz }}>
                        <a onClick={(e) => e.preventDefault()}>
                            <Space className="font-bold cursor-pointer hover:text-white hover:scale-105 transition duration-200 px-3 py-1.5">
                                Faaliyetlerimiz
                            </Space>
                        </a>
                    </Dropdown>

                    <button
                        className="px-3 py-1.5 rounded-md cursor-pointer hover:text-white hover:scale-105 transition duration-200 font-bold"
                        onClick={() => setCurrentState(7)}
                    >İletişim</button>
                </nav>

                <button
                    onClick={() => setCurrentState(8)}
                    className="px-6 py-2 rounded-md bg-orange-600 hover:bg-orange-500 hover:scale-105 active:scale-95 transition-all duration-300 font-bold text-white shadow-md max-sm:mr-2"
                >
                    Bize Katıl!
                </button>
            </header>

            {/* ── HERO TEXT OVERLAY ── */}
            <div className={`absolute w-full flex justify-end items-center z-10 ${currentState !== 0 ? "pt-52" : "pt-80"}`}>
                <div className="absolute z-10 bg-gradient-radial from-black to-transparent h-[300px] w-[700px] rounded-full mr-16 opacity-80 blur-xl" />
                <div className={`absolute z-20 flex flex-col items-end justify-center px-12 mx-6 ${currentState !== 0 ? "mt-16" : ""}`}>
                    <span className={`anim-fadeInUp anim-d2 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent select-none font-montserrat-bold ${currentState !== 0 ? "text-4xl" : "text-6xl max-md:text-4xl"}`}>
                        Kardeş Hareketi
                    </span>
                    <div className={`anim-fadeInUp anim-d3 font-light text-right text-gray-200 font-montserrat-light select-none ${currentState !== 0 ? "text-3xl" : "text-5xl max-md:text-3xl mt-4"}`}>
                        Burada Bir Kardeş'in Var
                    </div>
                    {currentState === 0 && (
                        <button
                            onClick={() => scrollToSection("about")}
                            className="anim-fadeInUp anim-d4 mt-6 px-7 py-3 bg-orange-600 hover:bg-orange-500 active:scale-95 text-white font-montserrat-bold rounded-full shadow-lg transition-all duration-300 hover:scale-105"
                        >
                            Daha Fazla Keşfet
                        </button>
                    )}
                </div>
            </div>

            {/* ── CAROUSEL ── */}
            <div className="pt-20">
                <MainCarousel state={currentState} />
            </div>

            {/* ── ANA SAYFA İÇERİĞİ ── */}
            {currentState === 0 && (
                <div>
                    {/* BİZ KİMİZ */}
                    <section id="about" className="bg-[#062327] py-24 max-md:py-16 overflow-hidden">
                        <div className="flex items-center justify-center mb-14">
                            <div className="flex flex-col items-center gap-3">
                                <span className="text-orange-400 text-sm font-montserrat-semibold tracking-widest uppercase">Hakkımızda</span>
                                <h2 className="text-4xl font-montserrat-bold text-white">Biz Kimiz?</h2>
                                <div className="h-1 w-16 bg-orange-500 rounded-full" />
                            </div>
                        </div>
                        <div className="flex max-lg:flex-col justify-center items-center gap-14 px-16 max-md:px-8">
                            <div className="reveal-left w-1/3 max-lg:w-4/5 max-xl:w-2/5">
                                <div className="text-orange-400 text-7xl font-montserrat-black opacity-20 leading-none select-none">"</div>
                                <p className="text-xl max-md:text-lg font-montserrat-light text-gray-200 leading-relaxed -mt-4">
                                    Kardeş Hareketi, dünyanın farklı coğrafyalarında yaşayan ihtiyaç sahipleri için dayanışmayı büyütmeyi amaçlayan gönüllü bir iyilik hareketidir.
                                    İyiliğin sınır tanımadığına ve her insanın bir diğerinin kardeşi olduğuna inanıyoruz.
                                </p>
                                <p className="text-xl max-md:text-lg font-montserrat-light text-gray-300 leading-relaxed mt-6">
                                    Çalışmalarımızda özellikle 0–13 yaş arası yetim ve öksüz çocukları önceleyerek onların temel ihtiyaçlarına, eğitimlerine ve güvenli bir çocukluk geçirmelerine destek olmayı hedefliyoruz.
                                </p>
                                <button
                                    onClick={() => setCurrentState(1)}
                                    className="mt-8 px-6 py-2.5 border border-orange-400 text-orange-400 hover:bg-orange-500 hover:text-white hover:border-orange-500 rounded-full font-montserrat-semibold transition-all duration-300"
                                >
                                    Misyon & Vizyon →
                                </button>
                            </div>
                            <div className="reveal-right w-1/3 max-xl:w-2/5 max-lg:w-4/5 h-[520px] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
                                <img
                                    src={siteImages.home_about}
                                    alt="Kardeş Hareketi"
                                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>
                    </section>

                    {/* FALİYETLERİMİZ */}
                    <section id="actions" className="py-24 max-md:py-16 bg-gray-50">
                        <div className="flex flex-col items-center mb-14 reveal">
                            <span className="text-orange-500 text-sm font-montserrat-semibold tracking-widest uppercase mb-2">Ne Yapıyoruz?</span>
                            <h2 className="text-4xl font-montserrat-bold text-gray-800">Faaliyetlerimiz</h2>
                            <div className="h-1 w-16 bg-orange-500 rounded-full mt-3" />
                        </div>

                        <div
                            className="flex items-stretch gap-6 overflow-x-auto pb-6 px-12 max-md:px-6"
                            style={{ scrollSnapType: "x mandatory" }}
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
                                    className="relative w-[280px] h-[400px] rounded-2xl overflow-hidden cursor-pointer flex-shrink-0 shadow-lg group"
                                    style={{ scrollSnapAlign: "center" }}
                                >
                                    {/* Arka plan görsel */}
                                    <img
                                        src={card.images.image1}
                                        alt={card.title}
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    {/* Gradient overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                                    {/* Hover overlay */}
                                    <div className="absolute inset-0 bg-orange-600/0 group-hover:bg-orange-600/20 transition-all duration-500" />
                                    {/* Alt içerik */}
                                    <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                                        <h3 className="text-white font-montserrat-bold text-xl mb-2">{card.title}</h3>
                                        <p className="text-gray-200 text-sm font-montserrat-light leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-400 max-h-0 group-hover:max-h-32 overflow-hidden">
                                            {card.content}
                                        </p>
                                        <div className="mt-3 inline-flex items-center gap-1 text-orange-400 text-sm font-montserrat-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-400">
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
                            zIndex={10}
                            footer={[<Button key="cancel" onClick={handleCancel}>Kapat</Button>]}
                        >
                            <div className="flex flex-col items-center p-4 gap-4">
                                <div className="flex w-full gap-3 overflow-x-auto snap-x">
                                    {Object.values(Cards.at(currentIndex).images).map((img, i) => (
                                        <img
                                            key={i}
                                            src={img}
                                            alt={`Fotoğraf ${i + 1}`}
                                            className="object-cover w-[480px] h-[280px] rounded-xl cursor-zoom-in flex-shrink-0"
                                            onClick={() => { setCurrentImage(img); setCurrentImageIndex(i); setShowFullScreenModal(true); }}
                                        />
                                    ))}
                                </div>
                                <div className="w-full">
                                    <h3 className="text-2xl font-montserrat-bold mb-2">{currentTitle}</h3>
                                    <p className="text-gray-600 font-montserrat-regular">{currentContent}</p>
                                </div>
                            </div>
                        </Modal>

                        {showFullScreenModal && (
                            <Modal open onCancel={closeModal} zIndex={20} width={2000} centered footer={[<Button key="close" onClick={closeModal}>Kapat</Button>]}>
                                <div className="p-4">
                                    <img src={currentImage} alt="" className="object-contain w-full h-[600px] rounded-xl" />
                                </div>
                            </Modal>
                        )}
                    </section>

                    {/* KATILIM ÇAĞRISI */}
                    <section className="bg-[#062327] py-20 text-center px-8 reveal">
                        <h2 className="text-4xl max-md:text-3xl font-montserrat-bold text-white mb-4">
                            Sen de Bu Kardeşliğe Ortak Ol
                        </h2>
                        <p className="text-gray-300 font-montserrat-light text-lg max-w-xl mx-auto mb-8">
                            Gönüllü olarak yanımızda yer al, iyiliğin sesine ses kat.
                        </p>
                        <button
                            onClick={() => setCurrentState(8)}
                            className="px-10 py-3.5 bg-orange-600 hover:bg-orange-500 active:scale-95 text-white font-montserrat-bold rounded-full shadow-lg transition-all duration-300 hover:scale-105 text-lg"
                        >
                            Bize Katıl!
                        </button>
                    </section>
                </div>
            )}

            {/* Alt sayfalar */}
            {currentState > 0 && currentState < 7 && (
                <WhoAreWe state={currentState} setCurrentState={setCurrentState} />
            )}
            {currentState === 7 && <Contact />}
            {currentState === 8 && <BizeKatil />}

            {/* ── FOOTER ── */}
            <footer className="bg-gray-950 text-gray-400">
                <div className="max-w-7xl mx-auto px-8 py-16">
                    <div className="grid grid-cols-3 max-md:grid-cols-1 gap-12 pb-12 border-b border-gray-800">
                        {/* Logo & Açıklama */}
                        <div>
                            <div
                                className="w-16 h-16 cursor-pointer mb-4"
                                onClick={() => { setCurrentState(0); scrollToSection("main"); }}
                            >
                                <Image src={logo} alt="logo" className="w-full" />
                            </div>
                            <p className="text-sm leading-relaxed">
                                İyiliğin ve kardeşliğin ortak dili olmak niyetiyle yola çıkan gönüllü bir dayanışma hareketidir.
                            </p>
                        </div>

                        {/* Hızlı Linkler */}
                        <div>
                            <h4 className="text-white font-montserrat-semibold mb-5 text-sm uppercase tracking-wider">Hızlı Erişim</h4>
                            <ul className="space-y-3 text-sm">
                                {[
                                    { label: "Ana Sayfa",      action: () => { setCurrentState(0); scrollToSection("main"); } },
                                    { label: "Biz Kimiz?",     action: () => setCurrentState(1) },
                                    { label: "Faaliyetlerimiz",action: () => { setCurrentState(0); setTimeout(() => scrollToSection("actions"), 100); } },
                                    { label: "İletişim",       action: () => setCurrentState(7) },
                                    { label: "Bize Katıl",     action: () => setCurrentState(8) },
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
                            <h4 className="text-white font-montserrat-semibold mb-5 text-sm uppercase tracking-wider">İletişim</h4>
                            <ul className="space-y-3 text-sm">
                                <li>📞 +90 541 479 88 09</li>
                                <li>✉️ kardes@hareketidernegi.com</li>
                                <li>📍 Mehmet Akif Mah. Fatih Bulvarı No:147, Sultanbeyli / İstanbul</li>
                            </ul>
                            <div className="flex gap-4 mt-6">
                                <a href="#" className="w-10 h-10 bg-white/5 hover:bg-orange-600 rounded-full flex items-center justify-center text-lg transition-all duration-300">
                                    <FaInstagram />
                                </a>
                                <a href="#" className="w-10 h-10 bg-white/5 hover:bg-orange-600 rounded-full flex items-center justify-center text-lg transition-all duration-300">
                                    <FaYoutube />
                                </a>
                                <a href="#" className="w-10 h-10 bg-white/5 hover:bg-orange-600 rounded-full flex items-center justify-center text-lg transition-all duration-300">
                                    <FaXTwitter />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
                        <p>© 2024 Kardeş Hareketi Derneği. Tüm hakları saklıdır.</p>
                        <button
                            onClick={() => setCurrentState(4)}
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
