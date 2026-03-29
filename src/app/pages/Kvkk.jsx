export default function Kvkk() {
    const sections = [
        {
            number: "I",
            title: "İşlenen Kişisel Veriler ve İşlenme Amaçları",
            items: [
                {
                    label: "Bağışçılar",
                    content: "Kimlik, iletişim ve finans bilgileri; bağış toplanması, makbuz düzenlenmesi, muhasebe işlemleri ve kampanya bilgilendirmeleri amacıyla işlenmektedir.",
                },
                {
                    label: "Gönüllüler",
                    content: "Kimlik, iletişim ve özlük bilgileri (eğitim, meslek, ilgi alanları); başvuruların değerlendirilmesi, koordinasyon ve eğitim programları amacıyla işlenmektedir.",
                },
                {
                    label: "İhtiyaç Sahipleri",
                    content: "Kimlik, iletişim ve sosyo-ekonomik bilgiler; gıda, giyim, eğitim, sağlık ve barınma yardımlarının planlanması amacıyla işlenmektedir. Çocuklara ilişkin veriler ve sağlık verileri özel nitelikli veri kapsamındadır.",
                },
                {
                    label: "Üyeler",
                    content: "Kimlik, iletişim bilgileri ve kimlik kartı sureti; üyelik kayıtları ve Dernekler Kanunu kapsamındaki yükümlülükler için işlenmektedir.",
                },
                {
                    label: "Etkinlik Katılımcıları",
                    content: "Kimlik, iletişim bilgileri ile fotoğraf/video kayıtları; etkinlik organizasyonu ve faaliyetlerin belgelenmesi amacıyla işlenmektedir.",
                },
                {
                    label: "Çevrimiçi Ziyaretçiler",
                    content: "İletişim formu bilgileri, IP adresi, çerez ve tarayıcı verileri; sitenin teknik işleyişi ve bilgi güvenliği amacıyla işlenmektedir.",
                },
            ],
        },
        {
            number: "II",
            title: "Kişisel Verilerin Toplanma Yöntemleri ve Hukuki Sebepleri",
            text: "Kişisel verileriniz; web sitemizdeki formlar, e-posta, telefon, sosyal medya, banka/ödeme sistemleri ve dernek merkezine yapılan başvurular aracılığıyla toplanmaktadır. İşleme; kanunlarda açıkça öngörülmesi, sözleşmenin kurulması veya ifası, hukuki yükümlülük ve meşru menfaat hukuki sebeplerine dayanmaktadır. Bilgilendirme mesajları yalnızca açık rızanız doğrultusunda gönderilmektedir.",
        },
        {
            number: "III",
            title: "Kişisel Verilerin Aktarılması",
            text: "Verileriniz; sosyal yardım proje ortakları ve kamu kurumları, T.C. İçişleri Bakanlığı ve Dernekler Dairesi Başkanlığı, denetim ve muhasebe firmaları, hukuk büroları ile sosyal medya platformlarıyla KVKK'nın 8. ve 9. maddeleri kapsamında paylaşılabilmektedir.",
        },
        {
            number: "IV",
            title: "Kişisel Verilerin Saklanma Süresi",
            text: "Kişisel verileriniz, işlenme amacının gerektirdiği süre ve ilgili mevzuattaki zamanaşımı süreleriyle uyumlu olarak saklanmaktadır. Amaç ortadan kalktığında veya yasal süreler dolduğunda veriler silinmekte, yok edilmekte veya anonim hale getirilmektedir.",
        },
        {
            number: "V",
            title: "Çerez Politikası",
            text: "Web sitemizde kullanıcı deneyimini iyileştirmek amacıyla zorunlu, analitik ve işlevsel çerezler kullanılabilmektedir. Tarayıcı ayarlarınızdan çerez tercihlerinizi yönetebilir veya çerezleri devre dışı bırakabilirsiniz.",
        },
        {
            number: "VI",
            title: "İlgili Kişinin Hakları",
            rights: [
                "Kişisel verilerinizin işlenip işlenmediğini öğrenme",
                "İşlenmişse buna ilişkin bilgi talep etme",
                "İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme",
                "Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme",
                "Eksik veya yanlış işlenmiş olması hâlinde düzeltilmesini isteme",
                "KVKK'nın 7. maddesi kapsamında silinmesini veya yok edilmesini isteme",
                "Otomatik sistemler aracılığıyla aleyhinize çıkan sonuçlara itiraz etme",
                "Kanuna aykırı işlenmesi nedeniyle uğradığınız zararın giderilmesini talep etme",
            ],
        },
        {
            number: "VII",
            title: "Başvuru Yöntemi",
            text: "Haklarınızı kullanmak için Veri Sorumlusuna Başvuruda Uyulacak Esaslar Hakkında Tebliğ uyarınca aşağıdaki kanallardan bize ulaşabilirsiniz.",
        },
    ];

    return (
        <div className="flex flex-col gap-8">

            {/* Başlık */}
            <div>
                <h1 className="text-3xl font-montserrat-bold text-gray-900 mb-2">
                    Kişisel Verilerin Korunması Kanunu Aydınlatma Metni
                </h1>
                <div className="h-1 w-20 bg-orange-500 rounded-full mb-4" />
                <p className="text-gray-500 font-montserrat-regular leading-relaxed">
                    İstanbul Kardeş Hareketi Derneği olarak, 6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında
                    veri sorumlusu sıfatıyla kişisel verilerinizin korunmasına azami özen göstermekteyiz.
                </p>
            </div>

            {/* Veri Sorumlusu Kartı */}
            <div className="bg-[#062327] rounded-xl p-6 grid grid-cols-2 max-sm:grid-cols-1 gap-4">
                <div>
                    <p className="text-orange-400 text-xs font-montserrat-semibold uppercase tracking-widest mb-1">Veri Sorumlusu</p>
                    <p className="text-white font-montserrat-bold text-lg">İstanbul Kardeş Hareketi Derneği</p>
                </div>
                <div className="flex flex-col gap-2 text-sm text-gray-300 font-montserrat-regular">
                    <span>📍 Mehmet Akif Mah. Fatih Bulvarı No:147, Sultanbeyli / İstanbul</span>
                    <span>📞 +90 541 479 88 09</span>
                    <span>✉️ kardes@hareketidernegi.com</span>
                    <span>🌐 www.kardeşhareketi.com</span>
                </div>
            </div>

            {/* Bölümler */}
            {sections.map((section) => (
                <div key={section.number} className="border border-gray-100 rounded-xl overflow-hidden shadow-sm">
                    {/* Bölüm başlığı */}
                    <div className="bg-gray-50 border-b border-gray-100 px-6 py-4 flex items-center gap-3">
                        <span className="bg-orange-500 text-white text-xs font-montserrat-bold w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0">
                            {section.number}
                        </span>
                        <h2 className="font-montserrat-bold text-gray-800 text-base">{section.title}</h2>
                    </div>

                    <div className="px-6 py-5">
                        {/* Madde listesi (I. bölüm) */}
                        {section.items && (
                            <div className="grid grid-cols-1 gap-3">
                                {section.items.map((item) => (
                                    <div key={item.label} className="flex gap-3">
                                        <span className="mt-0.5 w-2 h-2 rounded-full bg-orange-400 flex-shrink-0 mt-2" />
                                        <div>
                                            <span className="font-montserrat-semibold text-gray-800 text-sm">{item.label}: </span>
                                            <span className="text-gray-500 font-montserrat-regular text-sm">{item.content}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Haklar listesi (VI. bölüm) */}
                        {section.rights && (
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                {section.rights.map((right, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600 font-montserrat-regular">
                                        <span className="text-orange-500 font-bold mt-0.5">✓</span>
                                        {right}
                                    </li>
                                ))}
                            </ul>
                        )}

                        {/* Düz metin */}
                        {section.text && (
                            <p className="text-gray-500 font-montserrat-regular text-sm leading-relaxed">
                                {section.text}
                            </p>
                        )}

                        {/* VII. bölüm iletişim */}
                        {section.number === "VII" && (
                            <div className="mt-4 flex flex-wrap gap-3">
                                <div className="bg-orange-50 border border-orange-200 rounded-lg px-4 py-3 text-sm">
                                    <p className="font-montserrat-semibold text-orange-700">Posta / Şahsen Başvuru</p>
                                    <p className="text-gray-600 font-montserrat-regular mt-0.5">
                                        Mehmet Akif Mah. Fatih Bulvarı No:147, Sultanbeyli / İstanbul
                                    </p>
                                </div>
                                <div className="bg-orange-50 border border-orange-200 rounded-lg px-4 py-3 text-sm">
                                    <p className="font-montserrat-semibold text-orange-700">E-posta Başvurusu</p>
                                    <p className="text-gray-600 font-montserrat-regular mt-0.5">
                                        kardes@hareketidernegi.com
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            ))}

            {/* Son güncelleme */}
            <p className="text-gray-400 text-xs font-montserrat-regular text-right">
                Son Güncelleme: 29/03/2026 — Bu metin gerektiğinde güncellenebilir.
            </p>
        </div>
    );
}
