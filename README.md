# Next‑RekananKu

**Next‑RekananKu** adalah frontend aplikasi web untuk sistem procurement “RekananKu”, dibangun dengan **Next.js** + **TypeScript**.  
Backend-nya menggunakan **Express.js** (lihat: [Express‑RekananKu](https://github.com/DimasNuryadin/Express-RekananKu)).

Procurement di sini berarti: proses memperoleh barang atau jasa dari pihak eksternal agar kebutuhan organisasi terpenuhi dengan cara efektif, efisien, transparan, dan sesuai regulasi.

---

## 🏗️ Teknologi & Arsitektur

Frontend (Next-RekananKu) menggunakan:

- Next.js  
- TypeScript  
- React (komponen UI, hooks, dsb)  
- Struktur folder modular (components, hooks, services, config, dll)  
- Menyambung ke backend via API  

Backend (Express-RekananKu) menggunakan:

- Express.js  
- JavaScript / EJS / template (tergantung implementasi)  
- Endpoint‑endpoint API untuk operasi CRUD, autentikasi, manajemen data rekanan, dll  

---

## 📁 Struktur Direktori (Frontend)

```
app/
components/
config/
hooks/
lib/
public/
services/
.env
next.config.ts
tsconfig.json
package.json
...
```

Penjelasan singkat:

- `app/` — halaman Next.js (routes)  
- `components/` — komponen UI reusable  
- `config/` — konfigurasi umum (misalnya base API URL)  
- `hooks/` — custom React hooks  
- `lib/` — library internal atau utilitas  
- `services/` — modul untuk memanggil API backend  
- `public/` — aset statis (gambar, favicon, dll)  

---

## 🚀 Setup / Instalasi

### Prasyarat

- Node.js (versi LTS, misalnya 20+)
- npm / yarn / pnpm  
- Backend **Express-RekananKu** harus sudah berjalan dan tersedia URL-nya  

### Langkah

1. Clone repository:

    ```bash
    git clone https://github.com/DimasNuryadin/Next-RekananKu.git
    cd Next-RekananKu
    ```

2. Buat file `.env` (atau cukup copy dari `.env.example`) dan isi variabel environment yang diperlukan, misalnya:

    ```
    NEXT_PUBLIC_API_URL=http://localhost:4001
    ```

3. Install dependencies:

    ```bash
    npm install
    # atau
    yarn install
    # atau
    pnpm install
    ```

4. Jalankan mode development:

    ```bash
    npm run dev
    # atau
    yarn dev
    # atau
    pnpm dev
    ```

5. Buka browser ke `http://localhost:3001` untuk melihat aplikasi berjalan.

---

## 🔗 Integrasi dengan Backend

Frontend akan melakukan panggilan ke API backend (Express-RekananKu). Beberapa titik interaksi:

- Autentikasi (login, token, middleware)  
- CRUD data rekanan (create, read, update, delete)  
- Verifikasi, status, atau proses bisnis khusus procurement  

Pastikan backend dijalankan dan endpointnya sesuai dengan base URL di konfigurasi frontend.

---

Contoh:

- `npm run lint` — lint code  
- `npm run test` — jalankan unit tests  
- `npm run build` — build aplikasi produksi  

---

## 📦 Deployment

Untuk produksi, kamu bisa build aplikasi dengan:

```bash
npm run build
npm run start
```

Atau deploy ke platform seperti **Vercel** (direkomendasikan untuk Next.js) atau server lain yang bisa menjalankan Node.js.  
Pastikan environment variable `NEXT_PUBLIC_API_URL` mengarah ke domain backend produksi.

---

## ✅ Fitur Utama

- Halaman login & autentikasi JWT  
- Manajemen data rekanan (lihat, tambah, ubah, hapus)  
- Integrasi penuh dengan backend Express‑RekananKu  
- Tampilan responsif & cepat berkat Next.js + TypeScript  
- Routing dinamis menggunakan App Router  
- Sistem notifikasi / alert untuk feedback pengguna  

---

## ℹ️ Catatan & Tips

- Gunakan **token autentikasi** (Bearer / JWT) di setiap request ke API. 

## Screenshoot
<img src="https://res.cloudinary.com/dgharj3cy/image/upload/v1762059238/RekanaKu_nzbsp8.png" alt="RekananKu" />