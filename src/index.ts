import {Coche} from './model/coche'
import {menu1, menu2} from './vistas/menu'
import {leerTeclado} from './vistas/lecturaTeclado'

const main = async() => {
    let coches: Array<Coche> = new Array()
    let n: number 
    do {
        n = await menu1()
        switch(n){
            case 1:
                console.log('Has seleccionado crear un nuevo coche')
                let matricula:string , consumo:number
                try {
                    matricula=await leerTeclado('Introduce la matrícula del coche en el formato "nnnn abc":')
                    consumo = parseInt( await leerTeclado('Introduce el consumo del vehículo en L/100 km:'))
                    let coche=new Coche(matricula, consumo)
                    let existe = false
                    coches.forEach(Coche => {
                        if (coche.matricula==Coche.matricula){
                            existe=true
                        }
                    });
                    if (existe){
                        console.log('Este coche ya existe')
                    } else{
                        coches.push(coche)
                    }
                } catch (error) {
                    console.log(error)
                }
                break
            case 2:
                if (coches.length==0){
                    console.log('No has creado ningún coche aún')
                } else {
                    console.log('Has elegido ver los coches los coches')
                    coches.forEach(Coche => {
                        console.log(`${Coche.mostrarCoche()}`)
                    });
                }
                break
            case 3:
                console.log('Vas a borrar un coche')
                if (coches.length==0){
                    console.log('No has creado ningún coche aún')
                } else {
                    console.log('Has elegido ver los coches')
                    coches.forEach(Coche => {
                        console.log(`${Coche.mostrarCoche()}`)
                    });
                    let m2:String
                    m2=await leerTeclado('Introduce la matrícula del coche que quiera borrar')
                    let e:boolean=false
                    let index=0
                    coches.forEach(Coche => {
                        if (m2==Coche.matricula){
                            index=coches.indexOf(Coche)
                            e=true
                        }
                    })
                    if (e){
                       coches.splice(index,1)
                    } else {
                        console.log('Ese coche no existe')
                    }
                }
                break
            case 4:
                if (coches.length==0){
                    console.log('No has creado ningún coche aún')
                } else {
                    let m1:string
                    console.log('Elije la matrícula de un coche')
                    coches.forEach(Coche => {
                        console.log(`${Coche.mostrarCoche()}`)
                    });
                    m1=await leerTeclado('Introduce la matrícula del coche')
                    let index:number=-1
                    coches.forEach(Coche => {
                        if(Coche.matricula==m1){
                           index=coches.indexOf(Coche)
                        }
                    });
                    if(index!=-1){
                        let n2:number
                        let miCoche=coches[index]
                        do {
                            n2 = await menu2()
                            switch(n2){
                                case 1:
                                    console.log('Viendo el coche elegido')
                                    console.log(miCoche.mostrarCoche())
                                    break
                                case 2:
                                    if(miCoche.arrancado){
                                        try {
                                            miCoche.estaArrancado()
                                            console.log('Parando coche')
                                        } catch (error) {
                                            console.log(error)
                                        }
                                    }else{
                                        console.log('Arrancando coche')
                                        miCoche.estaArrancado()
                                    }
                                    break
                                case 3:
                                    let v:number
                                    v=parseInt(await leerTeclado("Introduce la nueva velocidad del coche"))
                                    try {
                                      miCoche.velocidad=v 
                                    } catch (error) {
                                        console.log(error)
                                    }
                                    break
                                case 4:
                                    let t:number
                                    try {
                                        t=parseInt(await leerTeclado("Introduce el tiempo(h) que lleva el coche a la velocidad actual"))
                                        console.log(`El coche ha consumido ${miCoche.totalConsumido(t)} L`)
                                    } catch (error) {
                                        console.log(error)
                                    }
                                    break
                                case 0:
                                    console.log('\n- - Volviendo al listado de coches - -')
                                    break
                                default:
                                    console.log("Opción incorrecta")
                                    break
                            }
                        } while (n2!=0);
                    } else{
                        console.log('Este coche no existe')
                    }
                }
                break
            case 0:
                console.log('\n- - Adiós - -')
                break
            default:
                console.log("Opción incorrecta")
                break
        }
    } while (n!=0);
}

main()

