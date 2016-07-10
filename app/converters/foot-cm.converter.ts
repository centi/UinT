import {Converter} from './converter';

export class FeetMConverter extends Converter {
    constructor() {
        super();

        this.id = 'foot-cm';
        this.label = {
            from : 'Feet',
            to : 'Meters'
        };
        this.title = `${this.label.from} <-> ${this.label.to}`;
    }

    protected getMultiplier():number {
        return 0.3048;
    }
}
