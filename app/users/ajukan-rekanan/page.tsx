import TableAjukanRekanan from "@/components/molecules/TableAjukanRekanan";
import { Button } from "@/components/ui/button";

export default function AjukanRekanan() {
  return (
    <div className="p-3 md:p-10">
      <h2 className="text-4xl font-extrabold dark:text-white mb-8">Status Kelengkapan Administrasi</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
        <TableAjukanRekanan />
        <div>Diagram</div>
      </div>
      <Button className="mt-4 cursor-pointer">Ajukan Rekanan</Button>
    </div>
  )
}
