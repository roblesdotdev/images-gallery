import { useState } from 'react'
import Header from './components/Header'
import Search from './components/Search'
import { request } from './lib/request'
import type { Image } from './types'
import ImageCard from './components/ImageCard'

function App() {
  const [query, setQuery] = useState<string | null>(null)
  const [images, setImages] = useState<Image[]>([])

  const handleDelete = (id: string) => {
    setImages(images.filter(img => img.id !== id))
  }

  const handleSearch = (query: string) => {
    const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY
    request<Image>(
      `https://api.unsplash.com/photos/random?query=${query}&client_id=${ACCESS_KEY}`,
    )
      .then(image => setImages([{ ...image, title: query }, ...images]))
      .catch(err => console.log(err))
  }

  return (
    <div className="min-h-screen bg-slate-100">
      <Header />
      <Search query={query} setQuery={setQuery} onSearch={handleSearch} />

      <div className="mx-auto mt-8 max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-4 xs:grid-cols-2 md:grid-cols-3">
          {images.map(img => (
            <ImageCard
              key={img.id}
              title={img.title}
              description={img.alt_description}
              image={img.urls.small}
              onClick={() => handleDelete(img.id)}
              saved={true}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
