import {Converter} from './converter';

export class InchesCmConverter extends Converter {
    constructor() {
        super();

        this.id = 'inch-cm';
        this.label = {
            from : 'Inches',
            to : 'Cm'
        };
        this.title = `${this.label.from} <-> ${this.label.to}`;
    }

    protected getMultiplier():number {
        return 2.54;
    }
}
