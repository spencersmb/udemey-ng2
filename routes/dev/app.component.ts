import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {MATERIAL_DIRECTIVES} from 'ng2-material/all';
import {ComponentOne} from "./component1.component";
import {ComponentTwo} from "./component2.component";
import {HomeComponent} from "./home/home.component";

@Component({
    selector: 'my-app',
    template: `

        <section class="app-content" flex="" layout="column" layout-align="start center">
        <h1>Routes</h1>
        <ul>
            <li><a [routerLink]="['Home']">Home</a></li>
            <li><a [routerLink]="['Component1', {source: 'app', optional: 'optional content'}]">Component 1</a></li>
            <li><a [routerLink]="['Component2']">Component 2</a></li>

        </ul>
        <md-content class="examples" layout-padding="" md-scroll-y="">
            <router-outlet></router-outlet>
        </md-content>

    `,
    directives:[MATERIAL_DIRECTIVES, ROUTER_DIRECTIVES]
})
//contains all our routes we want to register
@RouteConfig([
    {path: '/home',        name: 'Home',        component: HomeComponent, useAsDefault: true },
    {path: '/component-1/:source/...', name: 'Component1', component: ComponentOne},
    {path: '/component-2', name: 'Component2', component: ComponentTwo}
])

export class AppComponent {

}
