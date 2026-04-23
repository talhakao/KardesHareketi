"use client";
import { useState, useEffect, useRef } from "react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

// Görsel gruplarını tanımla
const IMAGE_GROUPS = [
  {
    group: "Kurban Kampanyası - Ana Sayfa Hero",
    keys: ["kurban_hero"],
  },
  {
    group: "Carousel",
    keys: ["carousel_1", "carousel_2", "carousel_3", "carousel_4"],
  },
  {
    group: "Ana Sayfa - Hakkımızda",
    keys: ["home_about"],
  },
  {
    group: "Üşüme Kardeşim",
    keys: ["activity_usume_1", "activity_usume_2", "activity_usume_3"],
  },
  {
    group: "Kırtasiye Yardımı",
    keys: ["activity_kirtasiye_1", "activity_kirtasiye_2", "activity_kirtasiye_3"],
  },
  {
    group: "Yardım Kartı",
    keys: ["activity_yardim_kart_1", "activity_yardim_kart_2", "activity_yardim_kart_3"],
  },
  {
    group: "Kardeş Şenliği",
    keys: ["activity_senligi_1", "activity_senligi_2", "activity_senligi_3"],
  },
  {
    group: "Kurban Faaliyetleri",
    keys: ["activity_kurban_1", "activity_kurban_2", "activity_kurban_3"],
  },
  {
    group: "Eğlenceli Faaliyetler",
    keys: ["activity_eglence_1", "activity_eglence_2", "activity_eglence_3"],
  },
  {
    group: "Yönetim Kurulu Fotoğrafları",
    keys: [
      "board_enis",
      "board_salih",
      "board_emirhan",
      "board_malik",
      "board_yahya",
      "board_hamza",
      "board_mursel",
      "board_talha",
      "board_yusuf",
      "board_ahmet",
      "board_omer",
    ],
  },
];

export default function AdminDashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [activeTab, setActiveTab] = useState("members"); // members | photos
  const [members, setMembers] = useState([]);
  const [images, setImages] = useState({}); // key → { id, label, path }
  const [loadingMembers, setLoadingMembers] = useState(false);
  const [loadingImages, setLoadingImages] = useState(false);
  const [uploadingKey, setUploadingKey] = useState(null);
  const [deletingId, setDeletingId] = useState(null);
  const [toast, setToast] = useState(null); // { type: 'success'|'error', msg: '' }
  const fileInputRefs = useRef({});

  // Kimlik doğrulama kontrolü
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/admin");
    }
  }, [status, router]);

  // Başvuruları çek
  useEffect(() => {
    if (activeTab === "members" && session) {
      fetchMembers();
    }
  }, [activeTab, session]);

  // Görselleri çek
  useEffect(() => {
    if (activeTab === "photos" && session) {
      fetchImages();
    }
  }, [activeTab, session]);

  const showToast = (type, msg) => {
    setToast({ type, msg });
    setTimeout(() => setToast(null), 3500);
  };

  const fetchMembers = async () => {
    setLoadingMembers(true);
    try {
      const res = await fetch("/api/admin/members");
      const data = await res.json();
      setMembers(data);
    } catch {
      showToast("error", "Başvurular yüklenemedi.");
    } finally {
      setLoadingMembers(false);
    }
  };

  const fetchImages = async () => {
    setLoadingImages(true);
    try {
      const res = await fetch("/api/admin/images");
      const data = await res.json();
      const mapped = {};
      data.forEach((img) => {
        mapped[img.key] = img;
      });
      setImages(mapped);
    } catch {
      showToast("error", "Görseller yüklenemedi.");
    } finally {
      setLoadingImages(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Bu başvuruyu silmek istediğinizden emin misiniz?")) return;
    setDeletingId(id);
    try {
      const res = await fetch(`/api/admin/members?id=${id}`, { method: "DELETE" });
      if (res.ok) {
        setMembers((prev) => prev.filter((m) => m.id !== id));
        showToast("success", "Başvuru silindi.");
      } else {
        showToast("error", "Silme başarısız.");
      }
    } catch {
      showToast("error", "Bağlantı hatası.");
    } finally {
      setDeletingId(null);
    }
  };

  const handleUpload = async (imageKey, file) => {
    if (!file) return;
    setUploadingKey(imageKey);
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("key", imageKey);

      const res = await fetch("/api/admin/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (res.ok) {
        setImages((prev) => ({
          ...prev,
          [imageKey]: { ...prev[imageKey], path: data.path },
        }));
        // Ziyaretçi cache'ini temizle — yeni görsel anında yansısın
        try {
          localStorage.removeItem("site_images_main");
          localStorage.removeItem("site_images_carousel");
          localStorage.removeItem("site_images_board");
        } catch {}
        showToast("success", "Görsel güncellendi.");
      } else {
        showToast("error", data.error || "Yükleme başarısız.");
      }
    } catch {
      showToast("error", "Yükleme sırasında hata oluştu.");
    } finally {
      setUploadingKey(null);
    }
  };

  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleString("tr-TR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (status === "loading") {
    return (
      <div className="min-h-screen bg-[#062327] flex items-center justify-center">
        <div className="text-white text-lg">Yükleniyor...</div>
      </div>
    );
  }

  if (!session) return null;

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Toast bildirimi */}
      {toast && (
        <div
          className={`fixed top-4 right-4 z-50 px-5 py-3 rounded-lg shadow-lg text-white font-semibold transition-all ${
            toast.type === "success" ? "bg-green-600" : "bg-red-600"
          }`}
        >
          {toast.msg}
        </div>
      )}

      {/* Header */}
      <header className="bg-[#062327] shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-white text-xl font-bold">Kardeş Hareketi</h1>
            <p className="text-gray-400 text-sm">Yönetim Paneli</p>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-gray-300 text-sm hidden sm:block">
              Hoş geldiniz, <strong>{session.user?.name}</strong>
            </span>
            <button
              onClick={() => signOut({ callbackUrl: "/admin" })}
              className="bg-orange-600 hover:bg-orange-500 text-white text-sm font-semibold px-4 py-2 rounded-lg transition"
            >
              Çıkış Yap
            </button>
          </div>
        </div>
      </header>

      {/* Tab Navigation */}
      <div className="bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-6 flex gap-1 pt-2">
          <button
            onClick={() => setActiveTab("members")}
            className={`px-6 py-3 font-semibold text-sm rounded-t-lg transition border-b-2 ${
              activeTab === "members"
                ? "border-orange-500 text-orange-600 bg-orange-50"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            Başvurular
            {members.length > 0 && (
              <span className="ml-2 bg-orange-500 text-white text-xs px-2 py-0.5 rounded-full">
                {members.length}
              </span>
            )}
          </button>
          <button
            onClick={() => setActiveTab("photos")}
            className={`px-6 py-3 font-semibold text-sm rounded-t-lg transition border-b-2 ${
              activeTab === "photos"
                ? "border-orange-500 text-orange-600 bg-orange-50"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            Fotoğraf Yönetimi
          </button>
        </div>
      </div>

      {/* İçerik */}
      <main className="max-w-7xl mx-auto px-6 py-8">

        {/* BAŞVURULAR TABÜ */}
        {activeTab === "members" && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-800">
                Bize Katılın Başvuruları
              </h2>
              <button
                onClick={fetchMembers}
                className="text-sm text-orange-600 hover:text-orange-700 font-semibold border border-orange-300 px-3 py-1.5 rounded-lg hover:bg-orange-50 transition"
              >
                Yenile
              </button>
            </div>

            {loadingMembers ? (
              <div className="text-center py-12 text-gray-500">
                Başvurular yükleniyor...
              </div>
            ) : members.length === 0 ? (
              <div className="bg-white rounded-xl shadow-sm p-12 text-center">
                <div className="text-gray-400 text-5xl mb-3">📋</div>
                <p className="text-gray-500 text-lg">Henüz başvuru bulunmuyor.</p>
              </div>
            ) : (
              <div className="grid gap-4">
                {members.map((member) => (
                  <div
                    key={member.id}
                    className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2 flex-wrap">
                          <h3 className="font-bold text-gray-800 text-lg">
                            {member.firstName} {member.lastName}
                          </h3>
                          <span className="bg-orange-100 text-orange-700 text-xs font-semibold px-2 py-0.5 rounded-full">
                            {member.city}
                          </span>
                          <span className="text-gray-400 text-xs">
                            #{member.id}
                          </span>
                        </div>
                        <div className="grid grid-cols-2 gap-x-8 gap-y-1 text-sm text-gray-600 mb-3">
                          <span>📞 {member.phone}</span>
                          <span>✉️ {member.email}</span>
                          <span className="col-span-2 text-gray-400 text-xs">
                            🕐 {formatDate(member.createdAt)}
                          </span>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-3 text-sm text-gray-700">
                          <span className="font-semibold text-gray-500 text-xs uppercase tracking-wide block mb-1">
                            Katılma Sebebi
                          </span>
                          {member.reason}
                        </div>
                      </div>
                      <button
                        onClick={() => handleDelete(member.id)}
                        disabled={deletingId === member.id}
                        className="text-red-400 hover:text-red-600 hover:bg-red-50 p-2 rounded-lg transition disabled:opacity-50 flex-shrink-0"
                        title="Sil"
                      >
                        {deletingId === member.id ? "..." : "🗑️"}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* FOTOĞRAF YÖNETİMİ TABÜ */}
        {activeTab === "photos" && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-800">
                Fotoğraf Yönetimi
              </h2>
              <p className="text-sm text-gray-500">
                Değiştirmek istediğiniz fotoğrafın altındaki butona tıklayın.
              </p>
            </div>

            {loadingImages ? (
              <div className="text-center py-12 text-gray-500">
                Görseller yükleniyor...
              </div>
            ) : (
              <div className="space-y-10">
                {IMAGE_GROUPS.map((group) => (
                  <div key={group.group}>
                    <h3 className="text-lg font-bold text-gray-700 mb-4 flex items-center gap-2">
                      <span className="h-5 w-1 bg-orange-500 rounded-full inline-block" />
                      {group.group}
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                      {group.keys.map((key) => {
                        const img = images[key];
                        const isUploading = uploadingKey === key;
                        return (
                          <div
                            key={key}
                            className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition"
                          >
                            {/* Önizleme */}
                            <div className="relative h-36 bg-gray-100">
                              {img?.path ? (
                                <img
                                  src={img.path}
                                  alt={img.label}
                                  className="w-full h-full object-cover"
                                />
                              ) : (
                                <div className="w-full h-full flex items-center justify-center text-gray-400 text-3xl">
                                  🖼️
                                </div>
                              )}
                              {isUploading && (
                                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                                  <div className="text-white text-sm font-semibold">
                                    Yükleniyor...
                                  </div>
                                </div>
                              )}
                            </div>

                            {/* Alt kısım */}
                            <div className="p-3">
                              <p className="text-xs text-gray-500 truncate mb-2">
                                {img?.label || key}
                              </p>
                              {/* Gizli dosya input */}
                              <input
                                type="file"
                                accept="image/*"
                                ref={(el) => {
                                  if (el) fileInputRefs.current[key] = el;
                                }}
                                className="hidden"
                                onChange={(e) => {
                                  const file = e.target.files?.[0];
                                  if (file) handleUpload(key, file);
                                  e.target.value = "";
                                }}
                              />
                              <button
                                onClick={() =>
                                  fileInputRefs.current[key]?.click()
                                }
                                disabled={isUploading}
                                className="w-full bg-orange-600 hover:bg-orange-500 disabled:bg-orange-300 disabled:cursor-not-allowed text-white text-xs font-semibold py-2 rounded-lg transition"
                              >
                                {isUploading ? "Yükleniyor..." : "Fotoğraf Değiştir"}
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
