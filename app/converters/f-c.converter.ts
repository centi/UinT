import {Converter} from './converter';

export class FahrenheitCelsiusConverter extends Converter {
    protected calculate() {
        var multiplier = 1.8;
        var offset = 32;
        var from = (this.inputSafeValue - offset) / multiplier; // C to F
        var to = this.inputSafeValue * multiplier + offset; // F to C

        this._output.set('from', from.toFixed(this.getFractionDigits()));
        this._output.set('to', to.toFixed(this.getFractionDigits()));
    }

    public get labels():{from:string; to:string} {
        return {
            from : 'F°',
            to : 'C°'
        }
    }
}
