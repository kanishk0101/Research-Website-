import * as React from "react"

interface MemberCardProps {
  name: string
  role: React.ReactNode
  bio?: React.ReactNode
  imageUrl?: string
  isPI?: boolean
}

export function MemberCard({ name, role, bio, imageUrl, isPI = false }: MemberCardProps) {
  if (isPI) {
    return (
      <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-start">
        <div className="w-full sm:w-2/3 md:w-1/3 shrink-0 bg-slate-100 aspect-[4/5] flex items-center justify-center md:rounded-br-3xl overflow-hidden mx-auto md:mx-0">
          {imageUrl ? (
            <img src={imageUrl} alt={name} className="w-full h-full object-cover object-[50%_20%]" />
          ) : (
            <span className="text-slate-400 font-medium">[PHOTO_PLACEHOLDER]</span>
          )}
        </div>
        <div className="p-8 md:w-2/3 flex flex-col">
          <h2 className="font-heading text-3xl font-bold text-slate-900 mb-2">{name}</h2>
          <p className="text-slate-900 font-semibold mb-6">{role}</p>
          {bio && <div className="text-slate-600 leading-relaxed whitespace-pre-wrap">{bio}</div>}
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm flex flex-col h-full">
      <div className="pt-8 pb-2 flex justify-center bg-white border-b border-slate-100/50">
        <div className="w-32 aspect-[3/4] rounded-2xl overflow-hidden shadow-sm bg-slate-100 flex items-center justify-center shrink-0">
          {imageUrl ? (
            <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
          ) : (
            <span className="text-slate-400 text-xs font-medium">[PHOTO]</span>
          )}
        </div>
      </div>
      <div className="p-6 text-center">
        <h3 className="font-heading text-lg font-bold text-slate-900 mb-1">{name}</h3>
        <p className="text-primary text-sm font-medium mb-4">{role}</p>
        {bio && <div className="text-slate-600 text-sm leading-relaxed whitespace-pre-wrap">{bio}</div>}
      </div>
    </div>
  )
}
