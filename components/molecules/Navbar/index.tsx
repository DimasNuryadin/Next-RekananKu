import Image from "next/image";
import styles from '@/components/molecules/Navbar/navbar.module.css'
import Link from "next/link";

export default function Navbar() {
  return (
    <div className={`bg-white flex ${styles.bgNavbar}`}>
      <Link href="/">
        <Image src="/img/logo-text.svg" width={130} height={100} alt="RekananKu" className="m-4" />
      </Link>
      <Link href="/signin" className="px-4 py-2">Home</Link>
    </div>
  )
}
