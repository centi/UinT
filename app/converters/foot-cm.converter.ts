import {Converter} from './converter';

export class FeetMConverter extends Converter {
    protected getMultiplier():number {
        return 0.3048;
    }

    public get labels():{from:string; to:string} {
        return {
            from : 'Feet',
            to : 'Meters'
        }
    }
}
