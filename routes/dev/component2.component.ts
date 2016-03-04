import {Component} from "angular2/core";
import {MATERIAL_DIRECTIVES} from 'ng2-material/all';
import {Router, CanDeactivate, ComponentInstruction} from 'angular2/router';

@Component({
    selector: 'component-two',
    directives:[MATERIAL_DIRECTIVES],
    template:`
    <section class="examples">
        <div layout="column" class="md-inline-form">
            <md-toolbar class="demo-toolbar md-primary">
                <div class="md-toolbar-tools">
                  <h3>Component 2</h3>
                  <span flex=""></span>
                </div>
            </md-toolbar>
            <md-content layout-padding>
                <div class="section1">
                <button
                    (click)="onNavigate()"
                    md-raised-button
                    class="md-accent md-hue-1"
                    >Component 1</button>
                </div>
            </md-content>
        </div>
    </section>
    `
})

export class ComponentTwo implements CanDeactivate{

    constructor(private _router: Router){

    }
    //imperative routing - ex after submitted from - navigate away
    onNavigate(): void{
        this._router.navigate([
            'Component1',
            {source: 'c2'}
        ])
    }
    routerCanDeactivate(nextInstruction: ComponentInstruction, prevInstruction: ComponentInstruction):any{
        return alert('Are you sure you want to leave?');
    }
}
