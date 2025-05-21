'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function NewPromptPage() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [tags, setTags] = useState('')
  const [type, setType] = useState('PROMPT')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const res = await fetch('/api/prompts', {
      method: 'POST',
      body: JSON.stringify({
        title,
        content,
        tags: tags.split(',').map((tag: string) => tag.trim()),
        type,
      }),
    })

    if (res.ok) {
      router.push('/vault')
    }
  }

  return (
    <main className="p-8 max-w-xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">New Prompt</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={e => setContent(e.target.value)}
          className="w-full p-2 border rounded h-40"
          required
        />
        <input
          type="text"
          placeholder="Tags (comma separated)"
          value={tags}
          onChange={e => setTags(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <select value={type} onChange={e => setType(e.target.value)} className="w-full p-2 border rounded">
          <option value="PROMPT">Prompt</option>
          <option value="NOTE">Note</option>
          <option value="GUIDE">Guide</option>
        </select>
        <button type="submit" className="bg-black text-white py-2 px-4 rounded">
          Save Prompt
        </button>
      </form>
    </main>
  )
}
