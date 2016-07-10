import {Observable} from 'data/observable';
import {IOutputValue} from './interfaces';

export class OutputValue extends Observable implements IOutputValue {
    private _from:number;
    private _to:number;
    private _fractionDigits:number;

    constructor(fractionDigits:number) {
        super();

        this._from = 0;
        this._to = 0;
        this._fractionDigits = fractionDigits;
    }

    get from():number {
        return this._from;
    }

    get fromRounded():string {
        return this._from.toFixed(this._fractionDigits);
    }

    set from(value:number) {
        this._from = value;
        this.notifyPropertyChange('from', value);
        this.notifyPropertyChange('fromRounded', this.fromRounded);
    }

    get to():number {
        return this._to;
    }

    get toRounded():string {
        return this._to.toFixed(this._fractionDigits);
    }

    set to(value:number) {
        this._to = value;
        this.notifyPropertyChange('to', value);
        this.notifyPropertyChange('toRounded', this.toRounded);
    }
}
