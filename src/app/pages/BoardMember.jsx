"use client";
import { useState, useEffect } from "react";

const DEFAULT_MEMBERS = [
    {
        name: "Enis Rahman Zencir",
        title: "Yönetim Kurulu Başkanı",
        imageKey: "board_enis",
        image: "https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg",
    },
    {
        name: "Salih Şencan",
        title: "Yönetim Kurulu Başkan Yardımcısı",
        imageKey: "board_salih",
        image: "https://img.freepik.com/premium-photo/portrait-young-happy-smiling-handsome-man-isolated-white_1258-5418.jpg",
    },
    {
        name: "Emirhan Kuşaksız",
        title: "Dernek Sekreteri",
        imageKey: "board_emirhan",
        image: "https://img.freepik.com/premium-photo/attractive-smiling-young-man-glasses-studio-headshot_656932-6164.jpg",
    },
    {
        name: "Malik Ezber",
        title: "Yönetim Kurulu Üyesi",
        imageKey: "board_malik",
        image: "https://img.freepik.com/free-photo/artist-white_1368-3546.jpg",
    },
    {
        name: "Yahya Arıtuyuk",
        title: "Yönetim Kurulu Üyesi",
        imageKey: "board_yahya",
        image: "https://img.freepik.com/free-photo/medium-shot-smiley-man-posing_23-2149915892.jpg",
    },
    {
        name: "Hamza Kabakçılı",
        title: "Yönetim Kurulu Üyesi",
        imageKey: "board_hamza",
        image: "https://iili.io/F8sL6fn.jpg",
    },
    {
        name: "Mürsel Ezber",
        title: "Yönetim Kurulu Üyesi",
        imageKey: "board_mursel",
        image: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg",
    },
    {
        name: "Talha Karaalioğlu",
        title: "Yönetim Kurulu Üyesi",
        imageKey: "board_talha",
        image: "https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg",
    },
    {
        name: "Yusuf Arıtuyuk",
        title: "Yönetim Kurulu Üyesi",
        imageKey: "board_yusuf",
        image: "https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg",
    },
    {
        name: "Ahmet Emin Bayrakdar",
        title: "Yönetim Kurulu Üyesi",
        imageKey: "board_ahmet",
        image: "https://img.freepik.com/free-photo/cheerful-curly-business-man-running-modern-office_1163-2523.jpg",
    },
    {
        name: "Ömer Küçükşahin",
        title: "Yönetim Kurulu Üyesi",
        imageKey: "board_omer",
        image: "https://img.freepik.com/free-photo/portrait-smiling-blonde-man_23-2148316529.jpg",
    },
];

export default function BoardMember() {
    const [members, setMembers] = useState(null);

    useEffect(() => {
        const keys = DEFAULT_MEMBERS.map((m) => m.imageKey).join(",");
        fetch(`/api/images?keys=${keys}`)
            .then((r) => r.json())
            .then((data) => {
                if (data && typeof data === "object") {
                    setMembers(DEFAULT_MEMBERS.map((m) => ({ ...m, image: data[m.imageKey] || m.image })));
                } else {
                    setMembers(DEFAULT_MEMBERS);
                }
            })
            .catch(() => setMembers(DEFAULT_MEMBERS));
    }, []);

    if (!members) return (
        <div className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="rounded-2xl bg-gray-100 animate-pulse h-56" />
            ))}
        </div>
    );

    const [baskan, ...diger] = members;

    return (
        <div className="flex flex-col gap-10">
            <div>
                <h1 className="text-3xl font-montserrat-bold text-gray-900 mb-2">Yönetim Kurulu</h1>
                <div className="h-1 w-16 bg-orange-500 rounded-full mb-2" />
                <p className="text-gray-500 font-montserrat-regular text-sm">
                    Kardeş Hareketi Derneği yönetim kurulu üyeleri
                </p>
            </div>

            {/* Başkan — öne çıkan kart */}
            <div className="flex justify-center">
                <div className="group relative w-60 rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                    <img
                        src={baskan.image}
                        alt={baskan.name}
                        className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#062327]/90 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                        <span className="inline-block bg-orange-500 text-white text-xs font-montserrat-semibold px-3 py-1 rounded-full mb-2">
                            {baskan.title}
                        </span>
                        <p className="text-white font-montserrat-bold text-lg leading-tight">{baskan.name}</p>
                    </div>
                </div>
            </div>

            {/* Diğer üyeler */}
            <div className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-6">
                {diger.map((member, i) => (
                    <div key={i} className="group relative rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                        <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#062327]/85 via-transparent to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                            <p className="text-orange-400 text-xs font-montserrat-semibold mb-1">{member.title}</p>
                            <p className="text-white font-montserrat-bold text-base leading-tight">{member.name}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
