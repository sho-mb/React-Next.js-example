'use client'

import Link from "next/link";
import {
  HomeIcon,
  BuildingStorefrontIcon,
  FireIcon
} from '@heroicons/react/24/solid';
import { usePathname } from "next/navigation";
import { clsx } from "clsx";

const links = [
  { name: 'Home', href:'/menu', icon: HomeIcon},
  { name: 'Hamburger', href:'/menu/hamburger', icon: BuildingStorefrontIcon },
  { name: 'Test', href:'/menu/test', icon:FireIcon  }
] 

export default function NavLink() {
  const pathname = usePathname();
  return(
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link 
            key={link.name}
            href={link.href}
            className={clsx("flex h-[48px] grow items-center justify-center gap-3 rounded-md, bg-grey-50 p-3 text-sm font-medium hover:gb-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p",
            {
              'bd-sky-100 text-blue-600' : pathname === link.href,
            },
            )}
          >
            <LinkIcon className="w-6"/>
            <p className="hidden md:block">{link.name}</p>
          </Link>
        )
      })}
    </>
  )
}