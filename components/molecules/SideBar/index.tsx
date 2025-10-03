import ListSidebar from "@/components/atoms/ListSidebar"
import Image from "next/image"
import { useEffect, useState } from "react"
import Cookies from 'js-cookie';
import { jwtDecode } from "jwt-decode";
import { JWTPayloadTypes, UserTypes } from "@/services/data-types";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SideBar() {
  const router = useRouter()
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState({
    email: "",
    id: ""
  });

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      const jwtToken = atob(token || '');
      const payload: JWTPayloadTypes = jwtDecode(jwtToken);
      const userFromPayload: UserTypes = payload?.player;
      setUser(userFromPayload);
    }
  }, [])

  function handleLogout() {
    Cookies.remove('token');
    router.push('/signin');
  }

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
        <span className="sr-only">Open sidebar</span>
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
        </svg>
      </button>

      <aside id="logo-sidebar" className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform bg-gray-50 ${open ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0`} aria-label="Sidebar">
        <div className="flex justify-end sm:hidden">
          <button className="flex items-end p-6 text-gray-900" onClick={() => setOpen(false)}>
            X
          </button>
        </div>
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 flex flex-col justify-between">
          <div>
            <Link href="/users" className="flex justify-center items-center ps-2.5 mt-6 mb-16">
              <Image
                src="/img/logo-text.svg"
                alt="Logo"
                width={160}
                height={100}
                sizes="(max-width: 768px) 100vw, 160px"
              />
            </Link>
            <ul className="space-y-2 font-medium">
              <ListSidebar label="Data Perusahaan" link="/users/data-perusahaan" />
              <ListSidebar label="Izin Usaha" link="/users/izin-usaha" />
              <ListSidebar label="Pemilik" link="/users/pemilik" />
              <ListSidebar label="Pengurus" link="/users/pengurus" />
              <ListSidebar label="Tenaga Ahli" link="/users/tenaga-ahli" />
              <ListSidebar label="Ajukan Rekanan" link="/users/ajukan-rekanan" />
            </ul>
          </div>
          <div>
            <p className="text-m text-gray-900 text-center">Selamat datang</p>
            <p className="text-xs text-gray-900 text-center mt-1">{user.email}</p>
            <Button onClick={handleLogout} className="flex items-center mt-3 p-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 group justify-center w-full text-center cursor-pointer">
              <span>Logout</span>
            </Button>
          </div>
        </div>
      </aside>
      <div className="sm:ml-64">
      </div>
    </div>
  )
}
