System.register(['angular2/core', "./puzzle/puzzle.component", 'ng2-material/all'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, puzzle_component_1, all_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (puzzle_component_1_1) {
                puzzle_component_1 = puzzle_component_1_1;
            },
            function (all_1_1) {
                all_1 = all_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n\n        <section class=\"app-content\" flex=\"\" layout=\"column\" layout-align=\"start center\">\n        <h1>Puzzle App</h1>\n        <md-content class=\"examples\" layout-padding=\"\" md-scroll-y=\"\">\n            <app-puzzle></app-puzzle>\n        </md-content>\n\n    ",
                        directives: [puzzle_component_1.PuzzleComponent, all_1.MATERIAL_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOlsiQXBwQ29tcG9uZW50IiwiQXBwQ29tcG9uZW50LmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFJQTtnQkFBQUE7Z0JBZUFDLENBQUNBO2dCQWZERDtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNQQSxRQUFRQSxFQUFFQSxRQUFRQTt3QkFDbEJBLFFBQVFBLEVBQUVBLHdSQVFUQTt3QkFDREEsVUFBVUEsRUFBQ0EsQ0FBQ0Esa0NBQWVBLEVBQUVBLHlCQUFtQkEsQ0FBQ0E7cUJBQ3BEQSxDQUFDQTs7aUNBR0RBO2dCQUFEQSxtQkFBQ0E7WUFBREEsQ0FmQSxBQWVDQSxJQUFBO1lBZkQsdUNBZUMsQ0FBQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtQdXp6bGVDb21wb25lbnR9IGZyb20gXCIuL3B1enpsZS9wdXp6bGUuY29tcG9uZW50XCI7XG5pbXBvcnQge01BVEVSSUFMX0RJUkVDVElWRVN9IGZyb20gJ25nMi1tYXRlcmlhbC9hbGwnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LWFwcCcsXG4gICAgdGVtcGxhdGU6IGBcblxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cImFwcC1jb250ZW50XCIgZmxleD1cIlwiIGxheW91dD1cImNvbHVtblwiIGxheW91dC1hbGlnbj1cInN0YXJ0IGNlbnRlclwiPlxuICAgICAgICA8aDE+UHV6emxlIEFwcDwvaDE+XG4gICAgICAgIDxtZC1jb250ZW50IGNsYXNzPVwiZXhhbXBsZXNcIiBsYXlvdXQtcGFkZGluZz1cIlwiIG1kLXNjcm9sbC15PVwiXCI+XG4gICAgICAgICAgICA8YXBwLXB1enpsZT48L2FwcC1wdXp6bGU+XG4gICAgICAgIDwvbWQtY29udGVudD5cblxuICAgIGAsXG4gICAgZGlyZWN0aXZlczpbUHV6emxlQ29tcG9uZW50LCBNQVRFUklBTF9ESVJFQ1RJVkVTXVxufSlcblxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
