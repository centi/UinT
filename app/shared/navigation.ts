import * as frameModule from 'ui/frame';

export function	startingPage() {
    return 'pages/main/main.page';
}

export function	gotoSettingsPage() {
    frameModule.topmost().navigate({
        moduleName: 'pages/settings/settings.page',
        transition: {
            name: "slideLeft",
            duration: 250,
            curve: "easeIn"
        }
    });
}

export function goBack() {
    frameModule.topmost().goBack();
}
