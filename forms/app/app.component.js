System.register(['angular2/core', 'ng2-material/all', "./forms/formTemplate.component", "./forms/data-form-template.component"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, all_1, formTemplate_component_1, data_form_template_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (all_1_1) {
                all_1 = all_1_1;
            },
            function (formTemplate_component_1_1) {
                formTemplate_component_1 = formTemplate_component_1_1;
            },
            function (data_form_template_component_1_1) {
                data_form_template_component_1 = data_form_template_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n\n        <section class=\"app-content\" flex=\"\" layout=\"column\" layout-align=\"start center\">\n        <h1>Forms Template</h1>\n        <md-content class=\"examples\" layout-padding=\"\" md-scroll-y=\"\">\n            <!--<template-form></template-form>-->\n            <data-template-form></data-template-form>\n        </md-content>\n    ",
                        directives: [all_1.MATERIAL_DIRECTIVES, formTemplate_component_1.TemplateFormComponent, data_form_template_component_1.DataFormTemplate]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOlsiQXBwQ29tcG9uZW50IiwiQXBwQ29tcG9uZW50LmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFLQTtnQkFBQUE7Z0JBZUFDLENBQUNBO2dCQWZERDtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNQQSxRQUFRQSxFQUFFQSxRQUFRQTt3QkFDbEJBLFFBQVFBLEVBQUVBLDhWQVFUQTt3QkFDREEsVUFBVUEsRUFBQ0EsQ0FBQ0EseUJBQW1CQSxFQUFFQSw4Q0FBcUJBLEVBQUVBLCtDQUFnQkEsQ0FBQ0E7cUJBQzVFQSxDQUFDQTs7aUNBR0RBO2dCQUFEQSxtQkFBQ0E7WUFBREEsQ0FmQSxBQWVDQSxJQUFBO1lBZkQsdUNBZUMsQ0FBQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtNQVRFUklBTF9ESVJFQ1RJVkVTfSBmcm9tICduZzItbWF0ZXJpYWwvYWxsJztcbmltcG9ydCB7VGVtcGxhdGVGb3JtQ29tcG9uZW50fSBmcm9tIFwiLi9mb3Jtcy9mb3JtVGVtcGxhdGUuY29tcG9uZW50XCI7XG5pbXBvcnQge0RhdGFGb3JtVGVtcGxhdGV9IGZyb20gXCIuL2Zvcm1zL2RhdGEtZm9ybS10ZW1wbGF0ZS5jb21wb25lbnRcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxuICAgIHRlbXBsYXRlOiBgXG5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJhcHAtY29udGVudFwiIGZsZXg9XCJcIiBsYXlvdXQ9XCJjb2x1bW5cIiBsYXlvdXQtYWxpZ249XCJzdGFydCBjZW50ZXJcIj5cbiAgICAgICAgPGgxPkZvcm1zIFRlbXBsYXRlPC9oMT5cbiAgICAgICAgPG1kLWNvbnRlbnQgY2xhc3M9XCJleGFtcGxlc1wiIGxheW91dC1wYWRkaW5nPVwiXCIgbWQtc2Nyb2xsLXk9XCJcIj5cbiAgICAgICAgICAgIDwhLS08dGVtcGxhdGUtZm9ybT48L3RlbXBsYXRlLWZvcm0+LS0+XG4gICAgICAgICAgICA8ZGF0YS10ZW1wbGF0ZS1mb3JtPjwvZGF0YS10ZW1wbGF0ZS1mb3JtPlxuICAgICAgICA8L21kLWNvbnRlbnQ+XG4gICAgYCxcbiAgICBkaXJlY3RpdmVzOltNQVRFUklBTF9ESVJFQ1RJVkVTLCBUZW1wbGF0ZUZvcm1Db21wb25lbnQsIERhdGFGb3JtVGVtcGxhdGVdXG59KVxuXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
