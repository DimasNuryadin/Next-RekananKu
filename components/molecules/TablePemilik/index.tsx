import { Button } from "@/components/ui/button";
import { deletePemilik, getPemilik } from "@/services/pemilik";
import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";

import Cookies from 'js-cookie';
import { jwtDecode } from "jwt-decode";
import { JWTPayloadTypes, UserTypes } from "@/services/data-types";

export default function TablePemilik() {
  const [user, setUser] = useState({ id: '', email: '' });
  const [pemilik, setPemilik] = useState([]);

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

  const fetchPemilik = useCallback(async () => {
    if (user.id) {
      const response = await getPemilik();
      setPemilik(response.data);
    }
  }, [user.id]);

  useEffect(() => {
    fetchPemilik();
  }, [fetchPemilik]);

  async function handleDelete(id: string) {
    await deletePemilik(id)
    toast.success('Berhasil delete')
    fetchPemilik();
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
                Saham
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {pemilik?.map((pemilik: any) => {
              return (
                <tr key={pemilik._id} className="bg-white border-b  border-gray-200 hover:bg-gray-50 text-gray-900">
                  <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                    {pemilik.nama}
                  </th>
                  <td className="px-6 py-4">
                    {pemilik.ktp}
                  </td>
                  <td className="px-6 py-4">
                    {pemilik.alamat}
                  </td>
                  <td className="px-6 py-4">
                    {pemilik.saham}%
                  </td>
                  <td className="px-6 py-4">
                    <Button onClick={() => handleDelete(pemilik._id)} className="bg-red-500 cursor-pointer hover:bg-red-800">Hapus</Button>
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
