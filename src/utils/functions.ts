import { JSONbaseIA } from './../data/JSONbaseIA'
import { JSONatributos, JSONpesos } from '../data'
import { useState } from 'react'

export const functionToAddOptionsInAtributes = () => {
  const submit: any[] = []
  JSONatributos.map((value) => {
    if (value.Atributo != '-') {
      submit.push({
        ...value,
        options: [],
      })
    } else {
      submit[submit.length - 1].options.push(value)
    }
  })
  console.log(submit)
}

export const calcLocalSimilarity = (
  CasoP: number,
  CasoB: number,
  max: number,
) => {
  if (CasoP === -1 || CasoB === -1) return 0.0
  const mod = CasoP - CasoB
  const d = Math.abs(mod)
  const valor = 1.0 - d / max
  return valor
}

export const calcGlobalSimilarity = (caso: any) => {
  type TData = {
    [key: string]: number
  }
  const data: any = []

  JSONbaseIA.forEach((value, _index) => {
    let pesos = 0
    let valor = 0
    JSONpesos.find((y) => {
      // console.log(caso[_index])
      const atributo = y.Atributo
      pesos += y.Peso
      valor += y.Peso * caso[_index][atributo]

      if (caso[_index][atributo] === undefined) {
        console.log('Atributo não encontrado:' + atributo)
        console.log(caso[_index])
      }
    })
    const simGlobal = valor / pesos
    const aux = value.Caso
    console.log(`Similaridade Global com o caso ${value.Caso}: `, simGlobal, '')
    data[aux] = simGlobal
  })

  return data
}
