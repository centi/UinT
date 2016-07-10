import {EventData} from 'data/observable';
import {Page} from 'ui/page';
import {MainViewModel} from './main-view.model';
import * as navigationModule from '../../shared/navigation';

let vm = new MainViewModel();

export function pageLoaded(args: EventData) {
    var page = <Page> args.object;

    page.bindingContext = vm;
    vm.init();
}

export function pageNavigatedTo(args: EventData) {
    console.log('navigated to main');
}

export function gotoSettings() {
    navigationModule.gotoSettingsPage();
}
