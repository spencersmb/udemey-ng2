import {Component} from 'angular2/core';
import {MATERIAL_DIRECTIVES} from 'ng2-material/all';
import {ComponentA} from "./componentA";
import {ComponentB} from "./componentB";
import {LoggingService} from "./services/logging.service";

@Component({
    selector: 'my-app',
    template: `

        <section class="app-content" flex="" layout="column" layout-align="start center">
        <h1>Services Intro</h1>
        <md-content class="examples" layout-padding="" md-scroll-y="">
            <my-component-A></my-component-A>
            <my-component-B></my-component-B>
        </md-content>
    `,
    directives:[MATERIAL_DIRECTIVES, ComponentA, ComponentB]
})

export class AppComponent {
}
