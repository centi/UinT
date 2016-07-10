import {Converter} from './converter';

export class GallonsLConverter extends Converter {
    constructor() {
        super();

        this.id = 'gallon-l';
        this.label = {
            from : 'Gallons',
            to : 'Liters'
        };
        this.title = `${this.label.from} <-> ${this.label.to}`;
    }

    protected getMultiplier():number {
        return 3.78541;
    }
}
