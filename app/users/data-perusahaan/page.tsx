"use client"

import InputForm from "@/components/atoms/InputForm"

export default function DataPerusahaan() {
  return (
    <div className="p-3 md:p-10">
      <h2 className="text-4xl font-extrabold">Data Perusahaan</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
        <div>
          <InputForm label="Nama Perusahaan" id="namaPerusahaan" />
          <InputForm label="Bidang Usaha" id="bidangUsaha" />
          <InputForm label="Tipe Perusahaan" id="tipe" />
          <InputForm label="NPWP" id="npwp" />
          <InputForm label="Telepon" id="telepon" />
          <InputForm label="Website" id="website" />
        </div>
        <div>
          <InputForm label="Alamat" id="alamat" />
          <InputForm label="Kota" id="kota" />
          <InputForm label="Provinsi" id="provinsi" />
          <InputForm label="Kode Pos" id="kodePos" />
          <InputForm label="Kantor Cabang" id="kantorCabang" />
        </div>
      </div>
      <button type="submit" className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center cursor-pointer ">Edit</button>
    </div>
  )
}
