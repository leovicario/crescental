import React from 'react'

import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";

const Header = () => {
  return (
        <Navbar isBordered position="sticky" className="w-full top-0 sticky">
          
        <NavbarBrand>
        <Link href="/">
        <img src="/edenic icon.png" className="w-8 mr-2"/>
        <p className="font-bold text-black">Crescental</p>
        </Link>
      </NavbarBrand>
  
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/blog">
            Blog
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Categories
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
         <p>The place for design curation</p>
        </NavbarItem>
        {/* <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem> */}
      </NavbarContent>
    </Navbar>
  )
}

export default Header