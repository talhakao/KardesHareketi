import { Carousel } from "antd";
import Image from "next/image";

import cocukparki from "@/Images/cocukParki.35.06.jpeg";
import elsallama from "@/Images/cocuklarElSalliyor.jpeg";
import partisapka from "@/Images/partiSapkaliCocuklar.jpeg";
import kolitasiyan from "@/Images/koliTasiyanEleman.jpeg";

export default function MainCarousel({ state }) {
    // Fotoğrafın üzerine eklenecek gradyan katmanının class'ı
    const overlayClass = "absolute inset-0 bg-gradient-to-t from-[#062327] via-black/40 to-black/10 opacity-90";
    
    // Yükseklik ayarı
    const heightClass = state !== 0 ? "h-[400px]" : "h-[700px]";

    return (
        <div className="w-full">
            {/* effect="fade" eklendi, geçişler daha yumuşak ve premium olacak */}
            <Carousel arrows={true} infinite={true} draggable={true} autoplay autoplaySpeed={5000} effect="fade">
                
                {/* Slayt 1 */}
                <div className="relative w-full">
                    {/* quality={100} ve priority eklendi (İlk yüklenen resim olduğu için) */}
                    <Image src={cocukparki} alt="Çocuk Parkı" quality={100} priority className={`${heightClass} w-full object-cover`} />
                    <div className={overlayClass} />
                </div>

                {/* Slayt 2 */}
                <div className="relative w-full">
                    <Image src={elsallama} alt="El Sallayan Çocuklar" quality={100} className={`${heightClass} w-full object-cover`} />
                    <div className={overlayClass} />
                </div>

                {/* Slayt 3 */}
                <div className="relative w-full">
                    <Image src={partisapka} alt="Eğlenceli Çocuklar" quality={100} className={`${heightClass} w-full object-cover`} />
                    <div className={overlayClass} />
                </div>

                {/* Slayt 4 */}
                <div className="relative w-full">
                    <Image src={kolitasiyan} alt="Yardım Kolisi" quality={100} className={`${heightClass} w-full object-cover`} />
                    <div className={overlayClass} />
                </div>

            </Carousel>
        </div>
    );
}