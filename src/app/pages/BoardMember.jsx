export default function BoardMember() {
    const boardMembers = [
        {
            name: "Talha Karaalioğlu",
            title: "Başkan",
            email: "talha@gmail.com",
            image: "https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?t=st=1740853846~exp=1740857446~hmac=8880da11a527be2e9179d2ba831ceb61aaf5d62010a2a3a92598c863f1a3413c&w=2000"
        },
        {
            name: "Ahmet Yılmaz",
            title: "Başkan Yardımcısı",
            email: "ahmet@gmail.com",
            image: "https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg?t=st=1740854018~exp=1740857618~hmac=87a2266ce19a0f7f7bfe3ca1116ba57d00e9fa5e5f078ec83398e361582e5fa5&w=2000"
        },
        {
            name: "Veli Demir",
            title: "Yönetim Kurulu Üyesi",
            email: "veli@gmail.com",
            image: "https://img.freepik.com/premium-photo/attractive-smiling-young-man-glasses-studio-headshot_656932-6164.jpg?w=2000"
        },
        {
            name: "Mehmet Yıldırım",
            title: "Yönetim Kurulu Üyesi",
            email: "mehmet@gmail.com",
            image: "https://img.freepik.com/premium-photo/portrait-young-happy-smiling-handsome-man-isolated-white_1258-5418.jpg?w=2000"
        },
        {
            name: "Hamza Kabakçılı",
            title: "Yönetim Kurulu Üyesi",
            email: "hamza@gmail.com",
            image: "https://iili.io/F8sL6fn.jpg"
        },
        {
            name: "Enis Rahman Zencir",
            title: "Yönetim Kurulu Üyesi",
            email: "enis@gmail.com",
            image: "https://img.freepik.com/free-photo/artist-white_1368-3546.jpg?t=st=1740854177~exp=1740857777~hmac=a1ba202327947b1b76dc15c28c36808dacb0bb66728cdb6496ccafa7b4e8ade0&w=1380"
        },
    ];

    return (
        <div className={"flex flex-col items-center justify-center gap-12"}>

            <div className={"flex justify-center text-xl font-bold"}>Yönetim Kurulu</div>

            <div className={"grid grid-cols-3 gap-12 justify-between w-full"}>
                {
                    boardMembers.map((member, index) => (
                        <div key={index} className={"flex flex-col items-center gap-1"}>
                            <div className={"p-1 bg-gray-50 rounded-lg"}>
                                <img src={member.image} alt={member.name} className={"h-64 w-56 rounded-lg object-cover"} />
                            </div>
                            <div className={"text-lg font-bold"}>{member.name}</div>
                            <div className={"text-gray-500 font-bold"}>{member.title}</div>
                        </div>
                    ))
                }
            </div>

        </div>
    );
}
