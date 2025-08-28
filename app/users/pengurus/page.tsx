"use client"
import TablePengurus from "@/components/molecules/TablePengurus";
import Link from "next/link";

export default function Pengurus() {
  return (
    <div className="p-3 md:p-10">
      <h2 className="text-4xl font-extrabold dark:text-white mb-8">Pengurus</h2>
      <Link href="/users/pengurus/create" className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center cursor-pointer">Tambah Data</Link>
      <div className="mt-8">
        <TablePengurus />
      </div>
    </div>
  )
}
