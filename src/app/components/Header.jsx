'use client'
import { Button, Navbar, NavbarCollapse, NavbarLink, NavbarToggle, TextInput } from 'flowbite-react';
import Link from "next/link";
import { usePathname } from 'next/navigation';
import {AiOutlineSearch} from 'react-icons/ai';
import { FaMoon } from 'react-icons/fa';

export default function Header() {
  const path = usePathname();
  return (
    <Navbar className='border-b-2'>
      <Link
        href="/"
        className="self-center whitespace-nowrap text-sm sm:text-lg font-semibold dark:text-white"
      >
        <span className="px-2 mr-4 py-1 text-blue-800 tracking-tighter">Yunsung Indonesia</span>
      </Link>
      <form>
        <TextInput
          className="hidden lg:inline"
          placeholder="Search..."
          type="text"
          rightIcon={AiOutlineSearch}
        />
      </form>
      <Button className="lg:hidden" color="light" pill>
        <AiOutlineSearch />
      </Button>
      <div className="flex gap-2 md:order-2">
        <Button outline color="dark" className='hidden sm:inline'>
          <FaMoon />
        </Button>
        <Link href="/sign-in">
          <Button outline color="dark">
            Sign In
          </Button>
        </Link>
      </div>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink active={path === "/"} as={'div'}>
          Home
        </NavbarLink>
        <NavbarLink active={path === "/about"} as={'div'}>
          About
        </NavbarLink>
        <NavbarLink active={path === "/services"} as={'div'}>Services</NavbarLink>
        <NavbarLink active={path === "/products"} as={'div'}>Products</NavbarLink>
        <NavbarLink active={path === "/projects"} as={'div'}>Projects</NavbarLink>
        <NavbarLink active={path === "/contact"} as={'div'}>Contact</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  )
}
