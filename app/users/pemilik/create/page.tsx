"use client"

import InputForm from "@/components/atoms/InputForm";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Cookies from 'js-cookie';
import { jwtDecode } from "jwt-decode";
import { JWTPayloadTypes, UserTypes } from "@/services/data-types";
import { useRouter } from "next/navigation";
import { createPemilik } from "@/services/pemilik";

export default function CreatePemilik() {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    id: ""
  });
  const [nama, setNama] = useState("");
  const [ktp, setKtp] = useState("");
  const [alamat, setAlamat] = useState("");
  const [saham, setSaham] = useState("");

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      const jwtToken = atob(token || '');
      const payload: JWTPayloadTypes = jwtDecode(jwtToken);
      const userFromPayload: UserTypes = payload?.player;
      setUser(userFromPayload);
    }
  }, [])

  async function handleCreatePemilik() {
    const data = { user: user.id, nama, ktp, alamat, saham }
    const response = await createPemilik(data);
    if (response.error) {
      toast.error(response?.message.message);
    } else {
      toast.success('Pemilik berhasil ditambah')
      router.push('/users/pemilik')
    }
  }

  return (
    <div className="p-3 md:p-10">
      <h2 className="text-4xl font-extrabold dark:text-white mb-8">Pemilik</h2>
      <div className="mt-8 w-1/2">
        <InputForm onChange={(e) => setNama(e.target.value)} value={nama} label="Nama" id="nama" required />
        <InputForm onChange={(e) => setKtp(e.target.value)} value={ktp} label="KTP" id="ktp" required />
        <InputForm onChange={(e) => setAlamat(e.target.value)} value={alamat} label="Alamat" id="alamat" required />
        <InputForm onChange={(e) => setSaham(e.target.value)} value={saham} label="Saham (%)" id="saham" required />
        <Button onClick={handleCreatePemilik} className="mt-4 cursor-pointer">Submit</Button>
      </div>
    </div>
  )
}
