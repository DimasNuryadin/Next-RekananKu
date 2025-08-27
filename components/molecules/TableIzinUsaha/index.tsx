import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function TableIzinUsaha() {
  useEffect(() => {
    // Fungsi async untuk inisialisasi DataTables
    const initializeDataTable = async () => {
      // Import library simple-datatables hanya di sisi klien
      const { DataTable } = await import("simple-datatables");

      // Pastikan elemen tabel sudah ada di DOM
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
            <tr className="bg-white border-b  border-gray-200 hover:bg-gray-50 text-gray-900">
              <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                Apple MacBook Pro 17
              </th>
              <td className="px-6 py-4">
                Silver
              </td>
              <td className="px-6 py-4">
                Laptop
              </td>
              <td className="px-6 py-4">
                $2999
              </td>
              <td className="px-6 py-4">
                <Button className="bg-red-500 cursor-pointer hover:bg-red-800">Hapus</Button>
              </td>
            </tr>
            <tr className="bg-white border-b  border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 text-gray-900">
              <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                Apple MacBook Pro 17
              </th>
              <td className="px-6 py-4">
                Silver
              </td>
              <td className="px-6 py-4">
                Laptop
              </td>
              <td className="px-6 py-4">
                $2999
              </td>
              <td className="px-6 py-4">
                <Button className="bg-red-500">Hapus</Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
