import { useState } from 'react'
import Header from './components/Header'
import Search from './components/Search'
import { request } from './lib/request'
import type { Image } from './types'

function App() {
  const [query, setQuery] = useState<string | null>(null)
  const [images, setImages] = useState<Image[]>([])

  const handleSearch = (query: string) => {
    const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY
    request<Image>(
      `https://api.unsplash.com/photos/random?query=${query}&client_id=${ACCESS_KEY}`,
    ).then(image => setImages([image, ...images]))
  }

  return (
    <div className="min-h-screen bg-slate-100">
      <Header />
      <Search query={query} setQuery={setQuery} onSearch={handleSearch} />

      <div className="mt-6 px-4">
        <pre>{JSON.stringify(images, null, 2)}</pre>
      </div>
    </div>
  )
}

export default App
