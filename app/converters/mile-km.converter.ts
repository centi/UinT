import {Converter} from './converter';

export class MilesKmConverter extends Converter {
    protected getMultiplier():number {
        return 1.60934;
    }

    public get labels():{from:string; to:string} {
        return {
            from : 'Miles',
            to : 'Km'
        }
    }
}
