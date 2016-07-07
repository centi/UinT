import {Converter} from './converter';

export class YardsMConverter extends Converter {
    protected getMultiplier():number {
        return 0.9144;
    }

    public get labels():{from:string; to:string} {
        return {
            from : 'Yards',
            to : 'Metres'
        }
    }
}
