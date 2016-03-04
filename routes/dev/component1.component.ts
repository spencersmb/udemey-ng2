import {Component} from "angular2/core";
import {MATERIAL_DIRECTIVES} from 'ng2-material/all';
import {RouteParams, Router} from 'angular2/router';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Comp1MainComponent} from "./comp1-main.component";
import {Comp1SubComponent} from "./comp2-sub.component";
@Component({
    selector: 'component-one',
    directives:[MATERIAL_DIRECTIVES, ROUTER_DIRECTIVES],
    template:`
        <section class="examples">
            <div layout="column" class="md-inline-form">
                <md-toolbar class="demo-toolbar md-primary">
                    <div class="md-toolbar-tools">
                      <h3>Component 1</h3>
                      <ul>
                          <li><a [routerLink]="['Component1main']">Main</a></li>
                          <li><a [routerLink]="['Component1sub']">Sub</a></li>
                      </ul>
                      <span flex=""></span>
                    </div>
                </md-toolbar>
                <md-content layout-padding>
                    <div class="section1">
                    <p>Source was: {{source}}</p>
                    <p>Option was: {{optional}}</p>
                    </div>
                    <hr>
                </md-content>
            </div>
        </section>
        <router-outlet></router-outlet>
    `
})
@RouteConfig([
    {path:'/', name:'Component1main', component: Comp1MainComponent, useAsDefault:true},
    {path:'/sub', name:'Component1sub', component: Comp1SubComponent}
])

export class ComponentOne{
    source:string;
    optional: string;

    constructor(
        private _routeParams: RouteParams,
        private _router: Router
    ){
        this.source = "";
    }
    ngOnInit(): void{

        //extract router param
        this.source = this._routeParams.get('source');
        this.optional = this._routeParams.get('optional');
    }
}
