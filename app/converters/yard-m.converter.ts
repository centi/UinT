import {Converter} from './converter';

export class YardsMConverter extends Converter {
    constructor() {
        super();

        this.id = 'yard-m';
        this.label = {
            from : 'Yards',
            to : 'Meters'
        };
        this.title = `${this.label.from} <-> ${this.label.to}`;
    }

    protected getMultiplier():number {
        return 0.9144;
    }
}
