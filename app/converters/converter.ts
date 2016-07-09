import {Observable, PropertyChangeData} from 'data/observable';
import {InputValue} from '../shared/input-value';
import {OutputValue} from '../shared/output-value';

export class Converter {
    protected _input:InputValue;
    protected _output:OutputValue;

    constructor(input:InputValue) {
        this._input = input;
        this._output = new OutputValue(this.getFractionDigits());
        
        this._input.on(Observable.propertyChangeEvent, this.onInputChange.bind(this));

        this._calculate();
    }

    private onInputChange(data:PropertyChangeData) {
        this._calculate();
    }

    private _calculate() {
        this.calculate();
    }

    protected calculate() {
        var multiplier = this.getMultiplier();

        this._output.from = this.input.safeValue * multiplier;
        this._output.to = this.input.safeValue / multiplier;
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

    public get input():InputValue {
        return this._input;
    }

    public get output():OutputValue {
        return this._output;
    }
}
