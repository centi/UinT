import {IConverterInfo} from '../shared/interfaces'
import * as appSettingsModule from 'application-settings';

var SELECTED_CONVERTERS = 'SELECTED_CONVERTERS';

export var selected: IConverterInfo[];

try {
    selected = <IConverterInfo[]> JSON.parse(appSettingsModule.getString(SELECTED_CONVERTERS, '[]'));
}
catch (error) {
    console.log('Error while retrieveing selected converters: ' + error);
    selected = [];
}

export function findConverterIndexInSelected(id: string): number {
    for (var i = 0; i < selected.length; i++) {
        if (selected[i].id === id) {
            return i;
        }
    }
    return -1;
}

export function addToSelected(ci: IConverterInfo) {
    if (findConverterIndexInSelected(ci.id) >= 0) {
        // Converter selected.
        return;
    }
    persistConverterToSelected(ci);
}

export function removeFromSelected(ci: IConverterInfo) {
    var index = findConverterIndexInSelected(ci.id);
    if (index >= 0) {
        selected.splice(index, 1);
        updateSelected();
    }
}

function persistConverterToSelected(ci: IConverterInfo) {
    selected.push(ci);
    updateSelected();
}

function updateSelected() {
    var newValue = JSON.stringify(selected);
    console.log('selected converters: ' + newValue);
    appSettingsModule.setString(SELECTED_CONVERTERS, newValue);
}
