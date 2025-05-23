

function CopyButton({ content }: { content: string }) {
  const handleCopy = async () => {
    await navigator.clipboard.writeText(content)
    alert('Prompt copied to clipboard!')
  }

  return (
    <button
      onClick={handleCopy}
      className="text-sm bg-gray-800 text-white px-3 py-1 rounded hover:bg-gray-900"
    >
      Copy
    </button>
  )
}

export default CopyButton;