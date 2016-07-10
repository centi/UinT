import {Observable} from 'data/observable';
import {IInputValue} from './interfaces';

export class InputValue extends Observable implements IInputValue {
    private _value:number;

    constructor() {
        super();
    }

    get value() {
        return this._value;
    }

    set value(value:number) {
        this._value = value;
        this.notifyPropertyChange('value', value);
        this.notifyPropertyChange('safeValue', this.safeValue);
    }

    get safeValue() {
        return isNaN(this._value) ? 0 : this._value;
    }
}
