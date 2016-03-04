System.register(["angular2/core", 'ng2-material/all', "./highlight.directive", "./highlightHover.directive"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, all_1, highlight_directive_1, highlightHover_directive_1;
    var AttributeDirectiveComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (all_1_1) {
                all_1 = all_1_1;
            },
            function (highlight_directive_1_1) {
                highlight_directive_1 = highlight_directive_1_1;
            },
            function (highlightHover_directive_1_1) {
                highlightHover_directive_1 = highlightHover_directive_1_1;
            }],
        execute: function() {
            AttributeDirectiveComponent = (function () {
                function AttributeDirectiveComponent() {
                }
                AttributeDirectiveComponent = __decorate([
                    core_1.Component({
                        selector: 'my-attr-directives',
                        directives: [all_1.MATERIAL_DIRECTIVES, highlight_directive_1.HighlightDirective, highlightHover_directive_1.HighlightHoverDirective],
                        template: "\n    <section class=\"examples\">\n        <div layout=\"column\" class=\"md-inline-form\">\n            <md-toolbar class=\"demo-toolbar md-primary\">\n                <div class=\"md-toolbar-tools\">\n                  <h3>Attribute Directives</h3>\n                  <span flex=\"\"></span>\n                </div>\n            </md-toolbar>\n            <md-content layout-padding>\n                <div class=\"section1\">\n                      <div myHighlight>\n                        Simple Hightlight example\n                      </div>\n                      <br>\n                      <div class=\"highlight\" [highlightHover]=\"'blue'\">\n                        Highlight hover example\n                      </div>\n                </div>\n            </md-content>\n        </div>\n    </section>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], AttributeDirectiveComponent);
                return AttributeDirectiveComponent;
            })();
            exports_1("AttributeDirectiveComponent", AttributeDirectiveComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpcmVjdGl2ZS9hdHRyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6WyJBdHRyaWJ1dGVEaXJlY3RpdmVDb21wb25lbnQiLCJBdHRyaWJ1dGVEaXJlY3RpdmVDb21wb25lbnQuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUtBO2dCQThCSUE7Z0JBRUFDLENBQUNBO2dCQWhDTEQ7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDUEEsUUFBUUEsRUFBRUEsb0JBQW9CQTt3QkFDOUJBLFVBQVVBLEVBQUNBLENBQUNBLHlCQUFtQkEsRUFBRUEsd0NBQWtCQSxFQUFFQSxrREFBdUJBLENBQUNBO3dCQUM3RUEsUUFBUUEsRUFBRUEseXpCQXNCVEE7cUJBQ0pBLENBQUNBOztnREFRREE7Z0JBQURBLGtDQUFDQTtZQUFEQSxDQWxDQSxBQWtDQ0EsSUFBQTtZQWxDRCxxRUFrQ0MsQ0FBQSIsImZpbGUiOiJkaXJlY3RpdmUvYXR0ci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcbmltcG9ydCB7TUFURVJJQUxfRElSRUNUSVZFU30gZnJvbSAnbmcyLW1hdGVyaWFsL2FsbCc7XG5pbXBvcnQge0hpZ2hsaWdodERpcmVjdGl2ZX0gZnJvbSBcIi4vaGlnaGxpZ2h0LmRpcmVjdGl2ZVwiO1xuaW1wb3J0IHtIaWdobGlnaHRIb3ZlckRpcmVjdGl2ZX0gZnJvbSBcIi4vaGlnaGxpZ2h0SG92ZXIuZGlyZWN0aXZlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktYXR0ci1kaXJlY3RpdmVzJyxcbiAgICBkaXJlY3RpdmVzOltNQVRFUklBTF9ESVJFQ1RJVkVTLCBIaWdobGlnaHREaXJlY3RpdmUsIEhpZ2hsaWdodEhvdmVyRGlyZWN0aXZlXSxcbiAgICB0ZW1wbGF0ZTogYFxuICAgIDxzZWN0aW9uIGNsYXNzPVwiZXhhbXBsZXNcIj5cbiAgICAgICAgPGRpdiBsYXlvdXQ9XCJjb2x1bW5cIiBjbGFzcz1cIm1kLWlubGluZS1mb3JtXCI+XG4gICAgICAgICAgICA8bWQtdG9vbGJhciBjbGFzcz1cImRlbW8tdG9vbGJhciBtZC1wcmltYXJ5XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1kLXRvb2xiYXItdG9vbHNcIj5cbiAgICAgICAgICAgICAgICAgIDxoMz5BdHRyaWJ1dGUgRGlyZWN0aXZlczwvaDM+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBmbGV4PVwiXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9tZC10b29sYmFyPlxuICAgICAgICAgICAgPG1kLWNvbnRlbnQgbGF5b3V0LXBhZGRpbmc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb24xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBteUhpZ2hsaWdodD5cbiAgICAgICAgICAgICAgICAgICAgICAgIFNpbXBsZSBIaWdodGxpZ2h0IGV4YW1wbGVcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8YnI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhpZ2hsaWdodFwiIFtoaWdobGlnaHRIb3Zlcl09XCInYmx1ZSdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIEhpZ2hsaWdodCBob3ZlciBleGFtcGxlXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L21kLWNvbnRlbnQ+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgICBgXG59KVxuXG5leHBvcnQgY2xhc3MgQXR0cmlidXRlRGlyZWN0aXZlQ29tcG9uZW50e1xuXG4gICAgY29uc3RydWN0b3IoKXtcblxuICAgIH1cblxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
