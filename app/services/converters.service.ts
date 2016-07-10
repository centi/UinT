import {Converter} from '../converters/converter';
import {convertersList} from '../converters/converters'

export class ConvertersService {
    private _converters: Converter[];

    constructor() {
        this._converters = convertersList.map(c => new c());
    }

    get converters(): Converter[] {
        return this._converters;
    }

    get selectedConverters(): Converter[] {
        return this._converters.filter(c => c.isSelected);
    }

    toggleSelected(converter: Converter) {
        converter.isSelected = !converter.isSelected;
    }
}
