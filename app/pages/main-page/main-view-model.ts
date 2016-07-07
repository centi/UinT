import {Observable, PropertyChangeData} from 'data/observable';
import {ConvertersService} from '../../services/converters-service';
import {Converter} from '../../converters/converter';

export class MainViewModel extends Observable {
    private _input:Observable;
    private _convertersService:ConvertersService;
    private _converters:Converter[];

    constructor() {
        super();

        this._input = new Observable({
            value : 1
        });
        this._convertersService = new ConvertersService(this._input);
        this._converters = this._convertersService.selectedConverters;
    }

    public get input():Observable {
        return this._input;
    }

    public get converters():Converter[] {
        return this._converters;
    }
}

