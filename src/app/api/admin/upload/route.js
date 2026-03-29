import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import prisma from '@/lib/prisma';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';

export async function POST(request) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: 'Yetkisiz erişim.' }, { status: 401 });
  }

  try {
    const formData = await request.formData();
    const file = formData.get('file');
    const imageKey = formData.get('key');

    if (!file || !imageKey) {
      return NextResponse.json(
        { error: 'Dosya ve anahtar gerekli.' },
        { status: 400 }
      );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Dosya uzantısını al
    const ext = file.name.split('.').pop().toLowerCase();
    const allowedExt = ['jpg', 'jpeg', 'png', 'webp', 'gif'];
    if (!allowedExt.includes(ext)) {
      return NextResponse.json(
        { error: 'Sadece JPG, PNG, WebP ve GIF dosyaları yüklenebilir.' },
        { status: 400 }
      );
    }

    // Kaydetme dizinini hazırla
    const uploadDir = path.join(process.cwd(), 'public', 'uploads');
    await mkdir(uploadDir, { recursive: true });

    // Benzersiz dosya adı oluştur
    const filename = `${imageKey}-${Date.now()}.${ext}`;
    const filepath = path.join(uploadDir, filename);

    await writeFile(filepath, buffer);

    const imagePath = `/uploads/${filename}`;

    // Veritabanını güncelle
    await prisma.siteImage.update({
      where: { key: imageKey },
      data: { path: imagePath },
    });

    return NextResponse.json({ success: true, path: imagePath });
  } catch (error) {
    console.error('Upload hatası:', error);
    return NextResponse.json({ error: 'Yükleme başarısız.' }, { status: 500 });
  }
}
