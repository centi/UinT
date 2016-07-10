import {Converter} from './converter';

export class FahrenheitCelsiusConverter extends Converter {
    constructor() {
        super();

        this.id = 'fahrenheit-celsius';
        this.label = {
            from : '°F',
            to : '°C'
        };
        this.title = 'Fahrenheit <-> Celsius';
    }

    calculate(input:number) {
        var multiplier = 1.8;
        var offset = 32;

        this._output.from = (input - offset) / multiplier; // C to F
        this._output.to = input * multiplier + offset; // F to C
    }
}
