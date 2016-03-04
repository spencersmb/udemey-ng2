System.register(['angular2/core', 'angular2/router', 'ng2-material/all', "./component1.component", "./component2.component", "./home/home.component"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, all_1, component1_component_1, component2_component_1, home_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (all_1_1) {
                all_1 = all_1_1;
            },
            function (component1_component_1_1) {
                component1_component_1 = component1_component_1_1;
            },
            function (component2_component_1_1) {
                component2_component_1 = component2_component_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n\n        <section class=\"app-content\" flex=\"\" layout=\"column\" layout-align=\"start center\">\n        <h1>Routes</h1>\n        <ul>\n            <li><a [routerLink]=\"['Home']\">Home</a></li>\n            <li><a [routerLink]=\"['Component1', {source: 'app', optional: 'optional content'}]\">Component 1</a></li>\n            <li><a [routerLink]=\"['Component2']\">Component 2</a></li>\n\n        </ul>\n        <md-content class=\"examples\" layout-padding=\"\" md-scroll-y=\"\">\n            <router-outlet></router-outlet>\n        </md-content>\n\n    ",
                        directives: [all_1.MATERIAL_DIRECTIVES, router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        { path: '/home', name: 'Home', component: home_component_1.HomeComponent, useAsDefault: true },
                        { path: '/component-1/:source/...', name: 'Component1', component: component1_component_1.ComponentOne },
                        { path: '/component-2', name: 'Component2', component: component2_component_1.ComponentTwo }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOlsiQXBwQ29tcG9uZW50IiwiQXBwQ29tcG9uZW50LmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFPQTtnQkFBQUE7Z0JBNEJBQyxDQUFDQTtnQkE1QkREO29CQUFDQSxnQkFBU0EsQ0FBQ0E7d0JBQ1BBLFFBQVFBLEVBQUVBLFFBQVFBO3dCQUNsQkEsUUFBUUEsRUFBRUEsc2pCQWNUQTt3QkFDREEsVUFBVUEsRUFBQ0EsQ0FBQ0EseUJBQW1CQSxFQUFFQSwwQkFBaUJBLENBQUNBO3FCQUN0REEsQ0FBQ0E7b0JBRURBLG9CQUFXQSxDQUFDQTt3QkFDVEEsRUFBQ0EsSUFBSUEsRUFBRUEsT0FBT0EsRUFBU0EsSUFBSUEsRUFBRUEsTUFBTUEsRUFBU0EsU0FBU0EsRUFBRUEsOEJBQWFBLEVBQUVBLFlBQVlBLEVBQUVBLElBQUlBLEVBQUVBO3dCQUMxRkEsRUFBQ0EsSUFBSUEsRUFBRUEsMEJBQTBCQSxFQUFFQSxJQUFJQSxFQUFFQSxZQUFZQSxFQUFFQSxTQUFTQSxFQUFFQSxtQ0FBWUEsRUFBQ0E7d0JBQy9FQSxFQUFDQSxJQUFJQSxFQUFFQSxjQUFjQSxFQUFFQSxJQUFJQSxFQUFFQSxZQUFZQSxFQUFFQSxTQUFTQSxFQUFFQSxtQ0FBWUEsRUFBQ0E7cUJBQ3RFQSxDQUFDQTs7aUNBSURBO2dCQUFEQSxtQkFBQ0E7WUFBREEsQ0E1QkEsQUE0QkNBLElBQUE7WUE1QkQsdUNBNEJDLENBQUEiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Um91dGVDb25maWcsIFJPVVRFUl9ESVJFQ1RJVkVTfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuaW1wb3J0IHtNQVRFUklBTF9ESVJFQ1RJVkVTfSBmcm9tICduZzItbWF0ZXJpYWwvYWxsJztcbmltcG9ydCB7Q29tcG9uZW50T25lfSBmcm9tIFwiLi9jb21wb25lbnQxLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtDb21wb25lbnRUd299IGZyb20gXCIuL2NvbXBvbmVudDIuY29tcG9uZW50XCI7XG5pbXBvcnQge0hvbWVDb21wb25lbnR9IGZyb20gXCIuL2hvbWUvaG9tZS5jb21wb25lbnRcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxuICAgIHRlbXBsYXRlOiBgXG5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJhcHAtY29udGVudFwiIGZsZXg9XCJcIiBsYXlvdXQ9XCJjb2x1bW5cIiBsYXlvdXQtYWxpZ249XCJzdGFydCBjZW50ZXJcIj5cbiAgICAgICAgPGgxPlJvdXRlczwvaDE+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICAgIDxsaT48YSBbcm91dGVyTGlua109XCJbJ0hvbWUnXVwiPkhvbWU8L2E+PC9saT5cbiAgICAgICAgICAgIDxsaT48YSBbcm91dGVyTGlua109XCJbJ0NvbXBvbmVudDEnLCB7c291cmNlOiAnYXBwJywgb3B0aW9uYWw6ICdvcHRpb25hbCBjb250ZW50J31dXCI+Q29tcG9uZW50IDE8L2E+PC9saT5cbiAgICAgICAgICAgIDxsaT48YSBbcm91dGVyTGlua109XCJbJ0NvbXBvbmVudDInXVwiPkNvbXBvbmVudCAyPC9hPjwvbGk+XG5cbiAgICAgICAgPC91bD5cbiAgICAgICAgPG1kLWNvbnRlbnQgY2xhc3M9XCJleGFtcGxlc1wiIGxheW91dC1wYWRkaW5nPVwiXCIgbWQtc2Nyb2xsLXk9XCJcIj5cbiAgICAgICAgICAgIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cbiAgICAgICAgPC9tZC1jb250ZW50PlxuXG4gICAgYCxcbiAgICBkaXJlY3RpdmVzOltNQVRFUklBTF9ESVJFQ1RJVkVTLCBST1VURVJfRElSRUNUSVZFU11cbn0pXG4vL2NvbnRhaW5zIGFsbCBvdXIgcm91dGVzIHdlIHdhbnQgdG8gcmVnaXN0ZXJcbkBSb3V0ZUNvbmZpZyhbXG4gICAge3BhdGg6ICcvaG9tZScsICAgICAgICBuYW1lOiAnSG9tZScsICAgICAgICBjb21wb25lbnQ6IEhvbWVDb21wb25lbnQsIHVzZUFzRGVmYXVsdDogdHJ1ZSB9LFxuICAgIHtwYXRoOiAnL2NvbXBvbmVudC0xLzpzb3VyY2UvLi4uJywgbmFtZTogJ0NvbXBvbmVudDEnLCBjb21wb25lbnQ6IENvbXBvbmVudE9uZX0sXG4gICAge3BhdGg6ICcvY29tcG9uZW50LTInLCBuYW1lOiAnQ29tcG9uZW50MicsIGNvbXBvbmVudDogQ29tcG9uZW50VHdvfVxuXSlcblxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
