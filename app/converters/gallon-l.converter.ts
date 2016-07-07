import {Converter} from './converter';

export class GallonsLConverter extends Converter {
    protected getMultiplier():number {
        return 3.78541;
    }

    public get labels():{from:string; to:string} {
        return {
            from : 'Gallons',
            to : 'Litres'
        }
    }
}
