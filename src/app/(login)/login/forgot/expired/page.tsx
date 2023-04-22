"use client"

import { Link as MuiLink, Alert } from "@mui/material"
import Link from "next/link"

export default function Page () {

  return (
    <>
      <Alert variant="filled" severity="error" sx={{ mt: 3, mb: 3 }}>
        Este link expirou, refaça o procedimento.
      </Alert>

      <MuiLink href="/login/forgot" component={Link} variant="button">
        Esqueci minha senha
      </MuiLink>
    </>
  )
}