System.register(['angular2/core', 'ng2-material/all', "./componentA", "./componentB"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, all_1, componentA_1, componentB_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (all_1_1) {
                all_1 = all_1_1;
            },
            function (componentA_1_1) {
                componentA_1 = componentA_1_1;
            },
            function (componentB_1_1) {
                componentB_1 = componentB_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n\n        <section class=\"app-content\" flex=\"\" layout=\"column\" layout-align=\"start center\">\n        <h1>Services Intro</h1>\n        <md-content class=\"examples\" layout-padding=\"\" md-scroll-y=\"\">\n            <my-component-A></my-component-A>\n            <my-component-B></my-component-B>\n        </md-content>\n    ",
                        directives: [all_1.MATERIAL_DIRECTIVES, componentA_1.ComponentA, componentB_1.ComponentB]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOlsiQXBwQ29tcG9uZW50IiwiQXBwQ29tcG9uZW50LmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFNQTtnQkFBQUE7Z0JBZUFDLENBQUNBO2dCQWZERDtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNQQSxRQUFRQSxFQUFFQSxRQUFRQTt3QkFDbEJBLFFBQVFBLEVBQUVBLGlWQVFUQTt3QkFDREEsVUFBVUEsRUFBQ0EsQ0FBQ0EseUJBQW1CQSxFQUFFQSx1QkFBVUEsRUFBRUEsdUJBQVVBLENBQUNBO3FCQUMzREEsQ0FBQ0E7O2lDQUdEQTtnQkFBREEsbUJBQUNBO1lBQURBLENBZkEsQUFlQ0EsSUFBQTtZQWZELHVDQWVDLENBQUEiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7TUFURVJJQUxfRElSRUNUSVZFU30gZnJvbSAnbmcyLW1hdGVyaWFsL2FsbCc7XG5pbXBvcnQge0NvbXBvbmVudEF9IGZyb20gXCIuL2NvbXBvbmVudEFcIjtcbmltcG9ydCB7Q29tcG9uZW50Qn0gZnJvbSBcIi4vY29tcG9uZW50QlwiO1xuaW1wb3J0IHtMb2dnaW5nU2VydmljZX0gZnJvbSBcIi4vc2VydmljZXMvbG9nZ2luZy5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcbiAgICB0ZW1wbGF0ZTogYFxuXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwiYXBwLWNvbnRlbnRcIiBmbGV4PVwiXCIgbGF5b3V0PVwiY29sdW1uXCIgbGF5b3V0LWFsaWduPVwic3RhcnQgY2VudGVyXCI+XG4gICAgICAgIDxoMT5TZXJ2aWNlcyBJbnRybzwvaDE+XG4gICAgICAgIDxtZC1jb250ZW50IGNsYXNzPVwiZXhhbXBsZXNcIiBsYXlvdXQtcGFkZGluZz1cIlwiIG1kLXNjcm9sbC15PVwiXCI+XG4gICAgICAgICAgICA8bXktY29tcG9uZW50LUE+PC9teS1jb21wb25lbnQtQT5cbiAgICAgICAgICAgIDxteS1jb21wb25lbnQtQj48L215LWNvbXBvbmVudC1CPlxuICAgICAgICA8L21kLWNvbnRlbnQ+XG4gICAgYCxcbiAgICBkaXJlY3RpdmVzOltNQVRFUklBTF9ESVJFQ1RJVkVTLCBDb21wb25lbnRBLCBDb21wb25lbnRCXVxufSlcblxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
