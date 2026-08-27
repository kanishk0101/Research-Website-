import Link from "next/link"
import { Badge } from "@/components/ui/Badge"
import { Calendar } from "lucide-react"

interface NewsCardProps {
  title: string
  date: string
  category: string
  summary: string
  imageUrl?: string
  isFeatured?: boolean
  link?: string
}

export function NewsCard({ title, date, category, summary, imageUrl, isFeatured = false, link }: NewsCardProps) {
  if (isFeatured) {
    return (
      <div className="group bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row">
        <div className="md:w-1/2 h-64 md:h-auto bg-slate-100 relative overflow-hidden flex items-center justify-center">
          {imageUrl ? (
            <img src={imageUrl} alt={title} className="w-full h-full object-contain p-4 bg-white group-hover:scale-105 transition-transform duration-500" />
          ) : (
            <span className="text-slate-400 font-medium">[FEATURED_IMAGE]</span>
          )}
        </div>
        <div className="p-8 md:w-1/2 flex flex-col justify-center">
          <div className="flex items-center space-x-4 mb-4">
            <Badge>{category}</Badge>
            <div className="flex items-center text-sm text-slate-500">
              <Calendar className="w-4 h-4 mr-2" />
              {date}
            </div>
          </div>
          <h2 className="font-heading text-2xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors">
            {link ? <Link href={link}>{title}</Link> : <span>{title}</span>}
          </h2>
          <p className="text-slate-600 leading-relaxed mb-6">{summary}</p>
          {link && (
            <Link href={link} className="text-primary font-semibold hover:underline inline-flex items-center">
              Read Full Article &rarr;
            </Link>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="group bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col">
      <div className="h-48 bg-slate-100 relative overflow-hidden flex items-center justify-center">
        {imageUrl ? (
          <img src={imageUrl} alt={title} className="w-full h-full object-contain p-4 bg-white group-hover:scale-105 transition-transform duration-500" />
        ) : (
          <span className="text-slate-400 font-medium">[IMAGE]</span>
        )}
      </div>
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center justify-between mb-4">
          <Badge>{category}</Badge>
          <div className="flex items-center text-xs text-slate-500">
            <Calendar className="w-3 h-3 mr-1" />
            {date}
          </div>
        </div>
        <h3 className="font-heading text-lg font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors line-clamp-2">
          {link ? <Link href={link}>{title}</Link> : <span>{title}</span>}
        </h3>
        <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3 flex-1">{summary}</p>
        {link && (
          <Link href={link} className="text-primary text-sm font-semibold hover:underline inline-flex items-center mt-auto">
            Read More &rarr;
          </Link>
        )}
      </div>
    </div>
  )
}
