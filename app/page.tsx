'use client'

import { Button } from '../components/ui/button'

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Welcome to Lift Vault</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Your AI prompt management platform
        </p>
        <div className="space-y-6">
          <Button asChild size="lg">
            <a href="/vault/new">Create Your First Prompt</a>
          </Button>
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Features</h2>
            <div className="space-y-3">
              <p className="text-muted-foreground">
                <span className="font-medium">Prompt Management:</span> Create, edit, and organize your AI prompts
              </p>
              <p className="text-muted-foreground">
                <span className="font-medium">Tag System:</span> Categorize prompts with tags for easy retrieval
              </p>
              <p className="text-muted-foreground">
                <span className="font-medium">Modern UI:</span> Clean and intuitive interface for better productivity
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}