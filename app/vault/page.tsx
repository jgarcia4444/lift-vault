//Vault list page
import {prisma} from '../../lib/prisma';

export default async function VaultPage() {
  const prompts = await prisma.prompt.findMany({
    orderBy: { createdAt: 'desc' },
  })

  return (
    <main className="p-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Lift Vault</h1>
      <div className="space-y-4">
        {prompts.map(prompt => (
          <div key={prompt.id} className="border rounded p-4">
            <h2 className="text-lg font-semibold">{prompt.title}</h2>
            <p className="text-sm text-gray-600 mb-2">{prompt.type}</p>
            <p className="text-gray-800">{prompt.content.slice(0, 120)}...</p>
            <div className="mt-2 flex gap-2 flex-wrap">
              {prompt.tags.map(tag => (
                <span key={tag} className="text-xs bg-gray-200 px-2 py-0.5 rounded">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
