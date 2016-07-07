import {Converter} from './converter';

export class MilesKmConverter extends Converter {
    protected calculate() {
        var multiplier = 1.60934;
        var from = this._input.get('value') * multiplier;
        var to = this._input.get('value') / multiplier;

        this._output.set('from', from.toFixed(2));
        this._output.set('to', to.toFixed(2));
    }

    public get labels():{from:string; to:string} {
        return {
            from : 'Miles',
            to : 'Km'
        }
    }
}
