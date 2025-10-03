import clsx from "clsx";

export default function TableAjukanRekanan({ data }: any) {
  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg pb-4">
        <table className="w-full text-sm text-left rtl:text-right text-gray-50">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-70">
            <tr>
              <th scope="col" className="px-6 py-3">
                No
              </th>
              <th scope="col" className="px-6 py-3">
                Parameter
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b  border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 text-gray-900">
              <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                1
              </th>
              <td className="px-6 py-4">
                Data Perusahaan
              </td>
              <td className="p-4">
                <span className={clsx(
                  "inline-flex items-center text-xs font-medium px-2.5 py-0.5 rounded-full",
                  data.dataPerusahaan
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                )}>
                  {data.dataPerusahaan ? 'Lengkap' : 'Belum Lengkap'}
                </span>
              </td>
            </tr>
            <tr className="bg-white border-b  border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 text-gray-900">
              <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                2
              </th>
              <td className="px-6 py-4">
                Izin Usaha
              </td>
              <td className="p-4">
                <span className={clsx(
                  "inline-flex items-center text-xs font-medium px-2.5 py-0.5 rounded-full",
                  data.izinUsaha
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                )}>
                  {data.izinUsaha >= 1 ? 'Lengkap' : 'Belum Lengkap'}
                </span>
              </td>
            </tr>
            <tr className="bg-white border-b  border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 text-gray-900">
              <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                3
              </th>
              <td className="px-6 py-4">
                Pemilik
              </td>
              <td className="p-4">
                <span className={clsx(
                  "inline-flex items-center text-xs font-medium px-2.5 py-0.5 rounded-full",
                  data.pemilik
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                )}>
                  {data.pemilik >= 1 ? 'Lengkap' : 'Belum Lengkap'}
                </span>
              </td>
            </tr>
            <tr className="bg-white border-b  border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 text-gray-900">
              <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                4
              </th>
              <td className="px-6 py-4">
                Pengurus
              </td>
              <td className="p-4">
                <span className={clsx(
                  "inline-flex items-center text-xs font-medium px-2.5 py-0.5 rounded-full",
                  data.pengurus
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                )}>
                  {data.pengurus >= 1 ? 'Lengkap' : 'Belum Lengkap'}
                </span>
              </td>
            </tr>
            <tr className="bg-white border-b  border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 text-gray-900">
              <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                5
              </th>
              <td className="px-6 py-4">
                Tenaga Ahli
              </td>
              <td className="p-4">
                <span className={clsx(
                  "inline-flex items-center text-xs font-medium px-2.5 py-0.5 rounded-full",
                  data.tenagaAhli
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                )}>
                  {data.tenagaAhli >= 1 ? 'Lengkap' : 'Belum Lengkap'}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
