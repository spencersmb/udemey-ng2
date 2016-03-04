import {Component} from "angular2/core";
import {MATERIAL_DIRECTIVES} from 'ng2-material/all';
import {HighlightDirective} from "./highlight.directive";
import {HighlightHoverDirective} from "./highlightHover.directive";

@Component({
    selector: 'my-attr-directives',
    directives:[MATERIAL_DIRECTIVES, HighlightDirective, HighlightHoverDirective],
    template: `
    <section class="examples">
        <div layout="column" class="md-inline-form">
            <md-toolbar class="demo-toolbar md-primary">
                <div class="md-toolbar-tools">
                  <h3>Attribute Directives</h3>
                  <span flex=""></span>
                </div>
            </md-toolbar>
            <md-content layout-padding>
                <div class="section1">
                      <div myHighlight>
                        Simple Hightlight example
                      </div>
                      <br>
                      <div class="highlight" [highlightHover]="'blue'">
                        Highlight hover example
                      </div>
                </div>
            </md-content>
        </div>
    </section>
    `
})

export class AttributeDirectiveComponent{

    constructor(){

    }

}