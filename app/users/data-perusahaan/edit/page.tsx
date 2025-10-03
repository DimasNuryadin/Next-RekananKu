"use client"

import InputForm from "@/components/atoms/InputForm"
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react"
import Cookies from 'js-cookie';
import { jwtDecode } from "jwt-decode";
import { JWTPayloadTypes, UserTypes } from "@/services/data-types";
import { toast } from "react-toastify";
import { editDataPerusahaan, getDataPerusahaan } from "@/services/dataPerusahaan";

export default function CreateDataPerusahaan() {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    id: ""
  });

  const [dataPerusahaan, setDataPerusahaan] = useState({
    namaPerusahaan: '',
    telepon: '',
  })

  const [formData, setFormData] = useState({
    bidangUsaha: '',
    tipe: '',
    npwp: '',
    website: '',
    alamat: '',
    kota: '',
    provinsi: '',
    kodePos: '',
    kantorCabang: '',
  })

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

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
      setFormData({
        bidangUsaha: response.data.bidangUsaha,
        tipe: response.data.tipe,
        npwp: response.data.npwp,
        website: response.data.website,
        alamat: response.data.alamat,
        kota: response.data.kota,
        provinsi: response.data.provinsi,
        kodePos: response.data.kodePos,
        kantorCabang: response.data.kantorCabang,
      })
    }
  }, [user.id])

  useEffect(() => {
    fetchDataPerusahaan();
  }, [fetchDataPerusahaan])

  async function handleEdit() {
    const response = await editDataPerusahaan(formData);
    if (response.error) {
      return toast.error(response?.message);
    } else {
      toast.success('Data perusahaan berhasil di edit')
      router.push('/users/data-perusahaan')
    }
  }

  return (
    <div className="p-3 md:p-10">
      <h2 className="text-4xl font-extrabold">Data Perusahaan</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
        <div>
          <InputForm disabled onChange={handleChange} value={dataPerusahaan.namaPerusahaan} label="Nama Perusahaan" id="namaPerusahaan" />
          <InputForm onChange={handleChange} value={formData.bidangUsaha ?? ''} label="Bidang Usaha" id="bidangUsaha" />
          <InputForm onChange={handleChange} value={formData.tipe ?? ''} label="Tipe Perusahaan" id="tipe" />
          <InputForm onChange={handleChange} value={formData.npwp ?? ''} label="NPWP" id="npwp" />
          <InputForm disabled onChange={handleChange} value={dataPerusahaan.telepon} label="Telepon" id="telepon" />
          <InputForm onChange={handleChange} value={formData.website ?? ''} label="Website" id="website" />
        </div>
        <div>
          <InputForm onChange={handleChange} value={formData.alamat ?? ''} label="Alamat" id="alamat" />
          <InputForm onChange={handleChange} value={formData.kota ?? ''} label="Kota" id="kota" />
          <InputForm onChange={handleChange} value={formData.provinsi ?? ''} label="Provinsi" id="provinsi" />
          <InputForm onChange={handleChange} value={formData.kodePos ?? ''} label="Kode Pos" id="kodePos" />
          <InputForm onChange={handleChange} value={formData.kantorCabang ?? ''} label="Kantor Cabang" id="kantorCabang" />
        </div>
      </div>
      <div className="flex justify-end">
        <button onClick={handleEdit} className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center cursor-pointer ">Submit</button>
      </div>
    </div>
  )
}
