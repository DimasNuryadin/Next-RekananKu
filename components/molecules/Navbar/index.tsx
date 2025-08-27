import Image from "next/image";
import styles from '@/components/molecules/Navbar/navbar.module.css'
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="py-6 px-40 fixed w-full z-10">
      <div className={`bg-white/80 flex items-center justify-between px-6 py-3 shadow ${styles.bgNavbar}`}>
        <Link href="/">
          <Image
            src="/img/logo-text.svg"
            width={130}
            height={100}
            alt="RekananKu"
            className="h-auto"
          />
        </Link>

        <div className="flex items-center gap-6">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <Link href="/signin" className="hover:text-blue-600">Sign In</Link>
        </div>
      </div>
    </div>
  )
}
