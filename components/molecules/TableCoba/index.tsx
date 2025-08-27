import React, { useEffect } from 'react'

export default function TableCoba() {
  useEffect(() => {
    // Pastikan kode ini hanya dijalankan di browser
    const initDatatable = async () => {
      // Import library simple-datatables secara dinamis
      const { DataTable } = await import('simple-datatables');

      if (document.getElementById("search-table") && typeof DataTable !== 'undefined') {
        new DataTable("#search-table", {
          searchable: true,
          sortable: false
        });
      }
    };
    initDatatable();
  }, []);
  return (
    <div>
      <table className="w-full text-sm text-left rtl:text-right text-gray-50" id="search-table">
        <thead className="text-xs text-gray-700 uppercase bg-gray-200">
          <tr>
            <th scope="col" className="px-6 py-3">
              <span className="flex items-center">
                Company Name
              </span>
            </th>
            <th scope="col" className="px-6 py-3">
              <span className="flex items-center">
                Ticker
              </span>
            </th>
            <th scope="col" className="px-6 py-3">
              <span className="flex items-center">
                Stock Price
              </span>
            </th>
            <th scope="col" className="px-6 py-3">
              <span className="flex items-center">
                Market Capitalization
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b  border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 text-gray-900">
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
    </div>
  )
}
