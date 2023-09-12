import { Stack } from "@mui/material"
import { Link } from "react-router-dom"

import Logo from '../assets/images/Logo-1.png'

function NavBar() {
  return (
    <Stack
      direction="row"
      justifyContent="none"
      spacing={2}
      sx={{ gap: { sm: '122px', xs: '40px' }, mt: { sm: '32px', xs: '20px' } }}
      px="20px"
    >
      <Link to="/">
        <img
          src={Logo}
          alt="GPMB Gym"
          style={{ margin: '0 2rem' }}
        />
      </Link>
      <Stack
        direction="row"
        gap="40px"
        fontSize="24px"
        alignItems="flex-end"
      >
        <Link to="/"
          style={{ textDecoration: 'none', color: "#3A1212", borderBottom: '3px solid #FF2625' }}
        >
          Início
        </Link>
        <a
          href="#exercises"
          style={{ textDecoration: 'none', color: "#3A1212" }}
        >
          Exercícios
        </a>
      </Stack>
    </Stack>
  )
}

export default NavBar