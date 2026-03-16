export default function AllActivities() {
    const Activities = [
        {
            title: "Üşüme Kardeşim",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet commodi consectetur cumque expedita fuga fugiat optio soluta vitae? Architecto iusto magnam maiores nisi quod quos sapiente similique sunt. Debitis, explicabo?",
            date: "04.12.2024",
            images: {
                image1: "https://i.imghippo.com/files/ZM1200nwM.jpg",
                image2: "https://i.imghippo.com/files/mac6312nE.jpeg",
                image3: "https://i.imghippo.com/files/OsIO2212kJs.jpeg",
            }},
        {
            title: "Adıyaman'da Çocuk Parkı!",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet commodi consectetur cumque expedita fuga fugiat optio soluta vitae? Architecto iusto magnam maiores nisi quod quos sapiente similique sunt. Debitis, explicabo?",
            date: "04.12.2024",
            images: {
                image1: "https://i.imghippo.com/files/kCRw5173mM.jpeg",
                image2: "https://i.imghippo.com/files/mac6312nE.jpeg",
                image3: "https://i.imghippo.com/files/OsIO2212kJs.jpeg",
            },
        },
        {
            title: "Yardım Kolisi",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet commodi consectetur cumque expedita fuga fugiat optio soluta vitae? Architecto iusto magnam maiores nisi quod quos sapiente similique sunt. Debitis, explicabo?",
            date: "04.12.2024",
            images: {
                image1: "https://i.imghippo.com/files/OsIO2212kJs.jpeg",
                image2: "https://i.imghippo.com/files/mac6312nE.jpeg",
                image3: "https://i.imghippo.com/files/OsIO2212kJs.jpeg",
            },
        },
        {
            title: "Eğlenceli Faaliyetler",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet commodi consectetur cumque expedita fuga fugiat optio soluta vitae? Architecto iusto magnam maiores nisi quod quos sapiente similique sunt. Debitis, explicabo?",
            date: "04.12.2024",
            images: {
                image1: "https://i.imghippo.com/files/FEX3798xuw.jpeg",
                image2: "https://i.imghippo.com/files/mac6312nE.jpeg",
                image3: "https://i.imghippo.com/files/OsIO2212kJs.jpeg",
            },
        },
        {
            title: "Eğlenceli Faaliyetler",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet commodi consectetur cumque expedita fuga fugiat optio soluta vitae? Architecto iusto magnam maiores nisi quod quos sapiente similique sunt. Debitis, explicabo?",
            date: "04.12.2024",
            images: {
                image1: "https://i.imghippo.com/files/FEX3798xuw.jpeg",
                image2: "https://i.imghippo.com/files/mac6312nE.jpeg",
                image3: "https://i.imghippo.com/files/OsIO2212kJs.jpeg",
            },
        },
    ]

    return (
        <div className={"flex flex-col items-center justify-center gap-12"}>

            <div className={"flex justify-center text-xl font-bold"}>Faaliyetlerimiz</div>

            <div className={"grid grid-cols-2 gap-8 justify-between w-full"}>
                {
                    Activities.map((activity, index) => (
                        <div key={index} className={"flex items-start gap-4 bg-gray-200 p-4 rounded-xl cursor-pointer transition hover:shadow-lg"}>
                            <div className={"w-1/2 h-56 rounded-lg"}>
                                <img src={activity.images.image1} alt={activity.name} className={"h-56 w-56 rounded-lg object-cover"} />
                            </div>
                            <div className={"w-1/2 flex flex-col gap-2"}>
                                <div className={"text-md font-bold text-left"}>{activity.title}</div>
                                <div className={"text-sm"}>{activity.content}</div>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    );
}
