export default function PullQuote({ children }: { children: string }) {
  return (
    <p className="font-semibold text-2xl md:text-[32px] leading-normal text-black w-full">
      {children}
    </p>
  )
}
