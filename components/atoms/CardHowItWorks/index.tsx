import Image from "next/image";

export default function HowItWorks({ title, icon }: { title: string, icon: string }) {
  return (
    <div className="block max-w-sm px-7 pt-7 pb-14 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100">
      <Image src={icon} width={60} height={60} alt="title" />
      <h5 className="text-xl font-bold tracking-tight text-gray-800 mt-4">{title}</h5>
    </div>
  )
}
