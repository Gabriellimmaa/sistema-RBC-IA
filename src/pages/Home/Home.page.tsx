import { Box, Button, Grid, Typography } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import Link from '@mui/material/Link'
import GabrielFoto from '../../assets/gabriellima.jpeg'
export const Home = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2,
        height: 1,
      }}
    >
      <Avatar
        alt="Remy Sharp"
        src={GabrielFoto}
        sx={{ width: 300, height: 300 }}
      />
      <Link
        href="
        https://www.linkedin.com/in/gabriel-lima-5263681aa/"
        target="_blank"
      >
        <Typography variant="h5" component="div">
          Gabriel Lima
        </Typography>
      </Link>
      <Box sx={{ display: 'flex', gap: 2 }}>
        <Button variant="contained" href="enter-data">
          Inserir dados
        </Button>
        <Button variant="contained" href="view-table">
          Visualizar tabela
        </Button>
      </Box>
    </Box>
  )
}
