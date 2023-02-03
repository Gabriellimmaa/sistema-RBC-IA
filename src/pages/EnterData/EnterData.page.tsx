import { useEffect, useState } from 'react'
import { JSONatributos, JSONbaseIA } from '../../data'
import { TAtributo, TBaseIA } from '../../data/types'
import { TMyCase } from './types'
import { calcLocalSimilarity, calcGlobalSimilarity } from '../../utils'
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material'
import { StepperEnterData } from './components'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

export const EnterData = () => {
  const [select, setSelect] = useState('-1')
  const [global, setGlobal] = useState(0)
  const [myCase, setMyCase] = useState<TMyCase[]>([])
  const [localSimilarity, setLocalSimilarity] = useState<any>([])
  const [globalSimilarity, setGlobalSimilarity] = useState<any>([])
  const [atributo, setAtributo] = useState<TAtributo>(
    JSONatributos[global] as TAtributo,
  )

  const handleChange = (event: SelectChangeEvent) => {
    setSelect(event.target.value)
  }

  const handleNext = async () => {
    let b = 0
    const p = parseInt(select)
    JSONbaseIA.map((item, _index) => {
      if (p === -1) {
        b = -1
      } else {
        b = atributo?.options.find((option) => {
          return option.Valor === item[atributo?.Atributo]
        })?.valor
        if (b === undefined) {
          b = -1
        }
      }
      const t = JSONatributos[global].options.length + 1
      // console.log(atributo?.Atributo)
      // console.log('p,b,t:' + p, b, t)
      const similaridade = calcLocalSimilarity(p, b, t - 2)
      // console.log(similaridade)
      const AttToAddInCase = {
        ...localSimilarity[_index],
        [atributo?.Atributo]: similaridade,
      }
      setLocalSimilarity((similaridadeLocal: any) => {
        similaridadeLocal[_index] = AttToAddInCase
        return similaridadeLocal
      })
    })
    setMyCase((myCase: TMyCase[]) => [
      ...myCase,
      {
        name: atributo?.Atributo,
        value: select,
      },
    ])
    console.log(myCase)
    setGlobal(global + 1)
    setSelect('-1')
  }

  useEffect(() => {
    setAtributo(JSONatributos[global] as TAtributo)
    if (JSONatributos.length === global) {
      console.log('mycase' + myCase)
      setGlobalSimilarity(calcGlobalSimilarity(localSimilarity))
    }
  }, [global])

  return (
    <Box pb={5}>
      <Box
        sx={{
          maxWidth: 400,
          display: 'flex',
          flexDirection: 'column',
          margin: 'auto',
          mt: 10,
          // backgroundColor: grey[300],
        }}
      >
        <Box
          sx={{
            padding: 2,
          }}
        >
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              {atributo?.Atributo}
            </InputLabel>
            <Select
              value={select}
              label={atributo?.Atributo}
              onChange={handleChange}
              sx={{ mb: 4 }}
            >
              <MenuItem value={-1}>Desconhecido</MenuItem>
              {atributo?.options.map((valor, _index) => {
                return (
                  <MenuItem key={_index} value={valor.valor}>
                    {valor.Valor}
                  </MenuItem>
                )
              })}
            </Select>
            <StepperEnterData
              step={global + 1}
              steps={JSONatributos.length + 1}
            />
          </FormControl>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Button
            variant="contained"
            endIcon={<ArrowForwardIcon />}
            onClick={handleNext}
          >
            Próximo
          </Button>
        </Box>
      </Box>
      <Box sx={styles.center}>
        <Typography variant="h6" sx={{ m: 4 }}>
          {JSONatributos.length === global && 'Meu Caso'}
        </Typography>
        {JSONatributos.length === global && (
          <TableContainer
            component={Paper}
            sx={{ maxHeight: 500, width: '90%' }}
          >
            <Table
              sx={{ overflowX: 'auto' }}
              size="small"
              aria-label="a dense table"
              stickyHeader
            >
              <TableHead>
                <TableRow>
                  {JSONatributos.map((atributo) => {
                    return <TableCell>{atributo.Atributo}</TableCell>
                  })}
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  {myCase.map((item, _index) => {
                    return (
                      <TableCell>
                        {parseInt(item.value) === -1
                          ? 'Desconhecido'
                          : JSONatributos[_index].options.find((option) => {
                              return option.valor === parseInt(item.value)
                            })?.Valor}
                      </TableCell>
                    )
                  })}
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Box>
      <Box sx={styles.center}>
        <Typography variant="h6" sx={{ m: 4 }}>
          {JSONatributos.length === global && 'Similaridade Global'}
        </Typography>
        {JSONatributos.length === global && (
          <TableContainer
            component={Paper}
            sx={{ maxHeight: 500, width: '90%' }}
          >
            <Table
              sx={{ overflowX: 'auto' }}
              size="small"
              aria-label="a dense table"
              stickyHeader
            >
              <TableHead>
                <TableRow>
                  <TableCell>Caso</TableCell>
                  <TableCell>Similaridade Global</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {globalSimilarity.map((item: any, _index: any) => {
                  return (
                    <TableRow key={_index}>
                      <TableCell>{_index}</TableCell>
                      <TableCell>{item}</TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Box>
      <Box sx={styles.center}>
        <Typography variant="h6" sx={{ m: 4 }}>
          {JSONatributos.length === global && 'Similaridade Local'}
        </Typography>
        {JSONatributos.length === global && (
          <TableContainer
            component={Paper}
            sx={{ maxHeight: 500, width: '90%' }}
          >
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
                {localSimilarity.map((row: any, _index: any) => (
                  <TableRow
                    key={_index}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {_index}
                    </TableCell>
                    {JSONatributos.map((atributo, _) => {
                      return (
                        <TableCell
                          key={_}
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
        )}
      </Box>
    </Box>
    // <p>{atributo?.Atributo}</p>
    // <select
    //   id="atributo"
    //   name={atributo?.Atributo}
    //   onChange={(e) => handleSelect(e.target)}
    // >
    //   <option value={-1}>Desconhecido</option>
    //   {atributo?.options.map((valor, _index) => {
    //     return (
    //       <option key={_index} value={valor.valor}>
    //         {valor.Valor}
    //       </option>
    //     )
    //   })}
    // </select>
    // <button onClick={handleNext}>Next</button>
  )
}

const styles = {
  center: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
}
