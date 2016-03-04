import {Component} from 'angular2/core';
import {MATERIAL_DIRECTIVES} from 'ng2-material/all';
import {TemplateFormComponent} from "./forms/formTemplate.component";
import {DataFormTemplate} from "./forms/data-form-template.component";

@Component({
    selector: 'my-app',
    template: `

        <section class="app-content" flex="" layout="column" layout-align="start center">
        <h1>Forms Template</h1>
        <md-content class="examples" layout-padding="" md-scroll-y="">
            <!--<template-form></template-form>-->
            <data-template-form></data-template-form>
        </md-content>
    `,
    directives:[MATERIAL_DIRECTIVES, TemplateFormComponent, DataFormTemplate]
})

export class AppComponent {
}
