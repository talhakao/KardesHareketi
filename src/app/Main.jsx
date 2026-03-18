"use client";
import {FaInstagram, FaYoutube} from "react-icons/fa";
import {FaXTwitter} from "react-icons/fa6";
import {Button, Modal} from "antd";
import {useState} from "react";
import { Dropdown, Space } from 'antd';
import Image from "next/image";
import WhoAreWe from "@/app/pages/WhoAreWe";
import Contact from "@/app/pages/Contact";
import MainCarousel from "@/app/Components/MainCarousel";

import logo from "@/Images/B.png";
import elsallama from "@/Images/cocuklarElSalliyor.jpeg";


export default function Main() {
    const Cards = [
        {
            title: "Üşüme Kardeşim",
            content: "Kardeş Hareketi olarak, ülkemizin dört bir yanındaki ihtiyaç sahiplerine yardım eli uzatıyoruz. 'Üşüme Kardeşim' projemizle , ihtiyaç sahibi kardeşlerimize mont, bot, eldiven, atkı ve bere yardımında bulunuyoruz.   ",
            images: {
                image1: "https://iili.io/FMLmbDb.jpg",
                image2: "https://iili.io/FMLmDOu.jpg",
                image3: "https://iili.io/FMLmDOu.jpg",
            }},
        {
            title: "Kırtasiye Yardımı",
            content: "Kardeş Hareketi olarak, okullar başlamadan önce ihtiyaç sahibi öğrencilerimize kırtasiye yardımı sağlıyoruz. 'Kırtasiye Yardımı' projemizle, çocuklarımızın eğitimlerine destek olmak ve onların yüzlerinde bir tebessüm oluşturmak için çaba gösteriyoruz.",
            images: {
                image1: "https://iili.io/FMLmpxj.jpg",
                image2: "https://iili.io/FMLpfOg.jpg",
                image3: "https://iili.io/FMLmDOu.jpg",
            },
        },
        {
            title: "Yardım Kartı",
            content: "Kardeş Hareketi olarak, yardıma muhtaç ailelere yardım kartı desteğinde bulunarak kendi ihtiyaçlarını kendi ihtiyaç durumlarına göre karşılamalarına destek oluyoruz.",
            images: {
                image1: "https://iili.io/FMLpK5F.jpg",
                image2: "https://iili.io/FMLpFJ1.jpg",
                image3: "https://iili.io/FMLmDOu.jpg",
            },
        },
        {
            title: "Kardeş Şenliği",
            content: "Kardeş Hareketi olarak, her sene bahar döneminde düzenli olarak yetim ve öksüz kardeşlerimizle bir araya gelerek Kardeş Şenliği düzenleyerek mutluluklarına ortak oluyoruz.",
            images: {
                image1: "https://iili.io/FMLpqba.jpg",
                image2: "https://iili.io/FMLmpxj.jpg",
                image3: "https://iili.io/FMLpfOg.jpg",
            },
        },
        {
            title: "Kurban Faaliyetleri",
            content: "Kardeş Hareketi olarak, ülkemizde ve yardıma muhtaç coğrafyalarda sizlerin emaneti olan farz ve nafile kurbanlarınızı ihtiyaç sahiplerine teslim ediyoruz.",
            images: {
                image1: "https://i.imghippo.com/files/FEX3798xuw.jpeg",
                image2: "https://i.imghippo.com/files/mac6312nE.jpeg",
                image3: "https://i.imghippo.com/files/OsIO2212kJs.jpeg",
            },
        },
                {
            title: "Eğlenceli Faaliyetler",
            content: "Kardeş Hareketi olarak, sadece temel ihtiyaçlara değil, aynı zamanda kardeşlerimizin mutluluğuna da önem veriyoruz. Bu nedenle, düzenli olarak eğlenceli faaliyetler düzenleyerek kardeşlerimizin yüzlerinde bir tebessüm oluşturmayı hedefliyoruz.",
            images: {
                image1: "https://i.imghippo.com/files/FEX3798xuw.jpeg",
                image2: "https://i.imghippo.com/files/mac6312nE.jpeg",
                image3: "https://i.imghippo.com/files/OsIO2212kJs.jpeg",
            },
        },
    ]

    const [currentState, setCurrentState] = useState(0);

    const itemsHakkimizda = [
        {
            label: (
                <div className={"font-montserrat-semibold"} onClick={() => setCurrentState(1)}>
                    Biz Kimiz?
                </div>
            ),
            key: '0',
        },
        {
            label: (
                <div className={"font-montserrat-semibold"} onClick={() => setCurrentState(2)}>
                    Yönetim Kurulu
                </div>
            ),
            key: '1',
        },
        {
            label: (
                <div className={"font-montserrat-semibold"} onClick={() => setCurrentState(3)}>
                    Dernek Tüzüğü
                </div>
            ),
            key: '2',
        },
        {
            label: (
                <div className={"font-montserrat-semibold"} onClick={() => setCurrentState(4)}>
                    KVKK
                </div>
            ),
            key: '3',
        },
    ];
    const itemsFaaliyetlerimiz = [
        {
            label: (
                <div className={"font-montserrat-semibold"} onClick={() => setCurrentState(5)}>
                    Tüm Faaliyetler
                </div>
            ),
            key: '0',
        },
    ];

    const [isModalOpen, setIsModalOpen] = useState(false);

    const [currentTitle, setCurrentTitle] = useState('');
    const [currentImage, setCurrentImage] = useState('');
    const [currentContent, setCurrentContent] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const [showFullScreenModal, setShowFullScreenModal] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
        setShowFullScreenModal(false);
    };

    const closeModal = () => {
        setShowFullScreenModal(false);
    }

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({
                behavior: "smooth",
            });
        }
    };


    return (
        <div className={"h-screen bg-white text-gray-800 relative font-montserrat-regular"} id="main">
            {/* Header */}
            <div className="h-20 max-md:h-24 flex items-center justify-between px-8 max-md:px-2 z-50 w-full absolute bg-[#062327]/90 backdrop-blur-md border-b-[1px] border-white/10 text-gray-200 shadow-lg">
                
                {/* Logo */}
                <div className="w-20 max-md:w-24 h-20 max-md:h-24 flex items-center max-md:ml-4">
                    <Image src={logo} alt="logo" className="w-full" />
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-center gap-8 max-lg:gap-2 max-md:hidden">
                    
                    <div 
                        className="px-2 max-xl:px-1 py-1.5 rounded-md cursor-pointer hover:text-white hover:scale-105 transition duration-200 font-bold"
                        onClick={() => {
                            scrollToSection("main");
                            setCurrentState(0);
                        }}>
                        Ana Sayfa
                    </div>
                    
                    <Dropdown menu={{ items: itemsHakkimizda }}>
                        <a onClick={(e) => e.preventDefault()}>
                            <Space className="font-bold cursor-pointer hover:text-white hover:scale-105 transition duration-200 px-2 max-xl:px-1 py-1.5">
                                Kurumsal
                            </Space>
                        </a>
                    </Dropdown>
                    
                    <Dropdown menu={{ items: itemsFaaliyetlerimiz }}>
                        <a onClick={(e) => e.preventDefault()}>
                            <Space className="font-bold cursor-pointer hover:text-white hover:scale-105 transition duration-200 px-2 max-xl:px-1 py-1.5">
                                Faaliyetlerimiz
                            </Space>
                        </a>
                    </Dropdown>
                    
                    {/* İletişim Butonu (State'i 7 yapıyor, bu doğru kurgu) */}
                    <div 
                        className="px-2 max-xl:px-1 py-1.5 rounded-md cursor-pointer hover:text-white hover:scale-105 transition duration-200 font-bold"
                        onClick={() => setCurrentState(7)}>
                        İletişim
                    </div>
                    
                </div>

                {/* Join Button */}
                <div className="max-sm:mr-2">
                    <a onClick={() => window.open("https://forms.gle/R6yqPrF31FKdZK9u5", "_blank")}>
                        <div className="px-6 py-2 rounded-md cursor-pointer bg-orange-600 hover:bg-orange-500 hover:scale-105 transition-all duration-300 font-bold text-white shadow-md">
                            Bize Katıl!
                        </div>
                    </a>
                </div>

            </div>

            <div className={`absolute w-full flex justify-end items-center ${currentState !== 0 ? "py-36" : "py-80"}`}>
                <div className={"absolute z-10 bg-gradient-radial from-black to-transparent h-[300px] w-[700px] rounded-full mr-16 opacity-80 blur-xl"} />
                <div className={`absolute z-20 flex flex-col items-end justify-center px-12 rounded-full font-montserrat-bold mx-6 ${currentState !== 0 ? "mt-24" : ""}`}>
                                        <span className={`bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent select-none font-montserrat-bold
                                             ${currentState !== 0 ? "text-4xl" : "text-6xl"}`}                                              >Kardeş Hareketi</span>
                    <div className={`font-light text-right text-gray-200 font-montserrat-light select-none ${currentState !== 0 ? "text-4xl" : "text-5xl mt-4"}`}>
                        Burada Bir Kardeş'in Var
                    </div>
                </div>
            </div>

            {/* Images */}
            {/*<div className={"flex items-center"}>*/}
            {/*    <div className={"relative w-full"}>*/}
            {/*        <div className={"absolute w-full flex justify-end items-center"}>*/}
            {/*            <div className={`absolute z-20 flex flex-col items-end justify-center px-36 py-64 ${currentState !== 0 ? "py-36" : ""} font-modern`}>*/}
            {/*                    <span*/}
            {/*                        className={`bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent animate-gradient select-none ${currentState !== 0 ? "text-5xl" : "text-7xl"}`}*/}
            {/*                        style={{backgroundSize: '300% 200%'}}*/}
            {/*                    >Kardeş Hareketi</span>*/}
            {/*                <div className={`font-light text-right text-gray-200 font-sans select-none ${currentState !== 0 ? "text-4xl mt-2" : "text-6xl mt-8"}`}>*/}
            {/*                    Siz De Bu Kardeşliğe <br/> Ortak Olun*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            <div className={`w-full ${currentState !== 0 ? "h-[400px]" : "h-[700px]"} bg-gradient-to-l from-black to-transparent opacity-70`}/>*/}
            {/*        </div>*/}
            {/*        <img src="https://i.imghippo.com/files/mac6312nE.jpeg" alt="kardes" className={`${currentState !== 0 ? "h-[400px]" : "h-[700px]"} w-full object-cover`}/>*/}
            {/*        <div className={`absolute flex items-center justify-center z-20 w-full bottom-0 ${currentState !== 0 ? "hidden" : ""}`} onClick={() => scrollToSection("about")}>*/}
            {/*            <img src="https://i.imghippo.com/files/yLc8952uN.png" alt="down" className={"h-16 w-16 animate-bounce cursor-pointer hover:animate-none opacity-75"}/>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}

            <MainCarousel state={currentState} setCurrentState={setCurrentState}/>

            {
                currentState === 0 && (
                    <div>
                        {/* Body */}
                        <div className={"w-full"}>

                            {/* Hakkımızda */}
                            <div id={"about"} className={"bg-[#062327] py-20 max-md:py-12"}>
                                <div className={"flex items-center justify-center text-4xl font-bold"}>
                                    <div className={"border-b-[1px] border-orange-500 w-1/3 max-xl:w-1/2 max-lg:w-2/3 flex items-center justify-center pb-2 text-gray-200"}>Biz Kimiz?</div>
                                </div>
                                <div className={"flex max-lg:flex-col justify-center items-center mt-12 gap-10"}>
                                    <div className={"text-2xl max-md:text-xl font-thin w-1/3 max-lg:w-4/5 max-xl:w-1/3 text-gray-200 text-left leading-relaxed"}>
                                        Kardeş Hareketi, dünyanın farklı coğrafyalarında yaşayan ihtiyaç sahipleri için dayanışmayı büyütmeyi amaçlayan gönüllü bir iyilik hareketidir.
                                        İyiliğin sınır tanımadığına ve her insanın bir diğerinin kardeşi olduğuna inanıyoruz.<br></br><br></br>

                                        Çalışmalarımızda özellikle 0–13 yaş arası yetim ve öksüz çocukları önceleyerek onların temel ihtiyaçlarına, eğitimlerine ve güvenli bir çocukluk geçirmelerine destek olmayı hedefliyoruz. Kardeş Hareketi, dünyanın neresinde olursa olsun iyiliğin ve kardeşliğin ortak dili olma niyetiyle yola çıkmış bir dayanışma çağrısıdır.
                                    </div>
                                    <div className={"w-1/3 max-xl:w-1/2 max-lg:w-4/5 h-[600px]"}>
                                        <Image src={elsallama} alt={"image"} className={"object-cover w-full h-full rounded-lg"} />
                                    </div>
                                </div>
                            </div>

                            {/* Faaliyetlerimiz */}
                            <div id={"actions"} className="py-20 px-24 max-xl:px-20 max-lg:px-16 max-md:px-12 max-sm:px-8">
                                <div className="flex items-center justify-center text-4xl font-bold">
                                    <div className="border-b-[1px] border-orange-500 w-1/3 max-xl:w-1/2 max-md:w-11/12 max-lg:w-2/3 flex items-center justify-center pb-2 text-gray-800">Faaliyetlerimiz</div>
                                </div>
                                <div
                                    className="flex items-center justify-start gap-8 max-sm:gap-12 overflow-x-scroll mt-12 py-4 pl-8"
                                    style={{ scrollSnapType: "x mandatory" }}
                                >
                                    {Cards.map((card, index) => (
                                        <div
                                            key={index}
                                            onClick={() => {
                                                setCurrentTitle(card.title);
                                                setCurrentContent(card.content);
                                                setCurrentIndex(index);
                                                showModal();
                                            }}
                                            className="w-[300px] h-[500px] bg-gray-100 rounded-lg p-6 cursor-pointer hover:shadow-lg hover:bg-gray-200 transition flex-shrink-0"
                                            style={{ scrollSnapAlign: "center" }}
                                        >
                                            <img
                                                src={card.images.image1}
                                                alt="image"
                                                className="w-full h-40 object-cover rounded-md"
                                            />
                                            <div className="text-2xl font-bold mt-4 text-left">{card.title}</div>
                                            <div className="text-gray-600 mt-4 text-justify">{card.content}</div>
                                        </div>
                                    ))}
                                </div>

                                <Modal
                                    open={isModalOpen}
                                    onOk={handleOk}
                                    onCancel={handleCancel}
                                    centered={true}
                                    zIndex={10}
                                    footer={[
                                        <Button className={""} key="cancel" onClick={handleCancel}>Kapat</Button>,
                                    ]}
                                    className={""}
                                >
                                    <div className="flex flex-col items-center justify-center text-2xl p-4">
                                        <div
                                            className={"flex w-full cursor-zoom-in space-x-4 overflow-x-auto snap-always"}
                                            onClick={() => {
                                                setCurrentImage(Cards.at(currentIndex).images.image+`${currentImageIndex + 1}`)
                                            }}
                                        >
                                            {Object.values(Cards.at(currentIndex).images).map((img, imgIndex) => (
                                                <img
                                                    key={imgIndex}
                                                    src={img}
                                                    alt={`Image ${imgIndex + 1}`}
                                                    className={"object-cover w-[500px] h-[300px] rounded-lg"}
                                                    onClick={() => {
                                                        setCurrentImageIndex(imgIndex);
                                                        setShowFullScreenModal(true);
                                                    }}/>
                                            ))}
                                        </div>
                                        <div className="flex flex-col gap-2 overflow-x-scroll my-4 w-full">
                                            <div className="text-2xl font-bold">
                                                {currentTitle}
                                            </div>
                                            <div className="text-lg">
                                                {currentContent}
                                            </div>
                                        </div>
                                    </div>
                                </Modal>

                            </div>

                            {/* Tam ekran foto */}
                            {
                                showFullScreenModal === true ? (
                                        <Modal
                                            open={showFullScreenModal}
                                            onOk={handleOk}
                                            onCancel={closeModal}
                                            zIndex={20}
                                            width={2000}
                                            centered={true}
                                            footer={[
                                                <Button key="cancel" onClick={closeModal}>Kapat</Button>,
                                            ]}
                                        >
                                            <div className={"p-4"}>
                                                <img src={currentImage} alt={currentImage} className={"object-contain w-[2000px] h-[600px] rounded-lg"}/>
                                            </div>
                                        </Modal>
                                    ) :
                                    (
                                        <></>
                                    )
                            }
                            {/* Tam ekran foto son */}
                        </div>
                    </div>
                )
            }
            
            {/* Eğer state 1, 2, 3, 4, 5, 6 ise Kurumsal Component'ini çağır */}
            {
                (currentState > 0 && currentState < 7) && (
                    <WhoAreWe state={currentState} setCurrentState={setCurrentState} />
                )
            }

            {/* Eğer state 7 ise İletişim Component'ini çağır */}
            {
                currentState === 7 && (
                    <Contact />
                )
            }

            {/* Footer */}
            <div>
                <footer className="bg-gray-900">
                    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 max-md:px-8   ">
                        <div className="pb-8 flex items-center justify-between">
                            <div className={"flex max-md:flex-col gap-8 max-md:gap-4"}>
                                <div className={"cursor-pointer text-gray-300 font-bold hover:text-white transition"}
                                     onClick={() => scrollToSection("main")}
                                >Ana Sayfa</div>
                                <div className={"cursor-pointer text-gray-300 font-bold hover:text-white transition"}
                                     onClick={() => scrollToSection("about")}
                                >Hakkımızda</div>
                                <div className={"cursor-pointer text-gray-300 font-bold hover:text-white transition"}
                                     onClick={() => scrollToSection("actions")}
                                >Faaliyetlerimiz</div>
                            </div>
                            <div className={"flex max-md:flex-col gap-8 max-md:gap-4"}>
                                <a href="www.google.com" className={"text-2xl text-gray-300 cursor-pointer hover:text-white transition"}>
                                    <FaInstagram/>
                                </a>
                                <div className={"text-2xl text-gray-300 cursor-pointer hover:text-white transition"}>
                                    <FaYoutube />
                                </div>
                                <div className={"text-2xl text-gray-300 cursor-pointer hover:text-white transition"}>
                                    <FaXTwitter />
                                </div>
                            </div>
                        </div>
                        <div
                            className="border-t border-gray-700 pt-8 lg:flex lg:items-center lg:justify-between xl:mt-0">
                            <div>
                                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                                    Bİze Katılmak İster Mİsİn?
                                </h3>
                                <p className="mt-2 text-base text-gray-300">
                                    Sayfanın en üst kısmındaki bize katıl butonuna tıklayarak bize katılabilirsin.
                                </p>
                            </div>
                        </div>
                        <div
                            className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
                            <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
                                &copy; 2022 Kardeş Hareketi, Inc. All rights reserved.
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}
