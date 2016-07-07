import {Converter} from './converter';

export class GallonsLConverter extends Converter {
    protected calculate() {
        var multiplier = 3.78541;
        var from = this._input.get('value') * multiplier;
        var to = this._input.get('value') / multiplier;

        this._output.set('from', from.toFixed(2));
        this._output.set('to', to.toFixed(2));
    }

    public get labels():{from:string; to:string} {
        return {
            from : 'Gallons',
            to : 'Litres'
        }
    }
}
