import logo from '../assets/split-logo.svg'

export default function Brand({ compact = false }) {
  if (compact) return <img className="size-9 object-contain" src={logo} alt="Split" />

  return <div className="flex w-fit flex-col items-center" aria-label="Split home"><img className="size-[58px] object-contain" src={logo} alt="" /><span className="-mt-0.5 text-[19px] font-medium tracking-[.015em] text-[#e8444d]">Split</span></div>
}
