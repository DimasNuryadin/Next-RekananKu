"use client"

import InputForm from "@/components/atoms/InputForm";
import { Button } from "@/components/ui/button";
import { createIzinUsaha } from "@/services/izinUsaha";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Cookies from 'js-cookie';
import { jwtDecode } from "jwt-decode";
import { JWTPayloadTypes, UserTypes } from "@/services/data-types";
import { useRouter } from "next/navigation";

export default function CreateIzin() {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    id: ""
  });
  const [jenisIzin, setJenisIzin] = useState("");
  const [noSurat, setNoSurat] = useState("");
  const [berlakuSampai, setBerlakuSampai] = useState("");
  const [instansiPemberi, setInstansiPemberi] = useState("");

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      const jwtToken = atob(token || '');
      const payload: JWTPayloadTypes = jwtDecode(jwtToken);
      const userFromPayload: UserTypes = payload?.player;
      setUser(userFromPayload);
    }
  }, [])

  async function handleCreateIzinUsaha() {
    const data = { user: user.id, jenisIzin, noSurat, berlakuSampai, instansiPemberi }
    const response = await createIzinUsaha(data);
    if (response.error) {
      return toast.error(response?.message);
    } else {
      toast.success('Izin usaha berhasil ditambah')
      router.push('/users/izin-usaha')
    }
  }

  return (
    <div className="p-3 md:p-10">
      <h2 className="text-4xl font-extrabold dark:text-white mb-8">Izin Usaha</h2>
      <div className="mt-8 w-1/2">
        <InputForm onChange={(e) => setJenisIzin(e.target.value)} value={jenisIzin} label="Jenis Izin" id="jenisIzin" required />
        <InputForm onChange={(e) => setNoSurat(e.target.value)} value={noSurat} label="No Surat" id="noSurat" required />
        <InputForm onChange={(e) => setBerlakuSampai(e.target.value)} value={berlakuSampai} label="Berlaku Sampai" id="berlakuSampai" required />
        <InputForm onChange={(e) => setInstansiPemberi(e.target.value)} value={instansiPemberi} label="Instansi Pemberi" id="instansiPemberi" required />
        <Button onClick={handleCreateIzinUsaha} className="mt-4 cursor-pointer">Submit</Button>
      </div>
    </div>
  )
}
