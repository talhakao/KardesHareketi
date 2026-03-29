"use client";
import { useState, useEffect } from "react";

const DEFAULT_MEMBERS = [
    {
        name: "Talha Karaalioğlu",
        title: "Başkan",
        imageKey: "board_talha",
        image: "https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg",
    },
    {
        name: "Ahmet Yılmaz",
        title: "Başkan Yardımcısı",
        imageKey: "board_ahmet",
        image: "https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg",
    },
    {
        name: "Veli Demir",
        title: "Yönetim Kurulu Üyesi",
        imageKey: "board_veli",
        image: "https://img.freepik.com/premium-photo/attractive-smiling-young-man-glasses-studio-headshot_656932-6164.jpg",
    },
    {
        name: "Mehmet Yıldırım",
        title: "Yönetim Kurulu Üyesi",
        imageKey: "board_mehmet",
        image: "https://img.freepik.com/premium-photo/portrait-young-happy-smiling-handsome-man-isolated-white_1258-5418.jpg",
    },
    {
        name: "Hamza Kabakçılı",
        title: "Yönetim Kurulu Üyesi",
        imageKey: "board_hamza",
        image: "https://iili.io/F8sL6fn.jpg",
    },
    {
        name: "Enis Rahman Zencir",
        title: "Yönetim Kurulu Üyesi",
        imageKey: "board_enis",
        image: "https://img.freepik.com/free-photo/artist-white_1368-3546.jpg",
    },
];

export default function BoardMember() {
    const [members, setMembers] = useState(DEFAULT_MEMBERS);

    useEffect(() => {
        const keys = DEFAULT_MEMBERS.map((m) => m.imageKey).join(",");
        fetch(`/api/images?keys=${keys}`)
            .then((r) => r.json())
            .then((data) => {
                if (data && typeof data === "object") {
                    setMembers((prev) =>
                        prev.map((m) => ({
                            ...m,
                            image: data[m.imageKey] || m.image,
                        }))
                    );
                }
            })
            .catch(() => {});
    }, []);

    return (
        <div className={"flex flex-col items-center justify-center gap-12"}>
            <div className={"flex justify-center text-xl font-bold"}>Yönetim Kurulu</div>
            <div className={"grid grid-cols-3 gap-12 justify-between w-full"}>
                {members.map((member, index) => (
                    <div key={index} className={"flex flex-col items-center gap-1"}>
                        <div className={"p-1 bg-gray-50 rounded-lg"}>
                            <img
                                src={member.image}
                                alt={member.name}
                                className={"h-64 w-56 rounded-lg object-cover"}
                            />
                        </div>
                        <div className={"text-lg font-bold"}>{member.name}</div>
                        <div className={"text-gray-500 font-bold"}>{member.title}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
