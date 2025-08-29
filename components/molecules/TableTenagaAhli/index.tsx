import { Button } from "@/components/ui/button";
import { deleteTenagaAhli, getTenagaAhli } from "@/services/tenagaAhli";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import Cookies from 'js-cookie';
import { jwtDecode } from "jwt-decode";
import { JWTPayloadTypes, UserTypes } from "@/services/data-types";

export default function TableTenagaAhli() {
  const [user, setUser] = useState({ id: '', email: '' });
  const [tenagaAhli, setTenagaAhli] = useState([]);

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

  useEffect(() => {
    fetchTenagaAhli();
  }, [user.id]);

  async function fetchTenagaAhli() {
    if (user.id) {
      const response = await getTenagaAhli(user.id);
      setTenagaAhli(response.data);
    }
  }

  async function handleDelete(id: string) {
    await deleteTenagaAhli(id)
    toast.success('Berhasil delete')
    fetchTenagaAhli();
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
                Alamat
              </th>
              <th scope="col" className="px-6 py-3">
                Pendidikan Terakhir
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Profesi Keahlian
              </th>
              <th scope="col" className="px-6 py-3">
                KTP
              </th>
              <th scope="col" className="px-6 py-3">
                NPWP
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {tenagaAhli.map((tenagaAhli: any) => {
              return (
                <tr key={tenagaAhli._id} className="bg-white border-b  border-gray-200 hover:bg-gray-50 text-gray-900">
                  <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                    {tenagaAhli.nama}
                  </th>
                  <td className="px-6 py-4">
                    {tenagaAhli.alamat}
                  </td>
                  <td className="px-6 py-4">
                    {tenagaAhli.pendidikanTerakhir}
                  </td>
                  <td className="px-6 py-4">
                    {tenagaAhli.email}
                  </td>
                  <td className="px-6 py-4">
                    {tenagaAhli.profesiKeahlian}
                  </td>
                  <td className="px-6 py-4">
                    {tenagaAhli.ktp}
                  </td>
                  <td className="px-6 py-4">
                    {tenagaAhli.npwp}
                  </td>
                  <td className="px-6 py-4">
                    <Button onClick={() => handleDelete(tenagaAhli._id)} className="bg-red-500 cursor-pointer hover:bg-red-800">Hapus</Button>
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
