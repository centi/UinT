import {Observable} from 'data/observable';
import {ConverterInfo} from '../shared/interfaces';
import {Converter} from '../converters/converter';
import {MilesKmConverter} from '../converters/mile-km.converter';
import {YardsMConverter} from '../converters/yard-m.converter';
import {PoundsKgConverter} from '../converters/pound-kg.converter';
import {GallonsLConverter} from '../converters/gallon-l.converter';

export class ConvertersService {
    private _input: Observable;
    private _allConverters: ConverterInfo[];

    constructor(input: Observable) {
        this._input = input;

        this._allConverters = [
            {
                name: 'miles-km',
                converter: new MilesKmConverter(this._input)
            },
            {
                name: 'yards-m',
                converter: new YardsMConverter(this._input)
            },
            {
                name: 'pounds-kg',
                converter: new PoundsKgConverter(this._input)
            },
            {
                name: 'gallons-l',
                converter: new GallonsLConverter(this._input)
            }
        ];
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
