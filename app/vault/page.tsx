//Vault list page
import {prisma} from '../../lib/prisma';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';

export default async function VaultPage() {
  const prompts = await prisma.prompt.findMany({
    orderBy: { createdAt: 'desc' },
  })

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <Card className="card">
          <CardHeader className="card-header">
            <CardTitle className="card-title">Lift Vault</CardTitle>
            <CardDescription className="card-description">
              Your collection of prompts and notes
            </CardDescription>
          </CardHeader>
          <CardContent className="card-content">
            <div className="space-y-4">
              {prompts.map(prompt => (
                <Card key={prompt.id} className="card">
                  <CardHeader className="card-header">
                    <CardTitle className="card-title">{prompt.title}</CardTitle>
                    <CardDescription className="card-description">
                      <span className="text-sm text-gray-600">{prompt.type}</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="card-content">
                    <p className="text-gray-800 line-clamp-3">
                      {prompt.content}
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {prompt.tags.map(tag => (
                        <span 
                          key={tag} 
                          className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
