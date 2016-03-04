import {Component} from "angular2/core";
import {MATERIAL_DIRECTIVES} from 'ng2-material/all';

@Component({
    selector: 'comp1-main',
    directives:[MATERIAL_DIRECTIVES],
    template:`
    <md-content class="md-padding" layout="row" layout-align="center start" layout-wrap="">
      <div flex="50" flex-xs="100" layout="column">
      <md-card>
        <md-card-title>
            <md-card-title-text>
              <span class="md-headline">Component 1 Main child route</span>
            </md-card-title-text>
          </md-card-title>
      <md-card-content>
        <p>
          The titles of Washed Out's breakthrough song and the first single from Paracosm share the
          two most important words in Ernest Greene's musical language: feel it. It's a simple request, as well...
        </p>
      </md-card-content>
      <md-card-actions layout="row" layout-align="start center">
          <md-card-icon-actions>
            <button md-button class="md-icon-button" aria-label="Favorite">
              <i md-icon>favorite</i>
            </button>
            <button md-button class="md-icon-button" aria-label="Share">
              <i md-icon>share_arrow</i>
            </button>
          </md-card-icon-actions>
          <button md-button>Action 1</button>
          <button md-button>Action 2</button>
        </md-card-actions>
        </md-card>
        </div>
        </md-content>
    `
})

export class Comp1MainComponent{

    constructor(){

    }
}