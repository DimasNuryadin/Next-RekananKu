import Image from "next/image";
import styles from '@/components/molecules/Navbar/navbar.module.css'
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="py-6 px-40 fixed w-full z-10">
      <div className={`bg-gray-300/90 flex items-center justify-between px-6 py-3 shadow ${styles.bgNavbar}`}>
        <Link href="/">
          <Image
            src="/img/logo-text.svg"
            width={130}
            height={100}
            alt="RekananKu"
            className="h-auto"
          />
        </Link>
        <div className="flex items-center gap-9 text-gray-900">
          <Link href="/" className="font-medium hover:text-blue-600">Home</Link>
          <div
            className="inline-block min-h-[2em] w-0.5 self-stretch bg-gray-900 "></div>
          <Link href="/signin" className="font-medium hover:text-blue-600">Sign In</Link>
        </div>
      </div>
    </div>
  )
}
