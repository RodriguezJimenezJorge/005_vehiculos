  
import { leerTeclado } from '../vistas/lecturaTeclado'

export const menu1 = async () => {
    let n: number
    console.log('\n')
    console.log('1. Nuevo coche')
    console.log('2. Ver coches')
    console.log('3. Borrar coche')
    console.log('4. Seleccionar coche')
    console.log('0.- Salir')
    n = parseInt( await leerTeclado('- -Opción- -') )
    return n
}

export const menu2 = async () => {
    let n: number
    console.log('\n')
    console.log('1. Ver coche')
    console.log('2. Arrancar o parar coche')
    console.log('3. Modificar velocidad')
    console.log('4. Consumo coche')
    console.log('0. Salir')
    n = parseInt( await leerTeclado('- -Opción- -') )
    return n
}