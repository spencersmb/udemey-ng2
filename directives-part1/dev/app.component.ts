import {Component} from 'angular2/core';
import {MATERIAL_DIRECTIVES} from 'ng2-material/all';
import {AttributeDirectiveComponent} from "./directive/attr.component";
import {StructureDirective} from "./directive/structure.directive";

@Component({
    selector: 'my-app',
    template: `

        <section class="app-content" flex="" layout="column" layout-align="start center">
        <h1>Directives</h1>
        <md-content class="examples" layout-padding="" md-scroll-y="">
            <my-attr-directives></my-attr-directives>
            <structure-directive></structure-directive>
        </md-content>
    `,
    directives:[MATERIAL_DIRECTIVES, AttributeDirectiveComponent, StructureDirective]
})

export class AppComponent {
}
