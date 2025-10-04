import SideBar from "@/components/molecules/SideBar";
import { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Users | Rekananku",
};

export default async function UsersLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const cookieStore = await cookies()
  const token = cookieStore.get('token')?.value

  if (!token) {
    redirect("/signin") // Proteksi login
  }

  return (
    <div style={{ display: 'flex' }}>
      <SideBar />
      <section style={{ flex: 1 }}>{children}</section>
    </div>
  )
}