import { Button } from "@/components/ui/button";
import { deleteIzinUsaha, getIzinUsaha } from "@/services/izinUsaha";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import Cookies from 'js-cookie';
import { jwtDecode } from "jwt-decode";
import { JWTPayloadTypes, UserTypes } from "@/services/data-types";

export default function TableIzinUsaha() {
  const [user, setUser] = useState({ id: '', email: '' });
  const [izinUsaha, setIzinUsaha] = useState([]);

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      const jwtToken = atob(token || '');
      const payload: JWTPayloadTypes = jwtDecode(jwtToken);
      const userFromPayload: UserTypes = payload?.player;
      setUser(userFromPayload);
      fetchIzinUsaha(user.id);
    }
  }, [])

  async function fetchIzinUsaha(id: string) {
    const response = await getIzinUsaha(id)
    setIzinUsaha(response.data);
  }

  async function handleDelete(id: string) {
    await deleteIzinUsaha(id)
    toast.success('Berhasil delete')
    fetchIzinUsaha(user.id);
  }

  useEffect(() => {
    const initializeDataTable = async () => {
      const { DataTable } = await import("simple-datatables");

      if (document.getElementById("default-table")) {
        new DataTable("#default-table", {
          searchable: false,
          perPageSelect: false,
        });
      }
    };
    initializeDataTable();
  }, []);

  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg pb-4">
        <table className="w-full text-sm text-left rtl:text-right text-gray-700 bg-gray-200" id="default-table" >
          <thead className="text-xs  uppercase ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Jenis Usaha
              </th>
              <th scope="col" className="px-6 py-3">
                No Surat
              </th>
              <th scope="col" className="px-6 py-3">
                Berlaku Sampai
              </th>
              <th scope="col" className="px-6 py-3">
                Instansi Pemberi
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {izinUsaha.map((izinUsaha: any) => {
              return (
                <tr key={izinUsaha._id} className="bg-white border-b  border-gray-200 hover:bg-gray-50 text-gray-900">
                  <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                    {izinUsaha.jenisIzin}
                  </th>
                  <td className="px-6 py-4">
                    {izinUsaha.noSurat}
                  </td>
                  <td className="px-6 py-4">
                    {izinUsaha.berlakuSampai}
                  </td>
                  <td className="px-6 py-4">
                    {izinUsaha.instansiPemberi}
                  </td>
                  <td className="px-6 py-4">
                    <Button onClick={() => handleDelete(izinUsaha._id)} className="bg-red-500 cursor-pointer hover:bg-red-800">Hapus</Button>
                  </td>
                </tr>
              )
            })}

          </tbody>
        </table>
      </div>
    </div>
  )
}
