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
    var Comp1SubComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (all_1_1) {
                all_1 = all_1_1;
            }],
        execute: function() {
            Comp1SubComponent = (function () {
                function Comp1SubComponent() {
                }
                Comp1SubComponent = __decorate([
                    core_1.Component({
                        selector: 'comp1-sub',
                        directives: [all_1.MATERIAL_DIRECTIVES],
                        template: "\n    <md-content class=\"md-padding\" layout=\"row\" layout-align=\"center start\" layout-wrap=\"\">\n      <div flex=\"50\" flex-xs=\"100\" layout=\"column\">\n      <md-card>\n        <md-card-title>\n            <md-card-title-text>\n              <span class=\"md-headline\">Component 1 sub route</span>\n            </md-card-title-text>\n          </md-card-title>\n      <md-card-content>\n        <p>\n          The titles of Washed Out's breakthrough song and the first single from Paracosm share the\n          two most important words in Ernest Greene's musical language: feel it. It's a simple request, as well...\n        </p>\n      </md-card-content>\n      <md-card-actions layout=\"row\" layout-align=\"start center\">\n          <md-card-icon-actions>\n            <button md-button class=\"md-icon-button\" aria-label=\"Favorite\">\n              <i md-icon>favorite</i>\n            </button>\n            <button md-button class=\"md-icon-button\" aria-label=\"Share\">\n              <i md-icon>share_arrow</i>\n            </button>\n          </md-card-icon-actions>\n          <button md-button>Action 1</button>\n          <button md-button>Action 2</button>\n        </md-card-actions>\n        </md-card>\n        </div>\n        </md-content>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], Comp1SubComponent);
                return Comp1SubComponent;
            })();
            exports_1("Comp1SubComponent", Comp1SubComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAyLXN1Yi5jb21wb25lbnQudHMiXSwibmFtZXMiOlsiQ29tcDFTdWJDb21wb25lbnQiLCJDb21wMVN1YkNvbXBvbmVudC5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBR0E7Z0JBc0NJQTtnQkFFQUMsQ0FBQ0E7Z0JBeENMRDtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNQQSxRQUFRQSxFQUFFQSxXQUFXQTt3QkFDckJBLFVBQVVBLEVBQUNBLENBQUNBLHlCQUFtQkEsQ0FBQ0E7d0JBQ2hDQSxRQUFRQSxFQUFDQSxnd0NBOEJSQTtxQkFDSkEsQ0FBQ0E7O3NDQU9EQTtnQkFBREEsd0JBQUNBO1lBQURBLENBekNBLEFBeUNDQSxJQUFBO1lBekNELGlEQXlDQyxDQUFBIiwiZmlsZSI6ImNvbXAyLXN1Yi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcbmltcG9ydCB7TUFURVJJQUxfRElSRUNUSVZFU30gZnJvbSAnbmcyLW1hdGVyaWFsL2FsbCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnY29tcDEtc3ViJyxcbiAgICBkaXJlY3RpdmVzOltNQVRFUklBTF9ESVJFQ1RJVkVTXSxcbiAgICB0ZW1wbGF0ZTpgXG4gICAgPG1kLWNvbnRlbnQgY2xhc3M9XCJtZC1wYWRkaW5nXCIgbGF5b3V0PVwicm93XCIgbGF5b3V0LWFsaWduPVwiY2VudGVyIHN0YXJ0XCIgbGF5b3V0LXdyYXA9XCJcIj5cbiAgICAgIDxkaXYgZmxleD1cIjUwXCIgZmxleC14cz1cIjEwMFwiIGxheW91dD1cImNvbHVtblwiPlxuICAgICAgPG1kLWNhcmQ+XG4gICAgICAgIDxtZC1jYXJkLXRpdGxlPlxuICAgICAgICAgICAgPG1kLWNhcmQtdGl0bGUtdGV4dD5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtZC1oZWFkbGluZVwiPkNvbXBvbmVudCAxIHN1YiByb3V0ZTwvc3Bhbj5cbiAgICAgICAgICAgIDwvbWQtY2FyZC10aXRsZS10ZXh0PlxuICAgICAgICAgIDwvbWQtY2FyZC10aXRsZT5cbiAgICAgIDxtZC1jYXJkLWNvbnRlbnQ+XG4gICAgICAgIDxwPlxuICAgICAgICAgIFRoZSB0aXRsZXMgb2YgV2FzaGVkIE91dCdzIGJyZWFrdGhyb3VnaCBzb25nIGFuZCB0aGUgZmlyc3Qgc2luZ2xlIGZyb20gUGFyYWNvc20gc2hhcmUgdGhlXG4gICAgICAgICAgdHdvIG1vc3QgaW1wb3J0YW50IHdvcmRzIGluIEVybmVzdCBHcmVlbmUncyBtdXNpY2FsIGxhbmd1YWdlOiBmZWVsIGl0LiBJdCdzIGEgc2ltcGxlIHJlcXVlc3QsIGFzIHdlbGwuLi5cbiAgICAgICAgPC9wPlxuICAgICAgPC9tZC1jYXJkLWNvbnRlbnQ+XG4gICAgICA8bWQtY2FyZC1hY3Rpb25zIGxheW91dD1cInJvd1wiIGxheW91dC1hbGlnbj1cInN0YXJ0IGNlbnRlclwiPlxuICAgICAgICAgIDxtZC1jYXJkLWljb24tYWN0aW9ucz5cbiAgICAgICAgICAgIDxidXR0b24gbWQtYnV0dG9uIGNsYXNzPVwibWQtaWNvbi1idXR0b25cIiBhcmlhLWxhYmVsPVwiRmF2b3JpdGVcIj5cbiAgICAgICAgICAgICAgPGkgbWQtaWNvbj5mYXZvcml0ZTwvaT5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBtZC1idXR0b24gY2xhc3M9XCJtZC1pY29uLWJ1dHRvblwiIGFyaWEtbGFiZWw9XCJTaGFyZVwiPlxuICAgICAgICAgICAgICA8aSBtZC1pY29uPnNoYXJlX2Fycm93PC9pPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9tZC1jYXJkLWljb24tYWN0aW9ucz5cbiAgICAgICAgICA8YnV0dG9uIG1kLWJ1dHRvbj5BY3Rpb24gMTwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gbWQtYnV0dG9uPkFjdGlvbiAyPC9idXR0b24+XG4gICAgICAgIDwvbWQtY2FyZC1hY3Rpb25zPlxuICAgICAgICA8L21kLWNhcmQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8L21kLWNvbnRlbnQ+XG4gICAgYFxufSlcblxuZXhwb3J0IGNsYXNzIENvbXAxU3ViQ29tcG9uZW50e1xuXG4gICAgY29uc3RydWN0b3IoKXtcblxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
