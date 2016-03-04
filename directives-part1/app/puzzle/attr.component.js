System.register(["angular2/core", 'ng2-material/all'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, all_1;
    var AttributeDirectiveComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (all_1_1) {
                all_1 = all_1_1;
            }],
        execute: function() {
            AttributeDirectiveComponent = (function () {
                function AttributeDirectiveComponent() {
                }
                AttributeDirectiveComponent = __decorate([
                    core_1.Component({
                        selector: 'my-attr-directives',
                        directives: [all_1.MATERIAL_DIRECTIVES],
                        template: "\n    <section class=\"examples\">\n    <div layout=\"column\" class=\"md-inline-form\">\n        <md-toolbar class=\"demo-toolbar md-primary\">\n            <div class=\"md-toolbar-tools\">\n              <h3>Game Setup</h3>\n              <span flex=\"\"></span>\n            </div>\n        </md-toolbar>\n        <md-content layout-padding>\n            <div class=\"section1\">\n                  ...\n            </div>\n        </md-content>\n    </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], AttributeDirectiveComponent);
                return AttributeDirectiveComponent;
            })();
            exports_1("AttributeDirectiveComponent", AttributeDirectiveComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1enpsZS9hdHRyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6WyJBdHRyaWJ1dGVEaXJlY3RpdmVDb21wb25lbnQiLCJBdHRyaWJ1dGVEaXJlY3RpdmVDb21wb25lbnQuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUdBO2dCQXVCSUE7Z0JBRUFDLENBQUNBO2dCQXpCTEQ7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDUEEsUUFBUUEsRUFBRUEsb0JBQW9CQTt3QkFDOUJBLFVBQVVBLEVBQUNBLENBQUNBLHlCQUFtQkEsQ0FBQ0E7d0JBQ2hDQSxRQUFRQSxFQUFFQSxvZEFlVEE7cUJBQ0pBLENBQUNBOztnREFRREE7Z0JBQURBLGtDQUFDQTtZQUFEQSxDQTNCQSxBQTJCQ0EsSUFBQTtZQTNCRCxxRUEyQkMsQ0FBQSIsImZpbGUiOiJwdXp6bGUvYXR0ci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcbmltcG9ydCB7TUFURVJJQUxfRElSRUNUSVZFU30gZnJvbSAnbmcyLW1hdGVyaWFsL2FsbCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktYXR0ci1kaXJlY3RpdmVzJyxcbiAgICBkaXJlY3RpdmVzOltNQVRFUklBTF9ESVJFQ1RJVkVTXSxcbiAgICB0ZW1wbGF0ZTogYFxuICAgIDxzZWN0aW9uIGNsYXNzPVwiZXhhbXBsZXNcIj5cbiAgICA8ZGl2IGxheW91dD1cImNvbHVtblwiIGNsYXNzPVwibWQtaW5saW5lLWZvcm1cIj5cbiAgICAgICAgPG1kLXRvb2xiYXIgY2xhc3M9XCJkZW1vLXRvb2xiYXIgbWQtcHJpbWFyeVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1kLXRvb2xiYXItdG9vbHNcIj5cbiAgICAgICAgICAgICAgPGgzPkdhbWUgU2V0dXA8L2gzPlxuICAgICAgICAgICAgICA8c3BhbiBmbGV4PVwiXCI+PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbWQtdG9vbGJhcj5cbiAgICAgICAgPG1kLWNvbnRlbnQgbGF5b3V0LXBhZGRpbmc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbjFcIj5cbiAgICAgICAgICAgICAgICAgIC4uLlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbWQtY29udGVudD5cbiAgICA8L2Rpdj5cbiAgICBgXG59KVxuXG5leHBvcnQgY2xhc3MgQXR0cmlidXRlRGlyZWN0aXZlQ29tcG9uZW50e1xuXG4gICAgY29uc3RydWN0b3IoKXtcblxuICAgIH1cblxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
