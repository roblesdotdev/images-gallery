import { useState } from 'react'
import Header from './components/Header'
import Search from './components/Search'

function App() {
  const [query, setQuery] = useState<string | null>(null)

  const handleSearch = (query: string) => {
    console.log(query)
  }

  return (
    <div className="min-h-screen bg-slate-100">
      <Header />
      <Search query={query} setQuery={setQuery} onSearch={handleSearch} />

      <div className="mt-6 px-4">
        <p>Search results</p>
      </div>
    </div>
  )
}

export default App
