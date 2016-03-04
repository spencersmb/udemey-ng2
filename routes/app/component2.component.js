System.register(["angular2/core", 'ng2-material/all', 'angular2/router'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, all_1, router_1;
    var ComponentTwo;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (all_1_1) {
                all_1 = all_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            ComponentTwo = (function () {
                function ComponentTwo(_router) {
                    this._router = _router;
                }
                //imperative routing - ex after submitted from - navigate away
                ComponentTwo.prototype.onNavigate = function () {
                    this._router.navigate([
                        'Component1',
                        { source: 'c2' }
                    ]);
                };
                ComponentTwo.prototype.routerCanDeactivate = function (nextInstruction, prevInstruction) {
                    return alert('Are you sure you want to leave?');
                };
                ComponentTwo = __decorate([
                    core_1.Component({
                        selector: 'component-two',
                        directives: [all_1.MATERIAL_DIRECTIVES],
                        template: "\n    <section class=\"examples\">\n        <div layout=\"column\" class=\"md-inline-form\">\n            <md-toolbar class=\"demo-toolbar md-primary\">\n                <div class=\"md-toolbar-tools\">\n                  <h3>Component 2</h3>\n                  <span flex=\"\"></span>\n                </div>\n            </md-toolbar>\n            <md-content layout-padding>\n                <div class=\"section1\">\n                <button\n                    (click)=\"onNavigate()\"\n                    md-raised-button\n                    class=\"md-accent md-hue-1\"\n                    >Component 1</button>\n                </div>\n            </md-content>\n        </div>\n    </section>\n    "
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], ComponentTwo);
                return ComponentTwo;
            })();
            exports_1("ComponentTwo", ComponentTwo);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudDIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbIkNvbXBvbmVudFR3byIsIkNvbXBvbmVudFR3by5jb25zdHJ1Y3RvciIsIkNvbXBvbmVudFR3by5vbk5hdmlnYXRlIiwiQ29tcG9uZW50VHdvLnJvdXRlckNhbkRlYWN0aXZhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUlBO2dCQTRCSUEsc0JBQW9CQSxPQUFlQTtvQkFBZkMsWUFBT0EsR0FBUEEsT0FBT0EsQ0FBUUE7Z0JBRW5DQSxDQUFDQTtnQkFDREQsOERBQThEQTtnQkFDOURBLGlDQUFVQSxHQUFWQTtvQkFDSUUsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsUUFBUUEsQ0FBQ0E7d0JBQ2xCQSxZQUFZQTt3QkFDWkEsRUFBQ0EsTUFBTUEsRUFBRUEsSUFBSUEsRUFBQ0E7cUJBQ2pCQSxDQUFDQSxDQUFBQTtnQkFDTkEsQ0FBQ0E7Z0JBQ0RGLDBDQUFtQkEsR0FBbkJBLFVBQW9CQSxlQUFxQ0EsRUFBRUEsZUFBcUNBO29CQUM1RkcsTUFBTUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsaUNBQWlDQSxDQUFDQSxDQUFDQTtnQkFDcERBLENBQUNBO2dCQXhDTEg7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDUEEsUUFBUUEsRUFBRUEsZUFBZUE7d0JBQ3pCQSxVQUFVQSxFQUFDQSxDQUFDQSx5QkFBbUJBLENBQUNBO3dCQUNoQ0EsUUFBUUEsRUFBQ0Esd3NCQW9CUkE7cUJBQ0pBLENBQUNBOztpQ0FpQkRBO2dCQUFEQSxtQkFBQ0E7WUFBREEsQ0F6Q0EsQUF5Q0NBLElBQUE7WUF6Q0QsdUNBeUNDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50Mi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcbmltcG9ydCB7TUFURVJJQUxfRElSRUNUSVZFU30gZnJvbSAnbmcyLW1hdGVyaWFsL2FsbCc7XG5pbXBvcnQge1JvdXRlciwgQ2FuRGVhY3RpdmF0ZSwgQ29tcG9uZW50SW5zdHJ1Y3Rpb259IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnY29tcG9uZW50LXR3bycsXG4gICAgZGlyZWN0aXZlczpbTUFURVJJQUxfRElSRUNUSVZFU10sXG4gICAgdGVtcGxhdGU6YFxuICAgIDxzZWN0aW9uIGNsYXNzPVwiZXhhbXBsZXNcIj5cbiAgICAgICAgPGRpdiBsYXlvdXQ9XCJjb2x1bW5cIiBjbGFzcz1cIm1kLWlubGluZS1mb3JtXCI+XG4gICAgICAgICAgICA8bWQtdG9vbGJhciBjbGFzcz1cImRlbW8tdG9vbGJhciBtZC1wcmltYXJ5XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1kLXRvb2xiYXItdG9vbHNcIj5cbiAgICAgICAgICAgICAgICAgIDxoMz5Db21wb25lbnQgMjwvaDM+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBmbGV4PVwiXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9tZC10b29sYmFyPlxuICAgICAgICAgICAgPG1kLWNvbnRlbnQgbGF5b3V0LXBhZGRpbmc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb24xXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwib25OYXZpZ2F0ZSgpXCJcbiAgICAgICAgICAgICAgICAgICAgbWQtcmFpc2VkLWJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm1kLWFjY2VudCBtZC1odWUtMVwiXG4gICAgICAgICAgICAgICAgICAgID5Db21wb25lbnQgMTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9tZC1jb250ZW50PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICAgYFxufSlcblxuZXhwb3J0IGNsYXNzIENvbXBvbmVudFR3byBpbXBsZW1lbnRzIENhbkRlYWN0aXZhdGV7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcil7XG5cbiAgICB9XG4gICAgLy9pbXBlcmF0aXZlIHJvdXRpbmcgLSBleCBhZnRlciBzdWJtaXR0ZWQgZnJvbSAtIG5hdmlnYXRlIGF3YXlcbiAgICBvbk5hdmlnYXRlKCk6IHZvaWR7XG4gICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbXG4gICAgICAgICAgICAnQ29tcG9uZW50MScsXG4gICAgICAgICAgICB7c291cmNlOiAnYzInfVxuICAgICAgICBdKVxuICAgIH1cbiAgICByb3V0ZXJDYW5EZWFjdGl2YXRlKG5leHRJbnN0cnVjdGlvbjogQ29tcG9uZW50SW5zdHJ1Y3Rpb24sIHByZXZJbnN0cnVjdGlvbjogQ29tcG9uZW50SW5zdHJ1Y3Rpb24pOmFueXtcbiAgICAgICAgcmV0dXJuIGFsZXJ0KCdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gbGVhdmU/Jyk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
