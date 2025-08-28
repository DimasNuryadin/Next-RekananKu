"use client"
import InputForm from "@/components/atoms/InputForm";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import Cookies from 'js-cookie';
import { jwtDecode } from "jwt-decode";
import { JWTPayloadTypes, UserTypes } from "@/services/data-types";

import { toast } from "react-toastify";
import { createTenagaAhli } from "@/services/tenagaAhli";
import { useRouter } from "next/navigation";

export default function CreateTenagaAhli() {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    id: ""
  });
  const [nama, setNama] = useState("");
  const [alamat, setAlamat] = useState("");
  const [pendidikanTerakhir, setPendidikanTerakhir] = useState("")
  const [email, setEmail] = useState("")
  const [profesiKeahlian, setProfesiKeahlian] = useState("")
  const [ktp, setKtp] = useState("");
  const [npwp, setNpwp] = useState("");
  const [jenisKelamin, setJenisKelamin] = useState("");
  const [kewarganegaraan, setKewarganegaraan] = useState("");
  const [pengalamanKerja, setPengalamanKerja] = useState("");
  const [jabatan, setJabatan] = useState("");
  const [statusKepegawaian, setStatusKepegawaian] = useState("")

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      const jwtToken = atob(token || '');
      const payload: JWTPayloadTypes = jwtDecode(jwtToken);
      const userFromPayload: UserTypes = payload?.player;
      setUser(userFromPayload);
    }
  }, [])

  async function handleCreateTenagaAhli() {
    const data = { user: user.id, nama, alamat, pendidikanTerakhir, email, profesiKeahlian, ktp, npwp, jenisKelamin, kewarganegaraan, pengalamanKerja, jabatan, statusKepegawaian }
    console.log(data)
    const response = await createTenagaAhli(data);
    if (response.error) {
      toast.error(response?.message.message);
    } else {
      toast.success('Tenaga Ahli berhasil ditambah')
      router.push('/users/tenaga-ahli')
    }
  }

  return (
    <div className="p-3 md:p-10">
      <h2 className="text-4xl font-extrabold dark:text-white mb-8">Tenaga Ahli</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8">
        <div>
          <InputForm onChange={(e) => setNama(e.target.value)} value={nama} label="Nama" id="nama" required />
          <InputForm onChange={(e) => setAlamat(e.target.value)} value={alamat} label="Alamat" id="alamat" required />
          <InputForm onChange={(e) => setPendidikanTerakhir(e.target.value)} value={pendidikanTerakhir} label="Pendidikan Terakhir" id="pendidikanTerakhir" required />
          <InputForm onChange={(e) => setEmail(e.target.value)} value={email} label="Email" id="email" required />
          <InputForm onChange={(e) => setProfesiKeahlian(e.target.value)} value={profesiKeahlian} label="Profesi Keahlian" id="profesiKeahlian" required />
          <InputForm onChange={(e) => setKtp(e.target.value)} value={ktp} label="KTP" id="ktp" required />
        </div>
        <div>
          <InputForm onChange={(e) => setNpwp(e.target.value)} value={npwp} label="NPWP" id="npwp" required />
          <InputForm onChange={(e) => setJenisKelamin(e.target.value)} value={jenisKelamin} label="Jenis Kelamin" id="jenisKelamin" required />
          <InputForm onChange={(e) => setKewarganegaraan(e.target.value)} value={kewarganegaraan} label="Kewarganegaraan" id="kewarganegaraan" required />
          <InputForm onChange={(e) => setPengalamanKerja(e.target.value)} value={pengalamanKerja} label="Pengalaman Kerja" id="pengalamanKerja" required />
          <InputForm onChange={(e) => setJabatan(e.target.value)} value={jabatan} label="Jabatan" id="jabatan" required />
          <InputForm onChange={(e) => setStatusKepegawaian(e.target.value)} value={statusKepegawaian} placeholder="Tetap" label="Status Kepegawaian" id="statusKepegawaian" required />
        </div>
      </div>
      <Button onClick={handleCreateTenagaAhli} className="mt-4 cursor-pointer">Submit</Button>
    </div>
  )
}
