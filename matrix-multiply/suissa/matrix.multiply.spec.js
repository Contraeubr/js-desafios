const assert = require( 'assert' )

const matriz1 = [
  [ 1, 2, 3 ],
  [ 4, 5, 6 ]
]

const matriz2 = [
  [ 7,  8  ],
  [ 9,  10 ],
  [ 11, 12 ]
]

const matrizResult = [
  [ 58,  64  ],
  [ 139, 154 ]
]

const conteColunas = ( matriz ) => matriz[ 0 ].length
const conteLinhas = ( matriz ) => 
  matriz.filter( list => Array.isArray( list ) ).length

const possoMultiplicar = ( m1, m2 ) => 
  conteColunas( m1 ) === conteLinhas( m2 )


const multipliqueMatriz = ( linha, coluna ) => {
  const result = linha.reduce( ( acc, cur, pos ) => {
    acc.push( cur * coluna[pos] )
    return acc
  }, [] ).reduce( (a, b) => a+b)
  return result
}

const getLinha = ( pos, matriz ) => matriz[ pos ]
const getColuna = ( pos, matriz ) => matriz.map( ( arr ) => arr[ pos ] )
const testOneValue = ( pos, [ m1, m2 ] = matrizes, matrizFinal ) => 
  assert.deepEqual( matrizFinal[pos][pos],
                    multipliqueMatriz( getLinha( pos, m1 ), 
                                    getColuna( pos, m2 ) ) 
                  )

const specOneValue = {
  title: `Testar se o primeiro valor esta correto`,
  msgOK: `\n\t Primeiro valor - passou!`,
  result: testOneValue( 0, [matriz1, matriz2], matrizResult )
}

const showTitle = ( msg ) => { console.log(msg); return 1 }
const runTest = ( spec ) => 
  ( showTitle( spec.title ) && undefined === spec.result )
    ? console.log( spec.msgOK )
    : console.log( `\n\t FUUUUUUU!` )


runTest( specOneValue )

// const testEqual = ( spec ) => {
//   assert.deepEqual( spec._out, spec.calculated )
// }
// const testLenght = ( spec ) => {
//   assert.deepEqual( spec._out, spec.calculated )
// }
