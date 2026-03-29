import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(request) {
  try {
    const body = await request.json();
    const { firstName, lastName, phone, email, city, reason } = body;

    if (!firstName || !lastName || !phone || !email || !city || !reason) {
      return NextResponse.json(
        { error: 'Tüm alanlar zorunludur.' },
        { status: 400 }
      );
    }

    const member = await prisma.memberApplication.create({
      data: { firstName, lastName, phone, email, city, reason },
    });

    return NextResponse.json({ success: true, id: member.id });
  } catch (error) {
    console.error('Join API hatası:', error);
    return NextResponse.json({ error: 'Sunucu hatası.' }, { status: 500 });
  }
}
