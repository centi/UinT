import {Converter} from '../converters/converter';

export interface IInputValue {
    value: number;
    safeValue: number;
}

export interface IOutputValue {
    from: number;
    to: number;
    fromRounded: string;
    toRounded: string;
}

export interface ConverterInfo {
    name: string;
    converter: Converter;
}
