import clsx from 'clsx'

type Props = {
  title: string
  description: string
  image: string
  onClick: () => void
  saved?: boolean
}

export default function ImageCard({
  title,
  description,
  image,
  onClick,
  saved,
}: Props) {
  return (
    <div className="flex w-full flex-col rounded-lg bg-white p-4 shadow-lg">
      <img
        src={image}
        alt={title}
        className="aspect-video w-full bg-gray-200"
      />
      <h1 className="mt-2 text-xl font-bold text-slate-700">{title}</h1>
      <p className="mb-4 text-sm text-slate-600">{description}</p>
      <button
        onClick={onClick}
        className={clsx(
          'rounded-sm py-3 text-sm font-medium text-white',
          saved ? 'bg-red-500' : 'bg-slate-900',
        )}
      >
        {saved ? 'Remove' : 'Save'}
      </button>
    </div>
  )
}
