"use client"

import { api } from "@/libs/api"
import { 
  Box, 
  Typography,
  TextField,
  Button,
  Link as MuiLink,
  Alert,
} from "@mui/material"
import Link from "next/link"
import { useState, FormEvent } from "react"

export default function Page () {

  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [emailField, setEmailField] = useState('')
  const [passwordField, setPasswordField] = useState('')

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!emailField || !passwordField) {
      setError('Preencha e-mail e senha.')
      return
    }

    setError('')
    setLoading(true)
    const result = await api.login(emailField, passwordField)
    setLoading(false)
    if (result.error) {
      setError(result.error)
    }
  }

  return (
    <>
      <Typography 
        component="p"
        sx={{ textAlign: 'center', mt: 2, color: "#555" }}
      >
        Digite seus dados para entrar no painel administrativo do estabelecimento e gerenciar produtos/pedidos.
      </Typography>

      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <TextField 
          label="Digite seu e-mail"
          name="email"
          required
          fullWidth
          autoFocus
          sx={{ mb: 2 }}
          onChange={e => setEmailField(e.target.value)}
          value={emailField}
          disabled={loading}
        />
        <TextField 
          label="Digite sua senha"
          name="password"
          type="password"
          required
          fullWidth
          sx={{ mb: 2 }}
          onChange={e => setPasswordField(e.target.value)}
          value={passwordField}
          disabled={loading}
        />
        <Button
          type="submit"
          variant="contained"
          fullWidth
          disabled={loading}
        >
          {loading ? 'Carregando...' : 'Entrar'}
        </Button>

        {error &&
          <Alert variant="filled" severity="error" sx={{ mt: 3 }}>
            {error}
          </Alert>
        }

        <Box sx={{ mt: 3 }}>
          <MuiLink 
            href="/login/forgot" 
            variant="body2"
            component={Link}
          >
            Esqueceu sua senha?
          </MuiLink>
        </Box>
      </Box>
    </>
  )
}