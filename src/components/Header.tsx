import { 
  AppBar, 
  Toolbar, 
  Typography,
  Box,
  Button,
  IconButton,
} from '@mui/material'
import { Menu } from '@mui/icons-material'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import HeaderDrawer from './HeaderDrawer'
import { useState } from 'react'

export default function Header () {

  const router = useRouter()

  const pageTitle = "Painel B7Delivery"

  const [drawerOpen, setDrawerOpen] = useState(false)

  const handleLogout = () => {
    router.push('/login')
  }

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen)
  }

  return (
    <>
      <AppBar component="nav" position="relative">
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            sx={{ display: { sm: 'none' } }}
            onClick={handleDrawerToggle}
          >
            <Menu />
          </IconButton>
          <Typography
            component="div"
            variant="h6"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <Link href="/" style={{ color: '#FFF', textDecoration: 'none'}}>
              {pageTitle}
            </Link>
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Link href="/pedidos" style={{ textDecoration: 'none' }}>
              <Button sx={{ color: "#FFF" }}>Pedidos</Button>
            </Link>
            <Link href="/produtos" style={{ textDecoration: 'none' }}>
              <Button sx={{ color: "#FFF" }}>Produtos</Button>
            </Link>
            <Link href="/categorias" style={{ textDecoration: 'none' }}>
              <Button sx={{ color: "#FFF" }}>Categorias</Button>
            </Link>
            <Button onClick={handleLogout} sx={{ color: "#FFF" }}>Sair</Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <HeaderDrawer 
          open={drawerOpen}
          onClose={handleDrawerToggle}
          title={pageTitle}
          onLogout={handleLogout}
        />
      </Box>
    </>
  )
}