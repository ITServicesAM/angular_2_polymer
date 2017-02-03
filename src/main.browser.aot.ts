/*
 * Angular bootstraping
 */
import {platformBrowser} from '@angular/platform-browser';
import {decorateModuleRef} from './app/environment';
/*
 * App Module
 * our top level module that holds all of our components
 */
import {AppModuleNgFactory} from '../compiled/src/app/app.module.ngfactory';

/*
 * Bootstrap our Angular app with a top level NgModule
 */
export function main(): Promise<any> {
    return platformBrowser()
        .bootstrapModuleFactory(AppModuleNgFactory)
        .then(decorateModuleRef)
        .catch((err) => console.error(err));
}

export function bootstrapDomReady() {
    document.addEventListener('DOMContentLoaded', main);
}

export function bootstrapWebComponentsReady() {
    document.addEventListener('WebComponentsReady', () => {
        console.error("WebComponentsReady")
        bootstrapDomReady();
    });
}

bootstrapWebComponentsReady();

