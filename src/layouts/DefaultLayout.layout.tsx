import {
  AppBar,
  Avatar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { Outlet } from 'react-router-dom'
import GabrielFoto from '../assets/gabriellima.jpeg'

export const DefaultLayout = () => {
  return (
    <Box sx={{ flexGrow: 1, height: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 1 }}
            href="/home"
          >
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Voltar
          </Typography>
          <Avatar
            alt="Remy Sharp"
            src={GabrielFoto}
            sx={{ width: 42, height: 42 }}
          />
        </Toolbar>
      </AppBar>
      <Box component="main">
        <Outlet />
      </Box>
    </Box>
  )
}
