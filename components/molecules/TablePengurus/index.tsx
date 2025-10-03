import { Button } from "@/components/ui/button";
import { deletePengurus, getPengurus } from "@/services/pengurus";
import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";

import Cookies from 'js-cookie';
import { jwtDecode } from "jwt-decode";
import { JWTPayloadTypes, UserTypes } from "@/services/data-types";

export default function TablePengurus() {
  const [user, setUser] = useState({ id: '', email: '' });
  const [pengurus, setPengurus] = useState([]);

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

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      const jwtToken = atob(token || '');
      const payload: JWTPayloadTypes = jwtDecode(jwtToken);
      const userFromPayload: UserTypes = payload?.player;
      setUser(userFromPayload);
    }
  }, [])

  const fetchPengurus = useCallback(async () => {
    if (user.id) {
      const response = await getPengurus(user.id);
      setPengurus(response.data);
    }
  }, [user.id])

  useEffect(() => {
    fetchPengurus();
  }, [fetchPengurus]);

  async function handleDelete(id: string) {
    await deletePengurus(id)
    toast.success('Berhasil delete')
    fetchPengurus();
  }

  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg pb-4">
        <table className="w-full text-sm text-left rtl:text-right text-gray-700 bg-gray-200" id="default-table" >
          <thead className="text-xs  uppercase ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Nama
              </th>
              <th scope="col" className="px-6 py-3">
                KTP
              </th>
              <th scope="col" className="px-6 py-3">
                Alamat
              </th>
              <th scope="col" className="px-6 py-3">
                Jabatan
              </th>
              <th scope="col" className="px-6 py-3">
                Tanggal Mulai
              </th>
              <th scope="col" className="px-6 py-3">
                Tanggal Selesai
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {pengurus?.map((pengurus: any) => {
              return (
                <tr key={pengurus._id} className="bg-white border-b  border-gray-200 hover:bg-gray-50 text-gray-900">
                  <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                    {pengurus.nama}
                  </th>
                  <td className="px-6 py-4">
                    {pengurus.ktp}
                  </td>
                  <td className="px-6 py-4">
                    {pengurus.alamat}
                  </td>
                  <td className="px-6 py-4">
                    {pengurus.jabatan}
                  </td>
                  <td className="px-6 py-4">
                    {pengurus.tanggalMulai}
                  </td>
                  <td className="px-6 py-4">
                    {pengurus.tanggalSelesai}
                  </td>
                  <td className="px-6 py-4">
                    <Button onClick={() => handleDelete(pengurus._id)} className="bg-red-500 cursor-pointer hover:bg-red-800">Hapus</Button>
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
