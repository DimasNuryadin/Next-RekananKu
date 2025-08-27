import InputForm from "@/components/atoms/InputForm";
import { Button } from "@/components/ui/button";

export default function CreatePengurus() {
  return (
    <div className="p-3 md:p-10">
      <h2 className="text-4xl font-extrabold dark:text-white mb-8">Pemilik</h2>
      <div className="mt-8 w-1/2">
        <InputForm label="Nama" id="nama" required />
        <InputForm label="KTP" id="ktp" required />
        <InputForm label="Alamat" id="alamat" required />
        <InputForm label="Jabatan" id="jabatan" required />
        <InputForm label="Tanggal Mulai" id="tanggalSelesai" required />
        <InputForm label="Tanggal Selesai" id="tanggalSelesai" required />
        <Button className="mt-4 cursor-pointer">Submit</Button>
      </div>
    </div>
  )
}
