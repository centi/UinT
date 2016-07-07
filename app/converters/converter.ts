import {Observable, PropertyChangeData} from 'data/observable';

export class Converter {
    protected _input:Observable;
    protected _output:Observable;

    constructor(input:Observable) {
        this._input = input;
        this._output = new Observable({
            from : 0,
            to : 0
        });
        
        this._input.on(Observable.propertyChangeEvent, this.onInputChange.bind(this));

        this.calculate();
    }

    private onInputChange(data:PropertyChangeData) {
        this.calculate();
    }

    protected calculate() {
        console.log('You need to implement this method.');
    }

    public get labels():{from:string; to:string} {
        console.log('You need to implement this method.');
        return null
    }

    public get input():Observable {
        return this._input;
    }

    public get output():Observable {
        return this._output;
    }
}
