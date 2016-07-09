import {Observable, PropertyChangeData} from 'data/observable';
import {IConverter, IOutputLabel} from '../shared/interfaces';
import {OutputValue} from '../shared/output-value';

export class Converter extends Observable implements IConverter {
    id: string;
    label: IOutputLabel;
    protected _output: OutputValue;
    protected _isSelected: boolean;

    constructor() {
        super();

        this._output = new OutputValue(this.getFractionDigits());
    }

    get output():OutputValue {
        return this._output;
    }

    get isSelected():boolean {
        return this._isSelected;
    }

    protected calculate(input:number) {
        var multiplier = this.getMultiplier();

        this._output.from = input * multiplier;
        this._output.to = input / multiplier;
    }

    protected getFractionDigits():number {
        return 1;
    }

    protected getMultiplier():number {
        return 1;
    }
}

/*
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
*/
