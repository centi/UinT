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
        var selectedConverters = this._converters.filter(c => c.isSelected);

        if (selectedConverters.length > 0) {
            return selectedConverters;
        }
        else {
            return this._converters;
        }
    }

    toggleSelected(converter: Converter) {
        converter.isSelected = !converter.isSelected;
    }
}
