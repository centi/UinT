import {Converter} from './converter';

export class InchesCmConverter extends Converter {
    protected getMultiplier():number {
        return 2.54;
    }

    public get labels():{from:string; to:string} {
        return {
            from : 'Inches',
            to : 'Cm'
        }
    }
}
