"use client"

import InputForm from "@/components/atoms/InputForm";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Cookies from 'js-cookie';
import { jwtDecode } from "jwt-decode";
import { JWTPayloadTypes, UserTypes } from "@/services/data-types";
import { useRouter } from "next/navigation";
import { createPengurus } from "@/services/pengurus";
import InputDateForm from "@/components/atoms/InputDateForm";

export default function CreatePengurus() {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    id: ""
  });
  const [nama, setNama] = useState("");
  const [ktp, setKtp] = useState("");
  const [alamat, setAlamat] = useState("");
  const [jabatan, setJabatan] = useState("");
  const [tanggalMulai, setTanggalMulai] = useState<Date>();
  const [tanggalSelesai, setTanggalSelesai] = useState<Date>();

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      const jwtToken = atob(token || '');
      const payload: JWTPayloadTypes = jwtDecode(jwtToken);
      const userFromPayload: UserTypes = payload?.player;
      setUser(userFromPayload);
    }
  }, [])

  async function handleCreatePengurus() {
    if (nama && ktp && alamat && jabatan && tanggalMulai && tanggalSelesai) {
      const data = { user: user.id, nama, ktp, alamat, jabatan, tanggalMulai, tanggalSelesai }
      const response = await createPengurus(data);
      if (response.error) {
        toast.error(response?.message.errorResponse.errmsg);
      } else {
        toast.success('Pengurus berhasil ditambah')
        router.push('/users/pengurus')
      }
    } else {
      toast.error('Masukan semua data!')
    }
  }

  return (
    <div className="p-3 md:p-10">
      <h2 className="text-4xl font-extrabold dark:text-white mb-8">Pengurus</h2>
      <div className="mt-8 w-1/2">
        <InputForm onChange={(e) => setNama(e.target.value)} value={nama} label="Nama" id="nama" required />
        <InputForm onChange={(e) => setKtp(e.target.value)} value={ktp} label="KTP" id="ktp" required />
        <InputForm onChange={(e) => setAlamat(e.target.value)} value={alamat} label="Alamat" id="alamat" required />
        <InputForm onChange={(e) => setJabatan(e.target.value)} value={jabatan} label="Jabatan" id="jabatan" required />
        <InputDateForm onDateChange={setTanggalMulai} value={tanggalMulai} label="Tanggal Mulai" />
        <InputDateForm onDateChange={setTanggalSelesai} value={tanggalSelesai} label="Tanggal Selesai" />
        <Button onClick={handleCreatePengurus} className="mt-4 cursor-pointer">Submit</Button>
      </div>
    </div>
  )
}
