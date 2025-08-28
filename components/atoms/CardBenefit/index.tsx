import { CardBenefitProps } from "@/services/data-types"
import Image from "next/image"

export default function CardBenefit({ title, desc, icon }: Readonly<CardBenefitProps>) {
  return (
    <div>
      <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl px-5 hover:bg-gray-100 mb-4">
        <Image className="object-cover md:h-auto  md:rounded-none" width={60} height={60} src={icon} alt="Form" />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mt-1 mb-1 text-2xl font-bold tracking-tight text-gray-800">{title}</h5>
          <p className="mb-1 font-normal text-gray-700">{desc}</p>
        </div>
      </div>
    </div>
  )
}
