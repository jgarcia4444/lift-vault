
import { prisma } from '../../../lib/prisma';

export default async function PromptDetailPage({ params }: { params: { id: string } }) {
  const prompt = await prisma.prompt.findUnique({ where: { id: params.id } })

  if (!prompt) return <div>Prompt not found</div>

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
    </main>
  )
}