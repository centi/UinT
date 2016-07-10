import {Observable} from 'data/observable';
import {ConvertersService} from '../../services/converters-service';
import {Converter} from '../../converters/converter';

export class SettingsViewModel extends Observable {
    private _convertersService:ConvertersService;
    private _converters:Converter[];

    constructor() {
        super();

        this._convertersService = new ConvertersService();
        this._converters = this._convertersService.converters;
    }

    get converters():Converter[] {
        return this._converters;
    }
}

