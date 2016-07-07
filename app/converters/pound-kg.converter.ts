import {Converter} from './converter';

export class PoundsKgConverter extends Converter {
    protected getMultiplier():number {
        return 0.453592;
    }

    public get labels():{from:string; to:string} {
        return {
            from : 'Pounds',
            to : 'Kg'
        }
    }
}
