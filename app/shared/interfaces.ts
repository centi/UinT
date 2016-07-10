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

export interface IOutputLabel {
    from: string;
    to: string;
}

export interface IConverter {
    id: string;
    title: string;
    label: IOutputLabel;
    isSelected: boolean;
    output: IOutputValue;
}
