import React, { useState } from "react"
import styled from "styled-components"

import HamburgerToggle from "./HamburgerToggle"

import MobileMenuOptions from "./MobileMenuOptions"
import DesktopMenuOptions from "./DesktopMenuOptions"

const StyledMenu = styled.div`
  @media (min-width: 1024px) {
    width: 100%;
  }
`

const MobileOnly = styled.div`
  @media (min-width: 1024px) {
    display: none;
  }
`

const DesktopOnly = styled.div`
  @media (max-width: 1024px) {
    display: none;
  }
`

const menuItems = [
  { label: "Home", url: "/#home" },
  { label: "About Me", url: "/#aboutMe" },
  { label: "Services", url: "/#services" },
  { label: "Contact", url: "/#contact" },
  { label: "Projects", url: "/#projects" },
  { label: "Blog", url: "https://kervin.blog", external: true },
]

const Menu = () => {
  const [open, setOpen] = useState(false)
  return (
    <StyledMenu>
      <DesktopOnly>
        <DesktopMenuOptions items={menuItems} />
      </DesktopOnly>
      <MobileOnly>
        <HamburgerToggle toggle={setOpen} open={open} />
        <MobileMenuOptions
          open={open}
          onClick={() => setOpen(!open)}
          items={menuItems}
        />
      </MobileOnly>
    </StyledMenu>
  )
}

export default Menu
