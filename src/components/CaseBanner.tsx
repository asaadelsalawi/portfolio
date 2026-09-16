import { Link } from 'react-router-dom'

type Props = {
  to: string
  title: string
  description: string
  image: string
  bgColor?: string
}

export default function CaseBanner({
  to,
  title,
  description,
  image,
  bgColor = 'var(--color-lime-light)',
}: Props) {
  return (
    <div
      className="relative w-full aspect-[1392/696] rounded-[var(--radius-l4)] flex items-end p-6 md:p-[120px] overflow-hidden"
      style={{ backgroundColor: bgColor }}
    >
      <img
        src={image}
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-top"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(255,255,255,0) 35%, rgba(255,255,255,0.65) 100%)',
        }}
      />
      <div className="relative flex flex-col gap-5 max-w-[564px]">
        <p className="text-3xl md:text-[32px] font-semibold text-black">
          {title}
        </p>
        <p className="text-xl leading-7 text-black">{description}</p>
        <Link
          to={to}
          className="inline-flex items-center justify-center px-5 py-4 rounded-full bg-black/80 text-white font-semibold w-fit hover:bg-black transition-colors"
        >
          Read the case study →
        </Link>
      </div>
    </div>
  )
}
