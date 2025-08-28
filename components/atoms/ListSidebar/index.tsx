import { ListSidebarProps } from "@/services/data-types";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ListSidebar({ label, link }: Readonly<ListSidebarProps>) {
  const pathname = usePathname();
  return (
    <li>
      <Link href={link} className={clsx("flex items-center p-3 text-gray-900 rounded-lg hover:bg-gray-800 hover:text-white group", pathname.startsWith(link) ? 'bg-gray-500 text-white' : 'bg-gray-200')}>
        <span className="ms-3">{label}</span>
      </Link>
    </li>
  );
}
