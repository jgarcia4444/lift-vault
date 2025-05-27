export const metadata = {
  title: 'Lift Vault',
  description: 'A platform for managing and sharing AI prompts',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background font-sans antialiased">
        <div className="flex flex-col min-h-screen">
          <header className="border-b">
            <div className="container mx-auto px-4 py-4">
              <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">Lift Vault</h1>
                <nav className="flex space-x-4">
                  <a href="/" className="text-sm font-medium hover:text-primary">Home</a>
                  <a href="/vault/new" className="text-sm font-medium hover:text-primary">Create Prompt</a>
                </nav>
              </div>
            </div>
          </header>
          <main className="flex-grow">
            {children}
          </main>
          <footer className="border-t py-4">
            <div className="container mx-auto px-4">
              <p className="text-sm text-muted-foreground">© 2025 Lift Vault. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
