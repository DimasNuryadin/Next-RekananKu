import InputForm from "@/components/atoms/InputForm";
import { Button } from "@/components/ui/button";

export default function CreateIzin() {
  return (
    <div className="p-3 md:p-10">
      <h2 className="text-4xl font-extrabold dark:text-white mb-8">Izin Usaha</h2>
      <div className="mt-8 w-1/2">
        <InputForm label="Jenis Izin" id="jenisIzin" required />
        <InputForm label="No Surat" id="noSurat" required />
        <InputForm label="Berlaku Sampai" id="berlakuSampai" required />
        <InputForm label="Instansi Pemberi" id="instansiPemberi" required />
        <Button className="mt-4 cursor-pointer">Submit</Button>
      </div>
    </div>
  )
}
