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
          perPageSelect: false
        });
      }
    };

    initializeDataTable();
  }, []);

  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg pb-4">
        <table className="w-full text-sm text-left rtl:text-right text-gray-50" id="default-table" >
          <thead className="text-xs text-gray-700 uppercase bg-gray-200">
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
                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
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
                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
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
                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
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
                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
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
                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
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
                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
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
                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
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
                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
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
                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
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
                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
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
                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
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
                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
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
                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
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
                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
              </td>
            </tr>
          </tbody>
        </table>

        <nav className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4" aria-label="Table navigation">
          <span className="text-sm font-normal text-gray-50 mb-4 md:mb-0 block w-full md:inline md:w-auto"></span>
          <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
            <li>
              <a href="#" className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700">Previous</a>
            </li>
            <li>
              <a href="#" className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700">1</a>
            </li>
            <li>
              <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">2</a>
            </li>
            <li>
              <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700">Next</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
