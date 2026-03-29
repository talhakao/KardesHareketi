import { useState, useEffect } from "react";
import BoardMember from "@/app/pages/BoardMember";
import Charter from "@/app/pages/Charter";
import Kvkk from "@/app/pages/Kvkk";
import AllActivities from "@/app/pages/AllActivities";

const KURUMSAL_LINKS = [
    { label: "Hakkımızda", state: 1 },
    { label: "Yönetim Kurulu", state: 2 },
    { label: "Tüzük", state: 3 },
    { label: "KVKK", state: 4 },
];

export default function WhoAreWe({ state, setCurrentState }) {
    const [localState, setLocalState] = useState(state);

    useEffect(() => {
        setLocalState(state);
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [state]);

    const isFaaliyet = localState === 5;

    return (
        <div className="min-h-screen bg-gray-50 font-montserrat-regular">
            <div className="max-w-7xl mx-auto px-8 max-md:px-4 py-16 flex gap-10 max-lg:flex-col">

                {/* ── Sidebar ── */}
                <aside className="w-64 max-lg:w-full flex-shrink-0">
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden sticky top-28">
                        <div className="bg-[#062327] px-6 py-4">
                            <span className="text-orange-400 text-xs font-montserrat-semibold uppercase tracking-widest">
                                {isFaaliyet ? "Faaliyetler" : "Kurumsal"}
                            </span>
                        </div>
                        <nav className="flex flex-col py-2 max-lg:flex-row max-lg:flex-wrap max-lg:gap-1 max-lg:p-3">
                            {!isFaaliyet ? (
                                KURUMSAL_LINKS.map((link) => (
                                    <button
                                        key={link.state}
                                        onClick={() => setCurrentState(link.state)}
                                        className={`text-left px-6 py-3.5 text-sm font-montserrat-semibold transition-all duration-200 border-l-4 max-lg:border-l-0 max-lg:rounded-lg max-lg:px-4 max-lg:py-2 max-lg:border-b-2 ${
                                            localState === link.state
                                                ? "border-orange-500 text-orange-600 bg-orange-50"
                                                : "border-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-50 hover:border-gray-300"
                                        }`}
                                    >
                                        {link.label}
                                    </button>
                                ))
                            ) : (
                                <button
                                    onClick={() => setCurrentState(5)}
                                    className="text-left px-6 py-3.5 text-sm font-montserrat-semibold border-l-4 border-orange-500 text-orange-600 bg-orange-50"
                                >
                                    Tüm Faaliyetler
                                </button>
                            )}
                        </nav>
                    </div>
                </aside>

                {/* ── Content ── */}
                <main className="flex-1 min-w-0">
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-10 max-md:p-6">
                        {localState === 1 && <HakkimizdaContent />}
                        {localState === 2 && <BoardMember />}
                        {localState === 3 && <Charter />}
                        {localState === 4 && <Kvkk />}
                        {localState === 5 && <AllActivities />}
                    </div>
                </main>

            </div>
        </div>
    );
}

function HakkimizdaContent() {
    return (
        <div className="flex flex-col gap-10">
            <div>
                <h1 className="text-3xl font-montserrat-bold text-gray-900 mb-2">Misyon ve Vizyon</h1>
                <div className="h-1 w-16 bg-orange-500 rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Misyon Kartı */}
                <div className="bg-[#062327] rounded-2xl p-8 relative overflow-hidden">
                    <div className="absolute top-4 right-6 text-orange-400/20 text-8xl font-montserrat-black leading-none select-none">M</div>
                    <span className="inline-block bg-orange-500/20 border border-orange-400/30 text-orange-400 text-xs font-montserrat-semibold px-3 py-1 rounded-full tracking-widest uppercase mb-4">
                        Misyonumuz
                    </span>
                    <p className="text-gray-200 font-montserrat-light leading-relaxed text-base relative z-10">
                        Kardeş Hareketi, her insanı bir dünya olarak gören; dokunduğu insanlarla dünyayı iyilikle
                        kuşatmayı hedefleyen bir kardeşlik hareketidir. Temel misyonu, insani değerlerin hâlâ
                        ölmediği ve bir yerlerde onları yaşatan insanların var olduğu umudunu diri tutmak;
                        mazlum, mağdur ve kimsesiz kalmış insanlara omuz verip "kardeş" olabilmektir.
                    </p>
                </div>

                {/* Vizyon Kartı */}
                <div className="bg-orange-600 rounded-2xl p-8 relative overflow-hidden">
                    <div className="absolute top-4 right-6 text-white/10 text-8xl font-montserrat-black leading-none select-none">V</div>
                    <span className="inline-block bg-white/20 border border-white/30 text-white text-xs font-montserrat-semibold px-3 py-1 rounded-full tracking-widest uppercase mb-4">
                        Vizyonumuz
                    </span>
                    <p className="text-white font-montserrat-light leading-relaxed text-base relative z-10">
                        Temel vizyonu, çocuklar başta olmak üzere toplumun her kesiminde dayanışma ve paylaşma
                        kültürünü güçlendiren; ihtiyaç sahiplerine sürekli ve sürdürülebilir faydalar sunmaya
                        gayret eden, kurduğu kardeşlik ağıyla dünyayı iyilikle kuşatmayı hedefleyen örnek bir
                        yardım hareketi olmaktır.
                    </p>
                </div>
            </div>

            {/* Alıntı */}
            <div className="border-l-4 border-orange-500 pl-6 py-2">
                <p className="text-gray-500 font-montserrat-light italic text-lg leading-relaxed">
                    "İyiliğin sınır tanımadığına ve her insanın bir diğerinin kardeşi olduğuna inanıyoruz."
                </p>
            </div>
        </div>
    );
}
