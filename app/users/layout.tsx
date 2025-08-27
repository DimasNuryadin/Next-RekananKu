"use client";
import SideBar from "@/components/molecules/SideBar";

export default function UsersLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div style={{ display: 'flex' }}>
      <SideBar />
      <section style={{ flex: 1 }}>{children}</section>
    </div>
  )
}