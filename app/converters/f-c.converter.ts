import {Converter} from './converter';

export class FahrenheitCelsiusConverter extends Converter {
    protected calculate() {
        var multiplier = 1.8;
        var offset = 32;

        this._output.from = (this.input.safeValue - offset) / multiplier; // C to F
        this._output.to = this.input.safeValue * multiplier + offset; // F to C
    }

    public get labels():{from:string; to:string} {
        return {
            from : 'F°',
            to : 'C°'
        }
    }
}
