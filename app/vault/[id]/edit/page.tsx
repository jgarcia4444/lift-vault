'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '../../../../components/ui/button'
import { Input } from '../../../../components/ui/input'
import { Label } from '../../../../components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../../../components/ui/select'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../../components/ui/card'
import { Textarea } from '../../../../components/ui/textarea'
import { Alert, AlertDescription } from '../../../../components/ui/alert'

export default function EditPromptPage({ params }: { params: { id: string } }) {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [tags, setTags] = useState('')
  const [type, setType] = useState('PROMPT')
  const [error, setError] = useState('')
  const router = useRouter()

  const fetchPrompt = async () => {
    try {
      const res = await fetch(`/api/prompts/${params.id}`)
      if (!res.ok) throw new Error('Failed to fetch prompt')
      const data = await res.json()
      setTitle(data.title)
      setContent(data.content)
      setTags(data.tags.join(', '))
      setType(data.type)
    } catch (err) {
      setError('Failed to load prompt. Please try again.')
    }
  }

  useEffect(() => {
    fetchPrompt()
  }, [params.id])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    try {
      const res = await fetch(`/api/prompts/${params.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          content,
          tags: tags.split(',').map(tag => tag.trim()),
          type,
        }),
      })

      if (!res.ok) throw new Error('Failed to update prompt')
      
      router.push(`/vault/${params.id}`)
    } catch (err) {
      setError('Failed to update prompt. Please try again.')
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <Card className="card">
          <CardHeader className="card-header">
            <CardTitle className="card-title">Edit Prompt</CardTitle>
            <CardDescription className="card-description">
              Update your prompt details below
            </CardDescription>
          </CardHeader>
          <CardContent className="card-content">
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <Alert variant="destructive">
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}
              <div className="space-y-4">
                <div className="flex flex-col gap-2">
                  <Label className="text-sm font-medium text-gray-700" htmlFor="title">
                    Title
                  </Label>
                  <Input
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter prompt title"
                    className="form-input"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label className="text-sm font-medium text-gray-700" htmlFor="content">
                    Content
                  </Label>
                  <Textarea
                    id="content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Enter prompt content..."
                    className="form-textarea"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label className="text-sm font-medium text-gray-700" htmlFor="tags">
                    Tags
                  </Label>
                  <Input
                    id="tags"
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                    placeholder="Enter tags separated by commas"
                    className="form-input"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label className="text-sm font-medium text-gray-700" htmlFor="type">
                    Type
                  </Label>
                  <Select
                    value={type}
                    onValueChange={(value) => setType(value)}
                  >
                    <SelectTrigger className="form-input">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="PROMPT">Prompt</SelectItem>
                      <SelectItem value="NOTE">Note</SelectItem>
                      <SelectItem value="GUIDE">Guide</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="flex justify-end">
                <Button type="submit" className="primary-button">
                  Save Changes
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
