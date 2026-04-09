import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// Herkese açık: Frontend'in mevcut görsel yollarını çektiği endpoint
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const keysParam = searchParams.get('keys');

    if (keysParam) {
      const keys = keysParam.split(',').map((k) => k.trim());
      const images = await prisma.siteImage.findMany({
        where: { key: { in: keys } },
      });
      // key → path şeklinde obje döndür
      const result = {};
      images.forEach((img) => {
        result[img.key] = img.path;
      });
      return NextResponse.json(result, {
        headers: { 'Cache-Control': 'no-store' },
      });
    }

    const images = await prisma.siteImage.findMany({
      orderBy: { key: 'asc' },
    });
    const result = {};
    images.forEach((img) => {
      result[img.key] = img.path;
    });
    return NextResponse.json(result, {
      headers: { 'Cache-Control': 'no-store' },
    });
  } catch (error) {
    console.error('Images API hatası:', error);
    return NextResponse.json({}, { status: 500 });
  }
}
