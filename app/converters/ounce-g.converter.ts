import {Converter} from './converter';

export class OuncesGConverter extends Converter {
    protected getMultiplier():number {
        return 28.3495; // I use this as an approximation for 'to Ml' conversion
    }

    public get labels():{from:string; to:string} {
        return {
            from : 'Ounces',
            to : 'G/Ml'
        }
    }
}
