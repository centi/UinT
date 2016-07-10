import {EventData} from 'data/observable';
import {Page} from 'ui/page';
import {GridLayout} from 'ui/layouts/grid-layout';
import {SettingsViewModel} from './settings-view.model';
import * as navigationModule from '../../shared/navigation';

var vm = new SettingsViewModel();

export function pageLoaded(args: EventData) {
    var page = <Page> args.object;

    page.bindingContext = vm;
}

export function goBack() {
    navigationModule.goBack();
}

export function toggleSelect(args: EventData) {
    /*
    var converterRow = <GridLayout> args.object;
    var ci = <Converter> converterRow.bindingContext;

    convertersService.toggleSelected(ci);
    vm.notifyPropertyChange('converters', vm.converters);
    */
}
