import { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Sign Up | Rekananku",
};

export default async function SignInLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const cookieStore = await cookies()
  const token = cookieStore.get('token')?.value

  if (token) {
    redirect("/users/data-perusahaan")
  }

  return (
    <div>{children}</div>
  )
}