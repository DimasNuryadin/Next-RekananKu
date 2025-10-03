"use client"

import InputForm from "@/components/atoms/InputForm"
import { useCallback, useEffect, useState } from "react"
import Cookies from 'js-cookie';
import { jwtDecode } from "jwt-decode";
import { JWTPayloadTypes, UserTypes } from "@/services/data-types";
import { getDataPerusahaan } from "@/services/dataPerusahaan";
import Link from "next/link";

export default function DataPerusahaan() {
  const [user, setUser] = useState({
    email: "",
    id: ""
  });
  const [dataPerusahaan, setDataPerusahaan] = useState({
    namaPerusahaan: '',
    bidangUsaha: '',
    tipe: '',
    npwp: '',
    telepon: '',
    website: '',
    alamat: '',
    kota: '',
    provinsi: '',
    kodePos: '',
    kantorCabang: '',
  })

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      const jwtToken = atob(token || '');
      const payload: JWTPayloadTypes = jwtDecode(jwtToken);
      const userFromPayload: UserTypes = payload?.player;
      setUser(userFromPayload);
    }
  }, []);

  const fetchDataPerusahaan = useCallback(async () => {
    if (user.id) {
      const response = await getDataPerusahaan();
      setDataPerusahaan(response.data)
    }
  }, [user.id])

  useEffect(() => {
    fetchDataPerusahaan();
  }, [user.id])

  return (
    <div className="p-3 md:p-10">
      <h2 className="text-4xl font-extrabold">Data Perusahaan</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
        <div>
          <InputForm disabled placeholder={dataPerusahaan.namaPerusahaan} label="Nama Perusahaan" id="namaPerusahaan" />
          <InputForm disabled placeholder={dataPerusahaan.bidangUsaha} label="Bidang Usaha" id="bidangUsaha" />
          <InputForm disabled placeholder={dataPerusahaan.tipe} label="Tipe Perusahaan" id="tipe" />
          <InputForm disabled placeholder={dataPerusahaan.npwp} label="NPWP" id="npwp" />
          <InputForm disabled placeholder={dataPerusahaan.telepon} label="Telepon" id="telepon" />
          <InputForm disabled placeholder={dataPerusahaan.website} label="Website" id="website" />
        </div>
        <div>
          <InputForm disabled placeholder={dataPerusahaan.alamat} label="Alamat" id="alamat" />
          <InputForm disabled placeholder={dataPerusahaan.kota} label="Kota" id="kota" />
          <InputForm disabled placeholder={dataPerusahaan.provinsi} label="Provinsi" id="provinsi" />
          <InputForm disabled placeholder={dataPerusahaan.kodePos} label="Kode Pos" id="kodePos" />
          <InputForm disabled placeholder={dataPerusahaan.kantorCabang} label="Kantor Cabang" id="kantorCabang" />
        </div>
      </div>
      <Link href={`/users/data-perusahaan/edit`} className="flex justify-end">
        <button className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center cursor-pointer ">Edit</button>
      </Link>
    </div>
  )
}
