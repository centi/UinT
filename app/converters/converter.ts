import {Observable, PropertyChangeData} from 'data/observable';

export class Converter {
    protected _input:Observable;
    protected _output:Observable;
    private _inputSafeValue:number;

    constructor(input:Observable) {
        this._input = input;
        this._output = new Observable({
            from : 0,
            to : 0
        });
        
        this._input.on(Observable.propertyChangeEvent, this.onInputChange.bind(this));

        this._calculate();
    }

    private onInputChange(data:PropertyChangeData) {
        this._calculate();
    }

    private _calculate() {
        this._inputSafeValue = isNaN(this.input.get('value')) ? 0 : this.input.get('value');
        this.calculate();
    }

    protected calculate() {
        var multiplier = this.getMultiplier();
        var from = this.inputSafeValue * multiplier;
        var to = this.inputSafeValue / multiplier;

        this._output.set('from', from.toFixed(this.getFractionDigits()));
        this._output.set('to', to.toFixed(this.getFractionDigits()));
    }

    protected getMultiplier():number {
        console.log('You need to implement this method.');
        return null
    }

    protected getFractionDigits():number {
        return 1;
    }

    public get labels():{from:string; to:string} {
        console.log('You need to implement this method.');
        return null
    }

    public get input():Observable {
        return this._input;
    }

    public get inputSafeValue():number {
        return this._inputSafeValue;
    }

    public get output():Observable {
        return this._output;
    }
}
