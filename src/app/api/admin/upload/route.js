import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import prisma from '@/lib/prisma';
import { put } from '@vercel/blob';

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
      return NextResponse.json({ error: 'Dosya ve anahtar gerekli.' }, { status: 400 });
    }

    const ext = file.name.split('.').pop().toLowerCase();
    const allowedExt = ['jpg', 'jpeg', 'png', 'webp', 'gif'];
    if (!allowedExt.includes(ext)) {
      return NextResponse.json(
        { error: 'Sadece JPG, PNG, WebP ve GIF dosyaları yüklenebilir.' },
        { status: 400 }
      );
    }

    const filename = `site-images/${imageKey}-${Date.now()}.${ext}`;
    const blob = await put(filename, file, { access: 'public' });

    await prisma.siteImage.upsert({
      where: { key: imageKey },
      update: { path: blob.url },
      create: { key: imageKey, label: imageKey, path: blob.url },
    });

    return NextResponse.json({ success: true, path: blob.url });
  } catch (error) {
    console.error('Upload hatası:', error);
    return NextResponse.json({ error: 'Yükleme başarısız.' }, { status: 500 });
  }
}
