import { prisma } from '../../../lib/prisma'
import { NextResponse } from 'next/server'

function extractVariables(content: string): string[] {
  const matches = content.match(/{{(.*?)}}/g)
  return matches ? [...new Set(matches.map(v => v.slice(2, -2).trim()))] : []
}

export async function POST(req: Request) {
  const body = await req.json()
  const { title, content, tags, type,  } = body

  const variables = extractVariables(content)

  const prompt = await prisma.prompt.create({
    data: {
      title,
      content,
      tags,
      type,
      variables,
    },
  })

  return NextResponse.json(prompt)
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const body = await req.json()
  const { title, content, tags, type } = body

  const variables = extractVariables(content)

  const prompt = await prisma.prompt.update({
    where: { id: params.id },
    data: {
      title,
      content,
      tags,
      type,
      variables,
      updatedAt: new Date(),
    },
  })

  return NextResponse.json(prompt)
}
