System.register(['angular2/core', 'ng2-material/all', "./directive/attr.component", "./directive/structure.directive"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, all_1, attr_component_1, structure_directive_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (all_1_1) {
                all_1 = all_1_1;
            },
            function (attr_component_1_1) {
                attr_component_1 = attr_component_1_1;
            },
            function (structure_directive_1_1) {
                structure_directive_1 = structure_directive_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n\n        <section class=\"app-content\" flex=\"\" layout=\"column\" layout-align=\"start center\">\n        <h1>Directives</h1>\n        <md-content class=\"examples\" layout-padding=\"\" md-scroll-y=\"\">\n            <my-attr-directives></my-attr-directives>\n            <structure-directive></structure-directive>\n        </md-content>\n    ",
                        directives: [all_1.MATERIAL_DIRECTIVES, attr_component_1.AttributeDirectiveComponent, structure_directive_1.StructureDirective]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOlsiQXBwQ29tcG9uZW50IiwiQXBwQ29tcG9uZW50LmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFLQTtnQkFBQUE7Z0JBZUFDLENBQUNBO2dCQWZERDtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNQQSxRQUFRQSxFQUFFQSxRQUFRQTt3QkFDbEJBLFFBQVFBLEVBQUVBLCtWQVFUQTt3QkFDREEsVUFBVUEsRUFBQ0EsQ0FBQ0EseUJBQW1CQSxFQUFFQSw0Q0FBMkJBLEVBQUVBLHdDQUFrQkEsQ0FBQ0E7cUJBQ3BGQSxDQUFDQTs7aUNBR0RBO2dCQUFEQSxtQkFBQ0E7WUFBREEsQ0FmQSxBQWVDQSxJQUFBO1lBZkQsdUNBZUMsQ0FBQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtNQVRFUklBTF9ESVJFQ1RJVkVTfSBmcm9tICduZzItbWF0ZXJpYWwvYWxsJztcbmltcG9ydCB7QXR0cmlidXRlRGlyZWN0aXZlQ29tcG9uZW50fSBmcm9tIFwiLi9kaXJlY3RpdmUvYXR0ci5jb21wb25lbnRcIjtcbmltcG9ydCB7U3RydWN0dXJlRGlyZWN0aXZlfSBmcm9tIFwiLi9kaXJlY3RpdmUvc3RydWN0dXJlLmRpcmVjdGl2ZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LWFwcCcsXG4gICAgdGVtcGxhdGU6IGBcblxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cImFwcC1jb250ZW50XCIgZmxleD1cIlwiIGxheW91dD1cImNvbHVtblwiIGxheW91dC1hbGlnbj1cInN0YXJ0IGNlbnRlclwiPlxuICAgICAgICA8aDE+RGlyZWN0aXZlczwvaDE+XG4gICAgICAgIDxtZC1jb250ZW50IGNsYXNzPVwiZXhhbXBsZXNcIiBsYXlvdXQtcGFkZGluZz1cIlwiIG1kLXNjcm9sbC15PVwiXCI+XG4gICAgICAgICAgICA8bXktYXR0ci1kaXJlY3RpdmVzPjwvbXktYXR0ci1kaXJlY3RpdmVzPlxuICAgICAgICAgICAgPHN0cnVjdHVyZS1kaXJlY3RpdmU+PC9zdHJ1Y3R1cmUtZGlyZWN0aXZlPlxuICAgICAgICA8L21kLWNvbnRlbnQ+XG4gICAgYCxcbiAgICBkaXJlY3RpdmVzOltNQVRFUklBTF9ESVJFQ1RJVkVTLCBBdHRyaWJ1dGVEaXJlY3RpdmVDb21wb25lbnQsIFN0cnVjdHVyZURpcmVjdGl2ZV1cbn0pXG5cbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
