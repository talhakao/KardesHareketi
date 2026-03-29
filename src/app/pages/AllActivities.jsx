export default function AllActivities() {
    const Activities = [
        {
            title: "Üşüme Kardeşim",
            content: "İhtiyaç sahibi kardeşlerimize mont, bot, eldiven, atkı ve bere yardımında bulunuyoruz. Kış mevsiminde kimse üşümesin diye çalışıyoruz.",
            date: "04.12.2024",
            tag: "Kıyafet Yardımı",
            images: {
                image1: "https://i.imghippo.com/files/ZM1200nwM.jpg",
                image2: "https://i.imghippo.com/files/mac6312nE.jpeg",
                image3: "https://i.imghippo.com/files/OsIO2212kJs.jpeg",
            },
        },
        {
            title: "Adıyaman'da Çocuk Parkı!",
            content: "Deprem bölgesinde çocukların güvenle oynayabileceği parklar kurarak onların mutluluğuna ortak olduk.",
            date: "04.12.2024",
            tag: "Altyapı",
            images: {
                image1: "https://i.imghippo.com/files/kCRw5173mM.jpeg",
                image2: "https://i.imghippo.com/files/mac6312nE.jpeg",
                image3: "https://i.imghippo.com/files/OsIO2212kJs.jpeg",
            },
        },
        {
            title: "Yardım Kolisi",
            content: "Yardıma muhtaç ailelere gıda ve temel ihtiyaç kolisi dağıtarak onların yanında olduk.",
            date: "04.12.2024",
            tag: "Gıda Yardımı",
            images: {
                image1: "https://i.imghippo.com/files/OsIO2212kJs.jpeg",
                image2: "https://i.imghippo.com/files/mac6312nE.jpeg",
                image3: "https://i.imghippo.com/files/OsIO2212kJs.jpeg",
            },
        },
        {
            title: "Eğlenceli Faaliyetler",
            content: "Kardeşlerimizin mutluluğu için düzenli eğlenceli etkinlikler düzenleyerek çocukların yüzünü güldürüyoruz.",
            date: "04.12.2024",
            tag: "Etkinlik",
            images: {
                image1: "https://i.imghippo.com/files/FEX3798xuw.jpeg",
                image2: "https://i.imghippo.com/files/mac6312nE.jpeg",
                image3: "https://i.imghippo.com/files/OsIO2212kJs.jpeg",
            },
        },
        {
            title: "Kardeş Şenliği",
            content: "Her bahar yetim ve öksüz kardeşlerimizle bir araya gelerek Kardeş Şenliği düzenliyoruz.",
            date: "04.12.2024",
            tag: "Şenlik",
            images: {
                image1: "https://i.imghippo.com/files/FEX3798xuw.jpeg",
                image2: "https://i.imghippo.com/files/mac6312nE.jpeg",
                image3: "https://i.imghippo.com/files/OsIO2212kJs.jpeg",
            },
        },
    ];

    return (
        <div className="flex flex-col gap-8">
            <div>
                <h1 className="text-3xl font-montserrat-bold text-gray-900 mb-2">Faaliyetlerimiz</h1>
                <div className="h-1 w-16 bg-orange-500 rounded-full mb-2" />
                <p className="text-gray-500 font-montserrat-regular text-sm">
                    Gerçekleştirdiğimiz tüm faaliyetler
                </p>
            </div>

            <div className="grid grid-cols-1 gap-5">
                {Activities.map((activity, index) => (
                    <div
                        key={index}
                        className="group flex max-sm:flex-col gap-0 bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
                    >
                        {/* Fotoğraf */}
                        <div className="w-56 max-sm:w-full h-48 max-sm:h-44 flex-shrink-0 overflow-hidden relative">
                            <img
                                src={activity.images.image1}
                                alt={activity.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <span className="absolute top-3 left-3 bg-orange-500 text-white text-xs font-montserrat-semibold px-2.5 py-1 rounded-full">
                                {activity.tag}
                            </span>
                        </div>

                        {/* İçerik */}
                        <div className="flex flex-col justify-between p-6 flex-1">
                            <div>
                                <div className="flex items-center justify-between gap-4 mb-3">
                                    <h3 className="text-lg font-montserrat-bold text-gray-900 leading-snug">
                                        {activity.title}
                                    </h3>
                                    <span className="text-xs text-gray-400 font-montserrat-regular flex-shrink-0">
                                        {activity.date}
                                    </span>
                                </div>
                                <p className="text-gray-500 font-montserrat-regular text-sm leading-relaxed">
                                    {activity.content}
                                </p>
                            </div>
                            <div className="mt-4 flex gap-2">
                                {Object.values(activity.images).map((img, i) => (
                                    <img
                                        key={i}
                                        src={img}
                                        alt=""
                                        className="w-12 h-12 rounded-lg object-cover border-2 border-white shadow-sm"
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
