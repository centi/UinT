import {Converter} from './converter';

export class OuncesGConverter extends Converter {
    constructor() {
        super();

        this.id = 'ounce-g';
        this.label = {
            from : 'Ounces',
            to : 'G/Ml'
        };
        this.title = `${this.label.from} <-> ${this.label.to}`;
    }

    protected getMultiplier():number {
        return 28.3495; // I use this as an approximation for 'to Ml' conversion
    }
}
