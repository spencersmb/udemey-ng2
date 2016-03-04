import {Component} from 'angular2/core';
import {PuzzleComponent} from "./puzzle/puzzle.component";
import {MATERIAL_DIRECTIVES} from 'ng2-material/all';

@Component({
    selector: 'my-app',
    template: `

        <section class="app-content" flex="" layout="column" layout-align="start center">
        <h1>Puzzle App</h1>
        <md-content class="examples" layout-padding="" md-scroll-y="">
            <app-puzzle></app-puzzle>
        </md-content>

    `,
    directives:[PuzzleComponent, MATERIAL_DIRECTIVES]
})

export class AppComponent {
}
