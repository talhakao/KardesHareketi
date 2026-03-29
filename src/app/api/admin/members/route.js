import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import prisma from '@/lib/prisma';

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: 'Yetkisiz erişim.' }, { status: 401 });
  }

  const members = await prisma.memberApplication.findMany({
    orderBy: { createdAt: 'desc' },
  });

  return NextResponse.json(members);
}

export async function DELETE(request) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: 'Yetkisiz erişim.' }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  if (!id) {
    return NextResponse.json({ error: 'ID gerekli.' }, { status: 400 });
  }

  await prisma.memberApplication.delete({ where: { id: parseInt(id) } });
  return NextResponse.json({ success: true });
}
