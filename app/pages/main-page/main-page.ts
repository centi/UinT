import {Observable, EventData} from 'data/observable';
import {ObservableArray, ChangedData} from 'data/observable-array';
import {Page} from 'ui/page';
import {MainViewModel} from './main-view-model';

let vm = new MainViewModel();

export function pageLoaded(args: EventData) {
    var page = <Page> args.object;

    page.bindingContext = vm;
}
