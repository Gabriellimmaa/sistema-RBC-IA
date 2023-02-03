import { TAtributo } from './types'

export const JSONatributos: TAtributo[] = [
  {
    Atributo: 'date',
    valor: '?',
    Valor: 'Desconhecido',
    options: [
      {
        Atributo: '-',
        valor: 0,
        Valor: 'Janeiro',
      },
      {
        Atributo: '-',
        valor: 1,
        Valor: 'Fevereiro',
      },
      {
        Atributo: '-',
        valor: 2,
        Valor: 'Março',
      },
      {
        Atributo: '-',
        valor: 3,
        Valor: 'Abril',
      },
      {
        Atributo: '-',
        valor: 4,
        Valor: 'Maio',
      },
      {
        Atributo: '-',
        valor: 5,
        Valor: 'Junho',
      },
      {
        Atributo: '-',
        valor: 6,
        Valor: 'Julho',
      },
      {
        Atributo: '-',
        valor: 7,
        Valor: 'Agosto',
      },
      {
        Atributo: '-',
        valor: 8,
        Valor: 'Setembro',
      },
      {
        Atributo: '-',
        valor: 9,
        Valor: 'Outubro',
      },
      {
        Atributo: '-',
        valor: 10,
        Valor: 'Novembro',
      },
      {
        Atributo: '-',
        valor: 11,
        Valor: 'Dezembro',
      },
    ],
  },
  {
    Atributo: 'plant-stand',
    valor: '?',
    Valor: 'Desconhecido',
    options: [
      {
        Atributo: '-',
        valor: 0,
        Valor: 'Normal',
      },
      {
        Atributo: '-',
        valor: 1,
        Valor: 'lt-normal',
      },
    ],
  },
  {
    Atributo: 'precip',
    valor: '?',
    Valor: 'Desconhecido',
    options: [
      {
        Atributo: '-',
        valor: 0,
        Valor: 'lt-normal',
      },
      {
        Atributo: '-',
        valor: 1,
        Valor: 'Normal',
      },
      {
        Atributo: '-',
        valor: 2,
        Valor: 'gt-normal',
      },
    ],
  },
  {
    Atributo: 'temp',
    valor: '?',
    Valor: 'Desconhecido',
    options: [
      {
        Atributo: '-',
        valor: 0,
        Valor: 'lt-norm',
      },
      {
        Atributo: '-',
        valor: 1,
        Valor: 'norm',
      },
      {
        Atributo: '-',
        valor: 2,
        Valor: 'gt-norm',
      },
    ],
  },
  {
    Atributo: 'hail',
    valor: '?',
    Valor: 'Desconhecido',
    options: [
      {
        Atributo: '-',
        valor: 0,
        Valor: 'Yes',
      },
      {
        Atributo: '-',
        valor: 1,
        Valor: 'No',
      },
    ],
  },
  {
    Atributo: 'crop-hist',
    valor: '?',
    Valor: 'Desconhecido',
    options: [
      {
        Atributo: '-',
        valor: 0,
        Valor: 'diff-1st-year',
      },
      {
        Atributo: '-',
        valor: 1,
        Valor: 'same-1st-yr',
      },
      {
        Atributo: '-',
        valor: 2,
        Valor: 'same-lst-two-yrs',
      },
      {
        Atributo: '-',
        valor: 3,
        Valor: 'same-lst-sev-yrs',
      },
    ],
  },
  {
    Atributo: 'area-damaged',
    valor: '?',
    Valor: 'Desconhecido',
    options: [
      {
        Atributo: '-',
        valor: 0,
        Valor: 'scattered',
      },
      {
        Atributo: '-',
        valor: 1,
        Valor: 'low-areas',
      },
      {
        Atributo: '-',
        valor: 2,
        Valor: 'upper-areas',
      },
      {
        Atributo: '-',
        valor: 3,
        Valor: 'whole-field',
      },
    ],
  },
  {
    Atributo: 'severity',
    valor: '?',
    Valor: 'Desconhecido',
    options: [
      {
        Atributo: '-',
        valor: 0,
        Valor: 'Minor',
      },
      {
        Atributo: '-',
        valor: 1,
        Valor: 'pot-severe',
      },
      {
        Atributo: '-',
        valor: 2,
        Valor: 'severe',
      },
    ],
  },
  {
    Atributo: 'seed-tmt',
    valor: '?',
    Valor: 'Desconhecido',
    options: [
      {
        Atributo: '-',
        valor: 0,
        Valor: 'fungicida',
      },
      {
        Atributo: '-',
        valor: 1,
        Valor: 'Outros',
      },
    ],
  },
  {
    Atributo: 'germination',
    valor: '?',
    Valor: 'Desconhecido',
    options: [
      {
        Atributo: '-',
        valor: 0,
        Valor: '90-100%',
      },
      {
        Atributo: '-',
        valor: 1,
        Valor: '80-89 %',
      },
      {
        Atributo: '-',
        valor: 2,
        Valor: 'lt-80%',
      },
    ],
  },
  {
    Atributo: 'plant-growth',
    valor: '?',
    Valor: 'Desconhecido',
    options: [
      {
        Atributo: '-',
        valor: 0,
        Valor: 'Norm',
      },
      {
        Atributo: '-',
        valor: 1,
        Valor: 'Abnorm',
      },
    ],
  },
  {
    Atributo: 'leaves',
    valor: '?',
    Valor: 'Desconhecido',
    options: [
      {
        Atributo: '-',
        valor: 0,
        Valor: 'Norm',
      },
      {
        Atributo: '-',
        valor: 1,
        Valor: 'Abnorm',
      },
    ],
  },
  {
    Atributo: 'leafspots-halo',
    valor: '?',
    Valor: 'Desconhecido',
    options: [
      {
        Atributo: '-',
        valor: 0,
        Valor: 'absent',
      },
      {
        Atributo: '-',
        valor: 1,
        Valor: 'yellow-halos',
      },
      {
        Atributo: '-',
        valor: 2,
        Valor: 'no-yellow-halos',
      },
    ],
  },
  {
    Atributo: 'leafspots-marg',
    valor: '?',
    Valor: 'Desconhecido',
    options: [
      {
        Atributo: '-',
        valor: 0,
        Valor: 'w-s-marg',
      },
      {
        Atributo: '-',
        valor: 1,
        Valor: 'no-w-s-marg',
      },
      {
        Atributo: '-',
        valor: 2,
        Valor: 'dna',
      },
    ],
  },
  {
    Atributo: 'leafspot-size',
    valor: '?',
    Valor: 'Desconhecido',
    options: [
      {
        Atributo: '-',
        valor: 0,
        Valor: 'lt-1/8',
      },
      {
        Atributo: '-',
        valor: 1,
        Valor: 'gt-1/8',
      },
      {
        Atributo: '-',
        valor: 2,
        Valor: 'dna',
      },
    ],
  },
  {
    Atributo: 'leaf-shread',
    valor: '?',
    Valor: 'Desconhecido',
    options: [
      {
        Atributo: '-',
        valor: 0,
        Valor: 'absent',
      },
      {
        Atributo: '-',
        valor: 1,
        Valor: 'Present',
      },
    ],
  },
  {
    Atributo: 'leaf-malf',
    valor: '?',
    Valor: 'Desconhecido',
    options: [
      {
        Atributo: '-',
        valor: 0,
        Valor: 'Absent',
      },
      {
        Atributo: '-',
        valor: 1,
        Valor: 'Present',
      },
    ],
  },
  {
    Atributo: 'leaf-mild',
    valor: '?',
    Valor: 'Desconhecido',
    options: [
      {
        Atributo: '-',
        valor: 0,
        Valor: 'Absent',
      },
      {
        Atributo: '-',
        valor: 1,
        Valor: 'Upper-surf',
      },
      {
        Atributo: '-',
        valor: 2,
        Valor: 'Lower-surf',
      },
    ],
  },
  {
    Atributo: 'stem',
    valor: '?',
    Valor: 'Desconhecido',
    options: [
      {
        Atributo: '-',
        valor: 0,
        Valor: 'Norm',
      },
      {
        Atributo: '-',
        valor: 1,
        Valor: 'Abnorm',
      },
    ],
  },
  {
    Atributo: 'lodging',
    valor: '?',
    Valor: 'Desconhecido',
    options: [
      {
        Atributo: '-',
        valor: 0,
        Valor: 'Yes',
      },
      {
        Atributo: '-',
        valor: 1,
        Valor: 'No',
      },
    ],
  },
  {
    Atributo: 'stem-cankers',
    valor: '?',
    Valor: 'Desconhecido',
    options: [
      {
        Atributo: '-',
        valor: 0,
        Valor: 'Absent',
      },
      {
        Atributo: '-',
        valor: 1,
        Valor: 'below-soil',
      },
      {
        Atributo: '-',
        valor: 2,
        Valor: 'Above-soil',
      },
      {
        Atributo: '-',
        valor: 3,
        Valor: 'Above-sec-nde',
      },
    ],
  },
  {
    Atributo: 'canker-lesion',
    valor: '?',
    Valor: 'Desconhecido',
    options: [
      {
        Atributo: '-',
        valor: 0,
        Valor: 'dna',
      },
      {
        Atributo: '-',
        valor: 1,
        Valor: 'Brown',
      },
      {
        Atributo: '-',
        valor: 2,
        Valor: 'dk-brown-blk',
      },
      {
        Atributo: '-',
        valor: 3,
        Valor: 'tan',
      },
    ],
  },
  {
    Atributo: 'fruiting-bodies',
    valor: '?',
    Valor: 'Desconhecido',
    options: [
      {
        Atributo: '-',
        valor: 0,
        Valor: 'Absent',
      },
      {
        Atributo: '-',
        valor: 1,
        Valor: 'Present',
      },
    ],
  },
  {
    Atributo: 'external decay',
    valor: '?',
    Valor: 'Desconhecido',
    options: [
      {
        Atributo: '-',
        valor: 0,
        Valor: 'Absent',
      },
      {
        Atributo: '-',
        valor: 1,
        Valor: 'firm-and-dry',
      },
      {
        Atributo: '-',
        valor: 2,
        Valor: 'watery',
      },
    ],
  },
  {
    Atributo: 'mycelium',
    valor: '?',
    Valor: 'Desconhecido',
    options: [
      {
        Atributo: '-',
        valor: 0,
        Valor: 'Absent',
      },
      {
        Atributo: '-',
        valor: 1,
        Valor: 'Present',
      },
    ],
  },
  {
    Atributo: 'int-discolor',
    valor: '?',
    Valor: 'Desconhecido',
    options: [
      {
        Atributo: '-',
        valor: 0,
        Valor: 'Brown',
      },
      {
        Atributo: '-',
        valor: 1,
        Valor: 'Black',
      },
    ],
  },
  {
    Atributo: 'sclerotia',
    valor: '?',
    Valor: 'Desconhecido',
    options: [
      {
        Atributo: '-',
        valor: 0,
        Valor: 'Absent',
      },
      {
        Atributo: '-',
        valor: 1,
        Valor: 'Present',
      },
    ],
  },
  {
    Atributo: 'fruit-pods',
    valor: '?',
    Valor: 'Desconhecido',
    options: [
      {
        Atributo: '-',
        valor: 0,
        Valor: 'Norm',
      },
      {
        Atributo: '-',
        valor: 1,
        Valor: 'Diseased',
      },
      {
        Atributo: '-',
        valor: 2,
        Valor: 'few-present',
      },
      {
        Atributo: '-',
        valor: 3,
        Valor: 'dna',
      },
    ],
  },
  {
    Atributo: 'fruit spots',
    valor: '?',
    Valor: 'Desconhecido',
    options: [
      {
        Atributo: '-',
        valor: 0,
        Valor: 'Absent',
      },
      {
        Atributo: '-',
        valor: 1,
        Valor: 'Colored',
      },
      {
        Atributo: '-',
        valor: 2,
        Valor: 'Brown-w/blk-specks',
      },
      {
        Atributo: '-',
        valor: 3,
        Valor: 'Distort',
      },
      {
        Atributo: '-',
        valor: 4,
        Valor: 'dna',
      },
    ],
  },
  {
    Atributo: 'seed',
    valor: '?',
    Valor: 'Desconhecido',
    options: [
      {
        Atributo: '-',
        valor: 0,
        Valor: 'Norm',
      },
      {
        Atributo: '-',
        valor: 1,
        Valor: 'Abnorm',
      },
    ],
  },
  {
    Atributo: 'mold-growth',
    valor: '?',
    Valor: 'Desconhecido',
    options: [
      {
        Atributo: '-',
        valor: 0,
        Valor: 'Absent',
      },
      {
        Atributo: '-',
        valor: 1,
        Valor: 'Present',
      },
    ],
  },
  {
    Atributo: 'seed-discolor',
    valor: '?',
    Valor: 'Desconhecido',
    options: [
      {
        Atributo: '-',
        valor: 0,
        Valor: 'Absent',
      },
      {
        Atributo: '-',
        valor: 1,
        Valor: 'Present',
      },
    ],
  },
  {
    Atributo: 'seed-size',
    valor: '?',
    Valor: 'Desconhecido',
    options: [
      {
        Atributo: '-',
        valor: 0,
        Valor: 'Norm',
      },
      {
        Atributo: '-',
        valor: 1,
        Valor: 'lt-norm',
      },
    ],
  },
  {
    Atributo: 'shriveling',
    valor: '?',
    Valor: 'Desconhecido',
    options: [
      {
        Atributo: '-',
        valor: 0,
        Valor: 'Absent',
      },
      {
        Atributo: '-',
        valor: 1,
        Valor: 'Present',
      },
    ],
  },
  {
    Atributo: 'roots',
    valor: '?',
    Valor: 'Desconhecido',
    options: [
      {
        Atributo: '-',
        valor: 0,
        Valor: 'Norm',
      },
      {
        Atributo: '-',
        valor: 1,
        Valor: 'Rotted',
      },
      {
        Atributo: '-',
        valor: 2,
        Valor: 'galls-cysts',
      },
    ],
  },
]
