"use client"

import InputForm from "@/components/atoms/InputForm"
import { useEffect, useState } from "react"
import Cookies from 'js-cookie';
import { jwtDecode } from "jwt-decode";
import { JWTPayloadTypes, UserTypes } from "@/services/data-types";
import { getDataPerusahaan } from "@/services/dataPerusahaan";

export default function DataPerusahaan() {
  const [user, setUser] = useState({
    email: "",
    id: ""
  });
  const [dataPerusahaan, setDataPerusahaan] = useState({})

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      const jwtToken = atob(token || '');
      const payload: JWTPayloadTypes = jwtDecode(jwtToken);
      const userFromPayload: UserTypes = payload?.player;
      setUser(userFromPayload);
      fetchDataPerusahaan()
    }
  }, [])

  async function fetchDataPerusahaan() {
    const response = await getDataPerusahaan(user.id);
    setDataPerusahaan(response.data[0])
  }

  return (
    <div className="p-3 md:p-10">
      <h2 className="text-4xl font-extrabold">Data Perusahaan</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
        <div>
          <InputForm placeholder={dataPerusahaan.namaPerusahaan} label="Nama Perusahaan" id="namaPerusahaan" />
          <InputForm placeholder={dataPerusahaan.bidangUsaha} label="Bidang Usaha" id="bidangUsaha" />
          <InputForm placeholder={dataPerusahaan.tipe} label="Tipe Perusahaan" id="tipe" />
          <InputForm placeholder={dataPerusahaan.npwp} label="NPWP" id="npwp" />
          <InputForm placeholder={dataPerusahaan.telepon} label="Telepon" id="telepon" />
          <InputForm placeholder={dataPerusahaan.website} label="Website" id="website" />
        </div>
        <div>
          <InputForm placeholder={dataPerusahaan.alamat} label="Alamat" id="alamat" />
          <InputForm placeholder={dataPerusahaan.kota} label="Kota" id="kota" />
          <InputForm placeholder={dataPerusahaan.provinsi} label="Provinsi" id="provinsi" />
          <InputForm placeholder={dataPerusahaan.kodePos} label="Kode Pos" id="kodePos" />
          <InputForm placeholder={dataPerusahaan.kantorCabang} label="Kantor Cabang" id="kantorCabang" />
        </div>
      </div>
      {/* <button onClick={handleCreateDataPerusahaan} className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center cursor-pointer ">Edit</button> */}
    </div>
  )
}
