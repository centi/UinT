import {Observable, PropertyChangeData} from 'data/observable';
import {ConvertersService} from '../services/converters-service';
import {Converter} from '../converters/converter';
import {InputValue} from '../shared/input-value';

export class MainViewModel extends Observable {
    private _input:InputValue;
    private _convertersService:ConvertersService;
    private _converters:Converter[];

    constructor() {
        super();

        this._input = new InputValue();
        this._convertersService = new ConvertersService(this._input);
        this._converters = this._convertersService.allConverters;
    }

    public get input():InputValue {
        return this._input;
    }

    public get converters():Converter[] {
        return this._converters;
    }
}

