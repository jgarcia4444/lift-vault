
import { prisma } from '../../../lib/prisma'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const body = await req.json()
  const { title, content, tags, type } = body

  const prompt = await prisma.prompt.create({
    data: {
      title,
      content,
      tags,
      type,
    },
  })

  return NextResponse.json(prompt)
}
