import {Converter} from './converter';

export class InchesCmConverter extends Converter {
    constructor() {
        super();

        this.id = 'inch-cm';
        this.label = {
            from : 'Inches',
            to : 'Cm'
        };
    }

    protected getMultiplier():number {
        return 2.54;
    }
}
