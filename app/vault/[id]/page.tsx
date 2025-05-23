import { prisma } from '../../../lib/prisma';
import Link from 'next/link'
import { notFound } from 'next/navigation'

import CopyButton from '../components/CopyButton';

export default async function PromptDetailPage({ params }: { params: { id: string } }) {
  const prompt = await prisma.prompt.findUnique({ where: { id: params.id } })

  if (!prompt) return notFound()

  return (
    <main className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-2">{prompt.title}</h1>
      <p className="text-sm text-gray-600 mb-4">{prompt.type}</p>

      <pre className="bg-gray-100 p-4 rounded text-sm whitespace-pre-wrap">{prompt.content}</pre>

      <div className="mt-4 flex gap-2 flex-wrap">
        {prompt.tags.map(tag => (
          <span key={tag} className="text-xs bg-gray-200 px-2 py-0.5 rounded">{tag}</span>
        ))}
      </div>

      <div className="mt-6 flex gap-4">
        <CopyButton content={prompt.content} />
        <Link href={`/vault/${prompt.id}/edit`} className="text-sm bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
          Edit
        </Link>
        <button
          onClick={() => console.log('Enhance with AI stub')}
          className="text-sm bg-purple-600 text-white px-3 py-1 rounded hover:bg-purple-700"
        >
          Enhance with AI
        </button>
      </div>
    </main>
  )
}


