import {Component} from 'angular2/core';
import {PuzzleComponent} from "./puzzle/puzzle.component";
import {MATERIAL_DIRECTIVES} from 'ng2-material/all';
import {SimplePipes} from "./pipes/simplepipes";

@Component({
    selector: 'my-app',
    templateUrl: 'dev/view/pipes.html',
    directives:[SimplePipes, MATERIAL_DIRECTIVES]
})

export class AppComponent {

}
