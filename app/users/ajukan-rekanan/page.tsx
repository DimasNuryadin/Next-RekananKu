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
import { createRekanan, getRekanan } from "@/services/rekanan";
import clsx from "clsx";

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
  const [statusRekanan, setStatusRekanan] = useState({ status: '' });

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      const jwtToken = atob(token || '');
      const payload: JWTPayloadTypes = jwtDecode(jwtToken);
      const userFromPayload: UserTypes = payload?.player;
      setUser(userFromPayload);
    }
  }, [])

  const data = { dataPerusahaan, izinUsaha, pemilik, pengurus, tenagaAhli }

  async function handleAjukanRekanan() {
    if (dataPerusahaan && izinUsaha && pemilik && pengurus && tenagaAhli >= 1) {
      const data = { user: user.id, dataPerusahaan: perusahaanId }
      const response = await createRekanan(data);
      if (response.error) {
        return toast.error(response?.message);
      } else {
        toast.success('Pengajuan Rekanan Berhasil');
        setStatusRekanan({ status: 'Review' });
      }
    } else {
      return toast.error('Pengajuan Rekanan Gagal, Lengkapi Data Terlebih Dahulu');
    }
  }

  useEffect(() => {
    fetchStatusRekanan();
  }, [user.id]);

  async function fetchStatusRekanan() {
    if (user.id) {
      const response = await getRekanan(user.id);
      setStatusRekanan(response.data);

      const perusahaan = await getDataPerusahaan(user.id);
      if (perusahaan.data) {
        setPerusahaanId(perusahaan.data._id)
        setDataPerusahaan(perusahaan.data.length)
      }

      const izin = await getIzinUsaha(user.id);
      setIzinUsaha(izin.data.length)

      const pemilik = await getPemilik(user.id);
      setPemilik(pemilik.data.length)

      const pengurus = await getPengurus(user.id);
      setPengurus(pengurus.data.length)

      const tenaga = await getTenagaAhli(user.id);
      setTenagaAhli(tenaga.data.length)
    }
  }

  let statusClass;

  if (statusRekanan?.status === "Rekanan") {
    statusClass = "bg-green-100 text-green-800";
  } else if (statusRekanan?.status === "Bukan Rekanan") {
    statusClass = "bg-red-100 text-red-800";
  } else {
    statusClass = "bg-blue-100 text-blue-800";
  }

  return (
    <div className="p-3 md:p-10">
      <h2 className="text-4xl font-extrabold dark:text-white mb-8">Status Kelengkapan Administrasi</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
        <TableAjukanRekanan data={data} />
        <div className="px-10">
          <h1 className="font-bold text-2xl">Status Pengajuan</h1>
          <p className={clsx(
            "inline-flex items-center text-xs font-medium px-2.5 py-0.5 rounded-full",
            statusClass
          )}>{statusRekanan?.status ?? "N/A"}</p>
        </div>
      </div>
      <Button onClick={handleAjukanRekanan} className="mt-4 cursor-pointer">Ajukan Rekanan</Button>
    </div>
  )
}
