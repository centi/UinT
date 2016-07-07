import {Observable} from 'data/observable';
import {ConverterInfo} from '../shared/interfaces';
import {Converter} from '../converters/converter';
import {converters} from '../converters/converters'

export class ConvertersService {
    private _input: Observable;
    private _allConverters: ConverterInfo[];

    constructor(input: Observable) {
        this._input = input;

        
        this._allConverters = converters.map(c => {
            return {
                name      : c.name,
                converter : new c.converter(this._input)
            }
        })
    }

    public get allConverters():Converter[] {
        return this._allConverters.map(ci => ci.converter);
    }

    public get selectedConverters():Converter[] {
        // TODO: replace with names from settings
        var _names = ['miles-km', 'gallons-l'];
        return this._allConverters.filter(ci => _names.indexOf(ci.name) >= 0).map(ci => ci.converter);
    }
}
