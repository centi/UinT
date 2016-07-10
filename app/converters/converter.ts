import {Observable, PropertyChangeData} from 'data/observable';
import {IConverter, IOutputLabel} from '../shared/interfaces';
import {OutputValue} from '../shared/output-value';

export class Converter extends Observable implements IConverter {
    id: string;
    title: string;
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

    calculate(input:number) {
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
