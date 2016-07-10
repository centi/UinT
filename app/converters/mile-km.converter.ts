import {Converter} from './converter';

export class MilesKmConverter extends Converter {
    constructor() {
        super();

        this.id = 'mile-km';
        this.label = {
            from : 'Miles',
            to : 'Km'
        };
        this.title = `${this.label.from} <-> ${this.label.to}`;
    }

    protected getMultiplier():number {
        return 1.60934;
    }
}
