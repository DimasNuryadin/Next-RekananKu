export interface ListSidebarProps {
  label: string;
  link: string;
  active?: boolean;
};

export interface CardBenefitProps {
  title?: string;
  desc?: string;
  icon: string;
}

export interface UserTypes {
  id: string,
}

export interface FormSign {
  email: string,
  password: string,
}

export interface DataPerusahaanTypes {
  _id: string,
  user: string,
  namaPerusahaan: string,
  bidangUsaha: string,
  tipe: string,
  npwp: string,
  telepon: string,
  website: string,
  alamat: string,
  kota: string,
  provinsi: string,
  kodePos: string,
  kantorCabang: string,
}

export interface IzinUsaha {
  _id: string,
  user: string,
  jenisIzin: string,
  noSurat: string,
  berlakuSampai: string,
  instansiPemberi: string
}
export interface Pemilik {
  _id: string,
  user: string,
  nama: string,
  ktp: string,
  alamat: string,
  saham: string,
}
export interface Pengurus {
  _id: string,
  user: string,
  nama: string,
  ktp: string,
  alamat: string,
  jabatan: string,
  tanggalMulai: Date,
  tanggalSelesai: Date,
}
export interface IzinUsaha {
  _id: string,
  user: string,
  nama: string,
  alamat: string,
  pendidikanTerakhir: string,
  email: string,
  profesiKeahlian: string,
  ktp: string,
  npwp: string,
  jenisKelamin: string,
  kewarganegaraan: string,
  pengalamanKerja: string,
  jabatan: string,
  statusKepegawaian: string
}