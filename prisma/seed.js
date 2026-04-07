const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  // Admin kullanıcısı oluştur
  const hashedPassword = await bcrypt.hash('kardeşlerimiçin1.', 10);
  await prisma.adminUser.upsert({
    where: { username: 'kardeshareketiap' },
    update: {},
    create: {
      username: 'kardeshareketiap',
      password: hashedPassword,
    },
  });

  // Varsayılan site görselleri
  const images = [
    { key: 'carousel_1', label: 'Carousel - Slayt 1', path: '/Images/cocukParki.35.06.jpeg' },
    { key: 'carousel_2', label: 'Carousel - Slayt 2', path: '/Images/cocuklarElSalliyor.jpeg' },
    { key: 'carousel_3', label: 'Carousel - Slayt 3', path: '/Images/partiSapkaliCocuklar.jpeg' },
    { key: 'carousel_4', label: 'Carousel - Slayt 4', path: '/Images/koliTasiyanEleman.jpeg' },
    { key: 'home_about', label: 'Ana Sayfa - Hakkımızda Fotoğrafı', path: '/Images/cocuklarElSalliyor.jpeg' },
    { key: 'activity_usume_1', label: 'Üşüme Kardeşim - Fotoğraf 1', path: '/Images/usume1.JPG' },
    { key: 'activity_usume_2', label: 'Üşüme Kardeşim - Fotoğraf 2', path: '/Images/usume2.JPG' },
    { key: 'activity_usume_3', label: 'Üşüme Kardeşim - Fotoğraf 3', path: '/Images/usume3.jpg' },
    { key: 'activity_kirtasiye_1', label: 'Kırtasiye Yardımı - Fotoğraf 1', path: 'https://iili.io/FMLmpxj.jpg' },
    { key: 'activity_kirtasiye_2', label: 'Kırtasiye Yardımı - Fotoğraf 2', path: 'https://iili.io/FMLpfOg.jpg' },
    { key: 'activity_kirtasiye_3', label: 'Kırtasiye Yardımı - Fotoğraf 3', path: 'https://iili.io/FMLmDOu.jpg' },
    { key: 'activity_yardim_kart_1', label: 'Yardım Kartı - Fotoğraf 1', path: 'https://iili.io/FMLpK5F.jpg' },
    { key: 'activity_yardim_kart_2', label: 'Yardım Kartı - Fotoğraf 2', path: 'https://iili.io/FMLpFJ1.jpg' },
    { key: 'activity_yardim_kart_3', label: 'Yardım Kartı - Fotoğraf 3', path: 'https://iili.io/FMLmDOu.jpg' },
    { key: 'activity_senligi_1', label: 'Kardeş Şenliği - Fotoğraf 1', path: 'https://iili.io/FMLpqba.jpg' },
    { key: 'activity_senligi_2', label: 'Kardeş Şenliği - Fotoğraf 2', path: 'https://iili.io/FMLmpxj.jpg' },
    { key: 'activity_senligi_3', label: 'Kardeş Şenliği - Fotoğraf 3', path: 'https://iili.io/FMLpfOg.jpg' },
    { key: 'activity_kurban_1', label: 'Kurban Faaliyetleri - Fotoğraf 1', path: 'https://i.imghippo.com/files/FEX3798xuw.jpeg' },
    { key: 'activity_kurban_2', label: 'Kurban Faaliyetleri - Fotoğraf 2', path: 'https://i.imghippo.com/files/mac6312nE.jpeg' },
    { key: 'activity_kurban_3', label: 'Kurban Faaliyetleri - Fotoğraf 3', path: 'https://i.imghippo.com/files/OsIO2212kJs.jpeg' },
    { key: 'activity_eglence_1', label: 'Eğlenceli Faaliyetler - Fotoğraf 1', path: 'https://i.imghippo.com/files/FEX3798xuw.jpeg' },
    { key: 'activity_eglence_2', label: 'Eğlenceli Faaliyetler - Fotoğraf 2', path: 'https://i.imghippo.com/files/mac6312nE.jpeg' },
    { key: 'activity_eglence_3', label: 'Eğlenceli Faaliyetler - Fotoğraf 3', path: 'https://i.imghippo.com/files/OsIO2212kJs.jpeg' },
    { key: 'board_enis',    label: 'Yönetim Kurulu - Enis Rahman Zencir',   path: 'https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg' },
    { key: 'board_salih',   label: 'Yönetim Kurulu - Salih Şencan',         path: 'https://img.freepik.com/premium-photo/portrait-young-happy-smiling-handsome-man-isolated-white_1258-5418.jpg' },
    { key: 'board_emirhan', label: 'Yönetim Kurulu - Emirhan Kuşaksız',      path: 'https://img.freepik.com/premium-photo/attractive-smiling-young-man-glasses-studio-headshot_656932-6164.jpg' },
    { key: 'board_malik',   label: 'Yönetim Kurulu - Malik Ezber',           path: 'https://img.freepik.com/free-photo/artist-white_1368-3546.jpg' },
    { key: 'board_yahya',   label: 'Yönetim Kurulu - Yahya Arıtuyuk',        path: 'https://img.freepik.com/free-photo/medium-shot-smiley-man-posing_23-2149915892.jpg' },
    { key: 'board_hamza',   label: 'Yönetim Kurulu - Hamza Kabakçılı',       path: 'https://iili.io/F8sL6fn.jpg' },
    { key: 'board_mursel',  label: 'Yönetim Kurulu - Mürsel Ezber',          path: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg' },
    { key: 'board_talha',   label: 'Yönetim Kurulu - Talha Karaalioğlu',     path: 'https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg' },
    { key: 'board_yusuf',   label: 'Yönetim Kurulu - Yusuf Arıtuyuk',        path: 'https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg' },
    { key: 'board_ahmet',   label: 'Yönetim Kurulu - Ahmet Emin Bayrakdar',  path: 'https://img.freepik.com/free-photo/cheerful-curly-business-man-running-modern-office_1163-2523.jpg' },
    { key: 'board_omer',    label: 'Yönetim Kurulu - Ömer Küçükşahin',       path: 'https://img.freepik.com/free-photo/portrait-smiling-blonde-man_23-2148316529.jpg' },
  ];

  for (const image of images) {
    await prisma.siteImage.upsert({
      where: { key: image.key },
      update: {},
      create: image,
    });
  }

  console.log('✅ Seed tamamlandı! Admin kullanıcısı ve görseller oluşturuldu.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
