"use client"
import TableAjukanRekanan from "@/components/molecules/TableAjukanRekanan";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import Cookies from 'js-cookie';
import { jwtDecode } from "jwt-decode";
import { JWTPayloadTypes, UserTypes } from "@/services/data-types";
import { getDataPerusahaan } from "@/services/dataPerusahaan";
import { getIzinUsaha } from "@/services/izinUsaha";
import { getPemilik } from "@/services/pemilik";
import { getPengurus } from "@/services/pengurus";
import { getTenagaAhli } from "@/services/tenagaAhli";
import { toast } from "react-toastify";
import { createRekanan } from "@/services/rekanan";

export default function AjukanRekanan() {
  const [user, setUser] = useState({
    email: "",
    id: ""
  });
  const [perusahaanId, setPerusahaanId] = useState("");
  const [dataPerusahaan, setDataPerusahaan] = useState(0);
  const [izinUsaha, setIzinUsaha] = useState(0);
  const [pemilik, setPemilik] = useState(0);
  const [pengurus, setPengurus] = useState(0);
  const [tenagaAhli, setTenagaAhli] = useState(0);

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      const jwtToken = atob(token || '');
      const payload: JWTPayloadTypes = jwtDecode(jwtToken);
      const userFromPayload: UserTypes = payload?.player;
      setUser(userFromPayload);
      fetchData();
    }
  }, [])
  // console.log(dataPerusahaan, izinUsaha, pemilik, pengurus, tenagaAhli)

  async function fetchData() {
    const perusahaan = await getDataPerusahaan(user.id);
    setPerusahaanId(perusahaan.data[0]._id)
    setDataPerusahaan(perusahaan.data.length)

    const izin = await getIzinUsaha(user.id);
    setIzinUsaha(izin.data.length)

    const pemilik = await getPemilik(user.id);
    setPemilik(pemilik.data.length)

    const pengurus = await getPengurus(user.id);
    setPengurus(pengurus.data.length)

    const tenaga = await getTenagaAhli(user.id);
    setTenagaAhli(tenaga.data.length)
  }

  const data = { dataPerusahaan, izinUsaha, pemilik, pengurus, tenagaAhli }

  async function handleAjukanRekanan() {
    if (dataPerusahaan && izinUsaha && pemilik && pengurus && tenagaAhli >= 1) {
      const data = { user: user.id, dataPerusahaan: perusahaanId }
      const response = await createRekanan(data);
      if (response.error) {
        return toast.error(response?.message);
      } else {
        toast.success('Pengajuan Rekanan Berhasil')
      }
    } else {
      return toast.error('Pengajuan Rekanan Gagal, Lengkapi Data Terlebih Dahulu');
    }
  }

  return (
    <div className="p-3 md:p-10">
      <h2 className="text-4xl font-extrabold dark:text-white mb-8">Status Kelengkapan Administrasi</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
        <TableAjukanRekanan data={data} />
      </div>
      <Button onClick={handleAjukanRekanan} className="mt-4 cursor-pointer">Ajukan Rekanan</Button>
    </div>
  )
}
