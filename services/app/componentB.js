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
    var ComponentB;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (all_1_1) {
                all_1 = all_1_1;
            }],
        execute: function() {
            ComponentB = (function () {
                function ComponentB() {
                }
                ComponentB = __decorate([
                    core_1.Component({
                        selector: 'my-component-B',
                        directives: [all_1.MATERIAL_DIRECTIVES],
                        template: "\n    <section class=\"examples top\">\n        <div layout=\"column\" class=\"md-inline-form\">\n            <md-toolbar class=\"demo-toolbar md-primary\">\n                <div class=\"md-toolbar-tools\">\n                  <h3>Component B</h3>\n                  <span flex=\"\"></span>\n                </div>\n            </md-toolbar>\n            <md-content layout-padding>\n                <div class=\"section1\">\n                    <div layout-gt-sm=\"row\">\n                        <md-input-container class=\"md-block\" flex-gt-sm>\n                            <label>Message</label>\n                            <input md-input #message type=\"text\">\n                        </md-input-container>\n                    </div>\n                    <button  md-raised-button class=\"md-raised md-primary\" (click)=\"onLog(message.value)\">Send</button>\n                </div>\n            </md-content>\n        </div>\n    </section>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], ComponentB);
                return ComponentB;
            })();
            exports_1("ComponentB", ComponentB);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudEIudHMiXSwibmFtZXMiOlsiQ29tcG9uZW50QiIsIkNvbXBvbmVudEIuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUdBO2dCQThCSUE7Z0JBRUFDLENBQUNBO2dCQWhDTEQ7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDUEEsUUFBUUEsRUFBRUEsZ0JBQWdCQTt3QkFDMUJBLFVBQVVBLEVBQUVBLENBQUNBLHlCQUFtQkEsQ0FBQ0E7d0JBQ2pDQSxRQUFRQSxFQUFDQSwrN0JBc0JSQTtxQkFDSkEsQ0FBQ0E7OytCQU9EQTtnQkFBREEsaUJBQUNBO1lBQURBLENBakNBLEFBaUNDQSxJQUFBO1lBakNELG1DQWlDQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudEIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcbmltcG9ydCB7TUFURVJJQUxfRElSRUNUSVZFU30gZnJvbSAnbmcyLW1hdGVyaWFsL2FsbCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktY29tcG9uZW50LUInLFxuICAgIGRpcmVjdGl2ZXM6IFtNQVRFUklBTF9ESVJFQ1RJVkVTXSxcbiAgICB0ZW1wbGF0ZTpgXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJleGFtcGxlcyB0b3BcIj5cbiAgICAgICAgPGRpdiBsYXlvdXQ9XCJjb2x1bW5cIiBjbGFzcz1cIm1kLWlubGluZS1mb3JtXCI+XG4gICAgICAgICAgICA8bWQtdG9vbGJhciBjbGFzcz1cImRlbW8tdG9vbGJhciBtZC1wcmltYXJ5XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1kLXRvb2xiYXItdG9vbHNcIj5cbiAgICAgICAgICAgICAgICAgIDxoMz5Db21wb25lbnQgQjwvaDM+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBmbGV4PVwiXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9tZC10b29sYmFyPlxuICAgICAgICAgICAgPG1kLWNvbnRlbnQgbGF5b3V0LXBhZGRpbmc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb24xXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgbGF5b3V0LWd0LXNtPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bWQtaW5wdXQtY29udGFpbmVyIGNsYXNzPVwibWQtYmxvY2tcIiBmbGV4LWd0LXNtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5NZXNzYWdlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgbWQtaW5wdXQgI21lc3NhZ2UgdHlwZT1cInRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbWQtaW5wdXQtY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiAgbWQtcmFpc2VkLWJ1dHRvbiBjbGFzcz1cIm1kLXJhaXNlZCBtZC1wcmltYXJ5XCIgKGNsaWNrKT1cIm9uTG9nKG1lc3NhZ2UudmFsdWUpXCI+U2VuZDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9tZC1jb250ZW50PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICAgYFxufSlcblxuZXhwb3J0IGNsYXNzIENvbXBvbmVudEJ7XG5cbiAgICBjb25zdHJ1Y3Rvcigpe1xuXG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
