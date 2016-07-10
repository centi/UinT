import {Converter} from './converter';

export class PoundsKgConverter extends Converter {
    constructor() {
        super();

        this.id = 'pound-kg';
        this.label = {
            from : 'Pounds',
            to : 'Kg'
        };
        this.title = `${this.label.from} <-> ${this.label.to}`;
    }

    protected getMultiplier():number {
        return 0.453592;
    }
}
