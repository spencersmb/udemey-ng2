System.register(["angular2/core", 'ng2-material/all', 'angular2/router', "./comp1-main.component", "./comp2-sub.component"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, all_1, router_1, router_2, comp1_main_component_1, comp2_sub_component_1;
    var ComponentOne;
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
                router_2 = router_1_1;
            },
            function (comp1_main_component_1_1) {
                comp1_main_component_1 = comp1_main_component_1_1;
            },
            function (comp2_sub_component_1_1) {
                comp2_sub_component_1 = comp2_sub_component_1_1;
            }],
        execute: function() {
            ComponentOne = (function () {
                function ComponentOne(_routeParams, _router) {
                    this._routeParams = _routeParams;
                    this._router = _router;
                    this.source = "";
                }
                ComponentOne.prototype.ngOnInit = function () {
                    //extract router param
                    this.source = this._routeParams.get('source');
                    this.optional = this._routeParams.get('optional');
                };
                ComponentOne = __decorate([
                    core_1.Component({
                        selector: 'component-one',
                        directives: [all_1.MATERIAL_DIRECTIVES, router_2.ROUTER_DIRECTIVES],
                        template: "\n        <section class=\"examples\">\n            <div layout=\"column\" class=\"md-inline-form\">\n                <md-toolbar class=\"demo-toolbar md-primary\">\n                    <div class=\"md-toolbar-tools\">\n                      <h3>Component 1</h3>\n                      <ul>\n                          <li><a [routerLink]=\"['Component1main']\">Main</a></li>\n                          <li><a [routerLink]=\"['Component1sub']\">Sub</a></li>\n                      </ul>\n                      <span flex=\"\"></span>\n                    </div>\n                </md-toolbar>\n                <md-content layout-padding>\n                    <div class=\"section1\">\n                    <p>Source was: {{source}}</p>\n                    <p>Option was: {{optional}}</p>\n                    </div>\n                    <hr>\n                </md-content>\n            </div>\n        </section>\n        <router-outlet></router-outlet>\n    "
                    }),
                    router_2.RouteConfig([
                        { path: '/', name: 'Component1main', component: comp1_main_component_1.Comp1MainComponent, useAsDefault: true },
                        { path: '/sub', name: 'Component1sub', component: comp2_sub_component_1.Comp1SubComponent }
                    ]), 
                    __metadata('design:paramtypes', [router_1.RouteParams, router_1.Router])
                ], ComponentOne);
                return ComponentOne;
            })();
            exports_1("ComponentOne", ComponentOne);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudDEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbIkNvbXBvbmVudE9uZSIsIkNvbXBvbmVudE9uZS5jb25zdHJ1Y3RvciIsIkNvbXBvbmVudE9uZS5uZ09uSW5pdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU1BO2dCQXFDSUEsc0JBQ1lBLFlBQXlCQSxFQUN6QkEsT0FBZUE7b0JBRGZDLGlCQUFZQSxHQUFaQSxZQUFZQSxDQUFhQTtvQkFDekJBLFlBQU9BLEdBQVBBLE9BQU9BLENBQVFBO29CQUV2QkEsSUFBSUEsQ0FBQ0EsTUFBTUEsR0FBR0EsRUFBRUEsQ0FBQ0E7Z0JBQ3JCQSxDQUFDQTtnQkFDREQsK0JBQVFBLEdBQVJBO29CQUVJRSxzQkFBc0JBO29CQUN0QkEsSUFBSUEsQ0FBQ0EsTUFBTUEsR0FBR0EsSUFBSUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQ0E7b0JBQzlDQSxJQUFJQSxDQUFDQSxRQUFRQSxHQUFHQSxJQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxHQUFHQSxDQUFDQSxVQUFVQSxDQUFDQSxDQUFDQTtnQkFDdERBLENBQUNBO2dCQWhETEY7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDUEEsUUFBUUEsRUFBRUEsZUFBZUE7d0JBQ3pCQSxVQUFVQSxFQUFDQSxDQUFDQSx5QkFBbUJBLEVBQUVBLDBCQUFpQkEsQ0FBQ0E7d0JBQ25EQSxRQUFRQSxFQUFDQSxnOEJBdUJSQTtxQkFDSkEsQ0FBQ0E7b0JBQ0RBLG9CQUFXQSxDQUFDQTt3QkFDVEEsRUFBQ0EsSUFBSUEsRUFBQ0EsR0FBR0EsRUFBRUEsSUFBSUEsRUFBQ0EsZ0JBQWdCQSxFQUFFQSxTQUFTQSxFQUFFQSx5Q0FBa0JBLEVBQUVBLFlBQVlBLEVBQUNBLElBQUlBLEVBQUNBO3dCQUNuRkEsRUFBQ0EsSUFBSUEsRUFBQ0EsTUFBTUEsRUFBRUEsSUFBSUEsRUFBQ0EsZUFBZUEsRUFBRUEsU0FBU0EsRUFBRUEsdUNBQWlCQSxFQUFDQTtxQkFDcEVBLENBQUNBOztpQ0FrQkRBO2dCQUFEQSxtQkFBQ0E7WUFBREEsQ0FqREEsQUFpRENBLElBQUE7WUFqREQsdUNBaURDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50MS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcbmltcG9ydCB7TUFURVJJQUxfRElSRUNUSVZFU30gZnJvbSAnbmcyLW1hdGVyaWFsL2FsbCc7XG5pbXBvcnQge1JvdXRlUGFyYW1zLCBSb3V0ZXJ9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5pbXBvcnQge1JvdXRlQ29uZmlnLCBST1VURVJfRElSRUNUSVZFU30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbmltcG9ydCB7Q29tcDFNYWluQ29tcG9uZW50fSBmcm9tIFwiLi9jb21wMS1tYWluLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtDb21wMVN1YkNvbXBvbmVudH0gZnJvbSBcIi4vY29tcDItc3ViLmNvbXBvbmVudFwiO1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdjb21wb25lbnQtb25lJyxcbiAgICBkaXJlY3RpdmVzOltNQVRFUklBTF9ESVJFQ1RJVkVTLCBST1VURVJfRElSRUNUSVZFU10sXG4gICAgdGVtcGxhdGU6YFxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cImV4YW1wbGVzXCI+XG4gICAgICAgICAgICA8ZGl2IGxheW91dD1cImNvbHVtblwiIGNsYXNzPVwibWQtaW5saW5lLWZvcm1cIj5cbiAgICAgICAgICAgICAgICA8bWQtdG9vbGJhciBjbGFzcz1cImRlbW8tdG9vbGJhciBtZC1wcmltYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZC10b29sYmFyLXRvb2xzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGgzPkNvbXBvbmVudCAxPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBbcm91dGVyTGlua109XCJbJ0NvbXBvbmVudDFtYWluJ11cIj5NYWluPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBbcm91dGVyTGlua109XCJbJ0NvbXBvbmVudDFzdWInXVwiPlN1YjwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gZmxleD1cIlwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9tZC10b29sYmFyPlxuICAgICAgICAgICAgICAgIDxtZC1jb250ZW50IGxheW91dC1wYWRkaW5nPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbjFcIj5cbiAgICAgICAgICAgICAgICAgICAgPHA+U291cmNlIHdhczoge3tzb3VyY2V9fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHA+T3B0aW9uIHdhczoge3tvcHRpb25hbH19PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGhyPlxuICAgICAgICAgICAgICAgIDwvbWQtY29udGVudD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cbiAgICBgXG59KVxuQFJvdXRlQ29uZmlnKFtcbiAgICB7cGF0aDonLycsIG5hbWU6J0NvbXBvbmVudDFtYWluJywgY29tcG9uZW50OiBDb21wMU1haW5Db21wb25lbnQsIHVzZUFzRGVmYXVsdDp0cnVlfSxcbiAgICB7cGF0aDonL3N1YicsIG5hbWU6J0NvbXBvbmVudDFzdWInLCBjb21wb25lbnQ6IENvbXAxU3ViQ29tcG9uZW50fVxuXSlcblxuZXhwb3J0IGNsYXNzIENvbXBvbmVudE9uZXtcbiAgICBzb3VyY2U6c3RyaW5nO1xuICAgIG9wdGlvbmFsOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBfcm91dGVQYXJhbXM6IFJvdXRlUGFyYW1zLFxuICAgICAgICBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlclxuICAgICl7XG4gICAgICAgIHRoaXMuc291cmNlID0gXCJcIjtcbiAgICB9XG4gICAgbmdPbkluaXQoKTogdm9pZHtcblxuICAgICAgICAvL2V4dHJhY3Qgcm91dGVyIHBhcmFtXG4gICAgICAgIHRoaXMuc291cmNlID0gdGhpcy5fcm91dGVQYXJhbXMuZ2V0KCdzb3VyY2UnKTtcbiAgICAgICAgdGhpcy5vcHRpb25hbCA9IHRoaXMuX3JvdXRlUGFyYW1zLmdldCgnb3B0aW9uYWwnKTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
