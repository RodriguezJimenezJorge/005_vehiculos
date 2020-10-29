export class Coche {
    private _matricula: string
    private _consumo: number
    private _arrancado: boolean
    private _velocidad: number

    public constructor (matricula: string, consumo:number){
        this._matricula= matricula
        this._consumo= consumo
        this._arrancado= false
        this._velocidad= 0
    }

    public get matricula(){
        return this._matricula
    }

    public get consumo(){
        return this._consumo
    }

    public get arrancado(){
        return this._arrancado
    }

    public get velocidad(){
        return this._velocidad
    }

    public estaArrancado(){
        if(this._arrancado==false){
            this._arrancado=true
        }else{
            this._arrancado=false
            this._velocidad=0
        }
    }

    public set velocidad(v:number){
        if(this._arrancado==false){
            throw 'Error, si el coche está parado no se puede cambiar la velocidad'
        } else {
            this._velocidad=v
        }
    }

    public totalConsumido(t:number){
        return (this._velocidad/t)*(this._consumo/100)
    }

    public mostrarCoche(){
        return `El coche con matrícula ${this.matricula} va a una velocidad de ${this._velocidad} km/h y consume ${this._consumo} L/100 km`
    }


}