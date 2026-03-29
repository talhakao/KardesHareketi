"use client";
import { useState } from "react";

const CITIES = [
  "Adana", "Adıyaman", "Afyonkarahisar", "Ağrı", "Amasya", "Ankara", "Antalya",
  "Artvin", "Aydın", "Balıkesir", "Bilecik", "Bingöl", "Bitlis", "Bolu",
  "Burdur", "Bursa", "Çanakkale", "Çankırı", "Çorum", "Denizli", "Diyarbakır",
  "Edirne", "Elazığ", "Erzincan", "Erzurum", "Eskişehir", "Gaziantep", "Giresun",
  "Gümüşhane", "Hakkari", "Hatay", "Isparta", "Mersin", "İstanbul", "İzmir",
  "Kars", "Kastamonu", "Kayseri", "Kırklareli", "Kırşehir", "Kocaeli", "Konya",
  "Kütahya", "Malatya", "Manisa", "Kahramanmaraş", "Mardin", "Muğla", "Muş",
  "Nevşehir", "Niğde", "Ordu", "Rize", "Sakarya", "Samsun", "Siirt", "Sinop",
  "Sivas", "Tekirdağ", "Tokat", "Trabzon", "Tunceli", "Şanlıurfa", "Uşak",
  "Van", "Yozgat", "Zonguldak", "Aksaray", "Bayburt", "Karaman", "Kırıkkale",
  "Batman", "Şırnak", "Bartın", "Ardahan", "Iğdır", "Yalova", "Karabük",
  "Kilis", "Osmaniye", "Düzce",
];

export default function BizeKatil() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    city: "",
    reason: "",
  });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/join", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || "Bir hata oluştu.");
        setStatus("error");
        return;
      }

      setStatus("success");
      setForm({ firstName: "", lastName: "", phone: "", email: "", city: "", reason: "" });
    } catch {
      setErrorMsg("Sunucuya bağlanılamadı. Lütfen tekrar deneyin.");
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-[#062327] py-20 px-4 flex flex-col items-center">
      <div className="w-full max-w-2xl">
        {/* Başlık */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-montserrat-bold text-white mb-3">
            Bize Katılın
          </h1>
          <div className="h-1 w-24 bg-orange-500 mx-auto rounded-full mb-4" />
          <p className="text-gray-300 font-montserrat-regular text-lg">
            Kardeş Hareketi ailesine katılmak ve iyilik yolculuğuna ortak olmak
            için aşağıdaki formu doldurun.
          </p>
        </div>

        {/* Başarı mesajı */}
        {status === "success" && (
          <div className="bg-green-600/20 border border-green-500 rounded-xl p-6 mb-8 text-center">
            <div className="text-green-400 text-5xl mb-3">✓</div>
            <h2 className="text-green-300 text-xl font-montserrat-bold mb-2">
              Başvurunuz Alındı!
            </h2>
            <p className="text-green-200 font-montserrat-regular">
              Kardeş Hareketi ailesine hoş geldiniz! En kısa sürede sizinle
              iletişime geçeceğiz.
            </p>
          </div>
        )}

        {/* Form */}
        {status !== "success" && (
          <form
            onSubmit={handleSubmit}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 flex flex-col gap-5"
          >
            {/* Ad Soyad */}
            <div className="flex gap-4 max-sm:flex-col">
              <div className="flex-1 flex flex-col gap-1">
                <label className="text-gray-300 text-sm font-montserrat-semibold">
                  Ad <span className="text-orange-400">*</span>
                </label>
                <input
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  required
                  placeholder="Adınız"
                  className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition font-montserrat-regular"
                />
              </div>
              <div className="flex-1 flex flex-col gap-1">
                <label className="text-gray-300 text-sm font-montserrat-semibold">
                  Soyad <span className="text-orange-400">*</span>
                </label>
                <input
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  required
                  placeholder="Soyadınız"
                  className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition font-montserrat-regular"
                />
              </div>
            </div>

            {/* Telefon */}
            <div className="flex flex-col gap-1">
              <label className="text-gray-300 text-sm font-montserrat-semibold">
                Telefon <span className="text-orange-400">*</span>
              </label>
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
                type="tel"
                placeholder="05XX XXX XX XX"
                className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition font-montserrat-regular"
              />
            </div>

            {/* E-posta */}
            <div className="flex flex-col gap-1">
              <label className="text-gray-300 text-sm font-montserrat-semibold">
                E-posta <span className="text-orange-400">*</span>
              </label>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                type="email"
                placeholder="ornek@email.com"
                className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition font-montserrat-regular"
              />
            </div>

            {/* Şehir */}
            <div className="flex flex-col gap-1">
              <label className="text-gray-300 text-sm font-montserrat-semibold">
                Şehir <span className="text-orange-400">*</span>
              </label>
              <select
                name="city"
                value={form.city}
                onChange={handleChange}
                required
                className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition font-montserrat-regular"
                style={{ backgroundColor: '#0a3338' }}
              >
                <option value="" disabled className="text-gray-500">
                  Şehir seçin
                </option>
                {CITIES.map((city) => (
                  <option key={city} value={city} className="text-white bg-[#062327]">
                    {city}
                  </option>
                ))}
              </select>
            </div>

            {/* Neden katılmak istiyorsunuz */}
            <div className="flex flex-col gap-1">
              <label className="text-gray-300 text-sm font-montserrat-semibold">
                Neden Katılmak İstiyorsunuz?{" "}
                <span className="text-orange-400">*</span>
              </label>
              <textarea
                name="reason"
                value={form.reason}
                onChange={handleChange}
                required
                rows={4}
                placeholder="Kendinizden ve katılmak isteme nedeninizden kısaca bahsedin..."
                className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition font-montserrat-regular resize-none"
              />
            </div>

            {/* Hata mesajı */}
            {status === "error" && (
              <div className="bg-red-500/20 border border-red-500 rounded-lg px-4 py-3 text-red-300 text-sm">
                {errorMsg}
              </div>
            )}

            {/* Gönder butonu */}
            <button
              type="submit"
              disabled={status === "loading"}
              className="bg-orange-600 hover:bg-orange-500 disabled:bg-orange-800 disabled:cursor-not-allowed text-white font-montserrat-bold py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg mt-2"
            >
              {status === "loading" ? "Gönderiliyor..." : "Başvuruyu Gönder"}
            </button>

            <p className="text-gray-500 text-xs text-center font-montserrat-regular">
              Kişisel verileriniz KVKK kapsamında korunmaktadır.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
