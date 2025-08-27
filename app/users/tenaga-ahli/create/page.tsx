import InputForm from "@/components/atoms/InputForm";
import { Button } from "@/components/ui/button";

export default function CreateTenagaAhli() {
  return (
    <div className="p-3 md:p-10">
      <h2 className="text-4xl font-extrabold dark:text-white mb-8">Pemilik</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8">
        <div>
          <InputForm label="Nama" id="nama" required />
          <InputForm label="Alamat" id="alamat" required />
          <InputForm label="Pendidikan Terakhir" id="pendidikanTerakhir" required />
          <InputForm label="Email" id="email" required />
          <InputForm label="Profesi Keahlian" id="profesiKeahlian" required />
          <InputForm label="KTP" id="ktp" required />
        </div>
        <div>
          <InputForm label="NPWP" id="npwp" required />
          <InputForm label="Jenis Kelamin" id="jenisKelamin" required />
          <InputForm label="Kewarganegaraan" id="kewarganegaraan" required />
          <InputForm label="Pengalaman Kerja" id="pengalamanKerja" required />
          <InputForm label="Jabatan" id="jabatan" required />
          <InputForm label="Status Kepegawaian" id="statusKepegawaian" required />
        </div>
      </div>
      <Button className="mt-4 cursor-pointer">Submit</Button>
    </div>
  )
}
