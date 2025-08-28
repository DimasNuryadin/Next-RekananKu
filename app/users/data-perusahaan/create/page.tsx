"use client"

import InputForm from "@/components/atoms/InputForm"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react"
import Cookies from 'js-cookie';
import { jwtDecode } from "jwt-decode";
import { JWTPayloadTypes, UserTypes } from "@/services/data-types";
import { toast } from "react-toastify";
import { createDataPerusahaan } from "@/services/dataPerusahaan";

export default function CreateDataPerusahaan() {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    id: ""
  });

  const [namaPerusahaan, setNamaPerusahaan] = useState("");
  const [bidangUsaha, setBidangUsaha] = useState("");
  const [tipe, setTipe] = useState("");
  const [npwp, setNpwp] = useState("");
  const [alamat, setAlamat] = useState("");
  const [kota, setKota] = useState("");
  const [provinsi, setProvinsi] = useState("");
  const [kodePos, setKodePos] = useState("");
  const [telepon, setTelepon] = useState("");
  const [website, setWebsite] = useState("");
  const [kantorCabang, setKantorCabang] = useState("");

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      const jwtToken = atob(token || '');
      const payload: JWTPayloadTypes = jwtDecode(jwtToken);
      const userFromPayload: UserTypes = payload?.player;
      setUser(userFromPayload);
    }

  }, [])

  async function handleCreateDataPerusahaan() {
    const data = { user: user.id, namaPerusahaan, bidangUsaha, tipe, npwp, telepon, website, alamat, kota, provinsi, kodePos, kantorCabang }
    const response = await createDataPerusahaan(data);
    if (response.error) {
      return toast.error(response?.message);
    } else {
      toast.success('Data perusahaan berhasil ditambah')
      router.push('/users/data-perusahaan')
    }
  }

  return (
    <div className="p-3 md:p-10">
      <h2 className="text-4xl font-extrabold">Data Perusahaan</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
        <div>
          <InputForm onChange={(e) => setNamaPerusahaan(e.target.value)} value={namaPerusahaan} label="Nama Perusahaan" id="namaPerusahaan" />
          <InputForm onChange={(e) => setBidangUsaha(e.target.value)} value={bidangUsaha} label="Bidang Usaha" id="bidangUsaha" />
          <InputForm onChange={(e) => setTipe(e.target.value)} value={tipe} label="Tipe Perusahaan" id="tipe" />
          <InputForm onChange={(e) => setNpwp(e.target.value)} value={npwp} label="NPWP" id="npwp" />
          <InputForm onChange={(e) => setTelepon(e.target.value)} value={telepon} label="Telepon" id="telepon" />
          <InputForm onChange={(e) => setWebsite(e.target.value)} value={website} label="Website" id="website" />
        </div>
        <div>
          <InputForm onChange={(e) => setAlamat(e.target.value)} value={alamat} label="Alamat" id="alamat" />
          <InputForm onChange={(e) => setKota(e.target.value)} value={kota} label="Kota" id="kota" />
          <InputForm onChange={(e) => setProvinsi(e.target.value)} value={provinsi} label="Provinsi" id="provinsi" />
          <InputForm onChange={(e) => setKodePos(e.target.value)} value={kodePos} label="Kode Pos" id="kodePos" />
          <InputForm onChange={(e) => setKantorCabang(e.target.value)} value={kantorCabang} label="Kantor Cabang" id="kantorCabang" />
        </div>
      </div>
      <button onClick={handleCreateDataPerusahaan} className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center cursor-pointer ">Edit</button>
    </div>
  )
}
