import { type SyntheticEvent } from 'react'

type Props = {
  onSearch: (query: string) => void
  query: string | null
  setQuery: (query: string | null) => void
}

export default function Search({ query, setQuery, onSearch }: Props) {
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault()
    if (query && query.length > 1) {
      onSearch(query)
      setQuery(null)
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col items-center justify-center px-4 pt-8">
          <div className="flex w-full max-w-xl flex-col items-center gap-3 xs:flex-row">
            <input
              className="w-full rounded-md bg-white px-3 py-4 outline-none ring-slate-400 ring-offset-2 ring-offset-slate-100 focus:ring-2"
              type="search"
              placeholder="Search for new images..."
              value={query || ''}
              onChange={e => setQuery(e.target.value)}
            />
            <button
              className="w-full rounded-md bg-slate-900 px-6 py-4 font-medium text-white outline-none ring-slate-400 ring-offset-2 ring-offset-slate-100 focus:ring-2 xs:w-auto"
              type="submit"
            >
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
