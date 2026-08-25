import { Badge } from "@/components/ui/Badge"

interface PublicationCardProps {
  title: string
  authors: string
  journal: string
  year: string
  volume?: string
  pages?: string
  doi?: string
}

export function PublicationCard({ title, authors, journal, year, volume, pages, doi }: PublicationCardProps) {
  const hasDoi = Boolean(doi && doi.trim() !== "");

  return (
    <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex flex-row items-start justify-between gap-4 mb-4">
        <div className="flex-1">
          <h3 className="font-heading text-lg font-bold text-slate-900 mb-2 leading-tight">
            {title}
          </h3>
          <p className="text-slate-600 text-sm">{authors}</p>
        </div>
        <Badge className="shrink-0">{year}</Badge>
      </div>
      
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <p className="text-sm font-bold text-primary">
            {journal}
          </p>
          {(volume || pages) && (
            <p className="text-slate-500 text-xs mt-1">
              {volume && <span>Vol. {volume}</span>}
              {volume && pages && <span>, </span>}
              {pages && <span>Pages: {pages}</span>}
            </p>
          )}
        </div>
        {hasDoi && (
          <a
            href={`https://doi.org/${doi}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-primary text-white hover:bg-primary-hover shadow-sm h-9 px-3 w-full sm:w-auto rounded-full shrink-0 cursor-pointer"
          >
            View DOI
          </a>
        )}
      </div>
    </div>
  )
}
