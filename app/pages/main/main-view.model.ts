import {Observable, PropertyChangeData} from 'data/observable';
import {ConvertersService} from '../../services/converters.service';
import {Converter} from '../../converters/converter';
import {InputValue} from '../../shared/input-value';

export class MainViewModel extends Observable {
    private _input:InputValue;
    private _convertersService:ConvertersService;
    private _converters:Converter[];

    constructor() {
        super();

        this._input = new InputValue();
        this._input.on(Observable.propertyChangeEvent, this.onInputChange.bind(this))
        this._convertersService = new ConvertersService();
    }

    private onInputChange(data:PropertyChangeData) {
        this.calculate();
    }

    private calculate() {
        this._converters.forEach(c => c.calculate(this._input.safeValue));
    }

    init() {
        this._converters = this._convertersService.selectedConverters;
        this.calculate();
        this.notifyPropertyChange('converters', this._converters);
    }

    get input():InputValue {
        return this._input;
    }

    get converters():Converter[] {
        return this._converters;
    }
}

