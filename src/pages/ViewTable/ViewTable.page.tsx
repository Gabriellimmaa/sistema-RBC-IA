import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'
import { JSONatributos, JSONbaseIA } from '../../data'

export const ViewTable = () => {
  return (
    <Box
      sx={{
        p: 4,
      }}
    >
      <TableContainer component={Paper} sx={{ maxHeight: 500 }}>
        <Table
          sx={{ overflowX: 'auto' }}
          size="small"
          aria-label="a dense table"
          stickyHeader
        >
          <TableHead>
            <TableRow>
              <TableCell>Caso</TableCell>
              {JSONatributos.map((atributo) => {
                return <TableCell>{atributo.Atributo}</TableCell>
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {JSONbaseIA.map((row) => (
              <TableRow
                key={row.Caso}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.Caso}
                </TableCell>
                {JSONatributos.map((atributo) => {
                  return (
                    <TableCell
                      sx={{
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {row[atributo.Atributo]}
                    </TableCell>
                  )
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}
