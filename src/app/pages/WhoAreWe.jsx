import {useState, useEffect} from "react";
import BoardMember from "@/app/pages/BoardMember";
import Charter from "@/app/pages/Charter";
import Kvkk from "@/app/pages/Kvkk";
import AllActivities from "@/app/pages/AllActivities";

export default function WhoAreWe({ state, setCurrentState }) { // setCurrentState prop eklendi

    const [localState, setLocalState] = useState(state);

    // Main'den gelen state değiştiğinde local state'i güncelle
    useEffect(() => {
        setLocalState(state);
    }, [state]);

    return (
        <div className={"w-screen"}>
            <div className={"px-32 my-16 flex gap-12"}>
                {/* Sidebar */}
                <div className={"flex flex-col w-1/6"}>
                    {
                        localState !== 5 ? (
                            <div>
                                <div className={"flex items-center py-6 text-gray-900 text-2xl font-bold border-b-[0.5px] border-gray-300"}>Kurumsal</div>
                                <div className={"flex items-center py-6 text-gray-600 text-lg font-bold border-b-[0.5px] border-gray-300 cursor-pointer transition hover:scale-105 hover:text-gray-800"}
                                     onClick={() => setCurrentState(1)} // setCurrentState kullanıldı
                                >Hakkımızda</div>
                                <div className={"flex items-center py-6 text-gray-600 text-lg font-bold border-b-[0.5px] border-gray-300 cursor-pointer transition hover:scale-105 hover:text-gray-800"}
                                     onClick={() => setCurrentState(2)} // setCurrentState kullanıldı
                                >Yönetim Kurulu</div>
                                <div className={"flex items-center py-6 text-gray-600 text-lg font-bold border-b-[0.5px] border-gray-300 cursor-pointer transition hover:scale-105 hover:text-gray-800"}
                                     onClick={() => setCurrentState(3)} // setCurrentState kullanıldı
                                >Tüzük</div>
                                <div className={"flex items-center py-6 text-gray-600 text-lg font-bold cursor-pointer transition hover:scale-105 hover:text-gray-800"}
                                     onClick={() => setCurrentState(4)} // setCurrentState kullanıldı
                                >KVKK</div>
                            </div>
                        ) : (
                            <div>
                                <div className={"flex items-center py-6 text-gray-900 text-2xl font-bold border-b-[0.5px] border-gray-300"}>Faaliyetler</div>
                                <div className={"flex items-center py-6 text-gray-600 text-lg font-bold cursor-pointer transition hover:scale-105 hover:text-gray-800"}
                                     onClick={() => setCurrentState(5)} // setCurrentState kullanıldı
                                >Tüm Faaliyetler</div>
                            </div>
                        )
                    }
                </div>

                {/* Content */}
                <div className={"w-5/6 border-l-[0.5px] border-gray-300 pl-12"}>
                    {
                        localState === 1 && (
                            <div>
                                <div className={"text-3xl font-bold"}>Misyon ve Vizyon</div>
                                <div className={"mt-2 text-xl font-bold text-gray-600"}>Misyonumuz</div>
                                <div className={"mt-4 text-gray-700 text-lg"}>
                                    <div>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis cum eligendi nulla quaerat quidem! Autem consectetur dignissimos distinctio eveniet quaerat quidem quisquam rem repellat soluta voluptatum. Deleniti dolore error facere.
                                        <br/> <br/>
                                        <div>- Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad corporis dignissimos doloribus</div>
                                        <div>- Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad corporis dignissimos doloribus</div>
                                        <div>- Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad corporis dignissimos doloribus</div>
                                    </div>
                                </div>

                                <div className={"mt-8 text-xl font-bold text-gray-600"}>Vizyonumuz</div>
                                <div className={"mt-4 text-gray-700 text-lg"}>
                                    <div>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis cum eligendi nulla quaerat quidem! Autem consectetur dignissimos distinctio eveniet quaerat quidem quisquam rem repellat soluta voluptatum. Deleniti dolore error facere.
                                        <br/> <br/>
                                        <div>- Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad corporis dignissimos doloribus</div>
                                        <div>- Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad corporis dignissimos doloribus</div>
                                        <div>- Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad corporis dignissimos doloribus</div>
                                    </div>
                                </div>

                                <div className={"mt-8 text-xl font-bold text-gray-600"}>Çalışma İlkelerimiz</div>
                                <div className={"mt-4 text-gray-700 text-lg"}>
                                    <div className={"mb-4"}>- Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad corporis dignissimos doloribus</div>
                                    <div className={"mb-4"}>- Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad corporis dignissimos doloribus</div>
                                    <div className={"mb-4"}>- Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad corporis dignissimos doloribus</div>
                                    <div className={"mb-4"}>- Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad corporis dignissimos doloribus</div>
                                </div>
                            </div>
                        ) || localState === 2 && (
                            <BoardMember/>
                        ) || localState === 3 && (
                            <Charter/>
                        ) || localState === 4 && (
                            <Kvkk/>
                        ) || localState === 5 && (
                            <AllActivities/>
                        )
                    }
                </div>
            </div>
        </div>
    );
}
