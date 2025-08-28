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
  email: string
}

export interface JWTPayloadTypes {
  player: UserTypes,
  iat: number
}

export interface FormSign {
  email: string,
  password: string,
}

export interface DataPerusahaanTypes {
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

export interface IzinUsahaTypes {
  user: string,
  jenisIzin: string,
  noSurat: string,
  berlakuSampai: string,
  instansiPemberi: string
}
export interface PemilikTypes {
  user: string,
  nama: string,
  ktp: string,
  alamat: string,
  saham: string,
}
export interface PengurusTypes {
  user: string,
  nama: string,
  ktp: string,
  alamat: string,
  jabatan: string,
  tanggalMulai: Date,
  tanggalSelesai: Date,
}
export interface TenagaAhliTypes {
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