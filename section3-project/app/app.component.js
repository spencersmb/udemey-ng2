System.register(['angular2/core', "./bindings/input.component", 'ng2-material/all', "./bindings/confirmComponent", "angular2/src/core/change_detection/change_detector_ref"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, input_component_1, all_1, confirmComponent_1, change_detector_ref_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (input_component_1_1) {
                input_component_1 = input_component_1_1;
            },
            function (all_1_1) {
                all_1 = all_1_1;
            },
            function (confirmComponent_1_1) {
                confirmComponent_1 = confirmComponent_1_1;
            },
            function (change_detector_ref_1_1) {
                change_detector_ref_1 = change_detector_ref_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(cdr) {
                    this.cdr = cdr;
                    this.mySelf = {
                        name: '',
                        age: ''
                    };
                    this.confirmedMyself = {
                        name: '',
                        age: ''
                    };
                }
                //Using change detection until we have tested using proper form setup for passing data
                AppComponent.prototype.onSubmit = function (mySelf) {
                    //this creates a new object so we don't just 2 way databind to the ref object passed from the first form.
                    this.mySelf = {
                        name: mySelf.name,
                        age: mySelf.age
                    };
                    this.cdr.detectChanges();
                };
                AppComponent.prototype.onConfirm = function (mySelf) {
                    this.confirmedMyself = {
                        name: mySelf.name,
                        age: mySelf.age
                    };
                    this.cdr.detectChanges();
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    <section class=\"app-content\" flex=\"\" layout=\"column\" layout-align=\"start center\">\n        <md-content class=\"examples\" layout-padding=\"\" md-scroll-y=\"\">\n            <!-- catch the submit event with the emitter -->\n            <!-- when this catches an event it fires the function -->\n            <my-input (submitted)=\"onSubmit($event)\" [mySelf]=\"confirmedMyself\"></my-input>\n\n            <confirm (confirmed)=\"onConfirm($event)\" [mySelf]=\"mySelf\"></confirm>\n\n        </md-content>\n    </section>\n    ",
                        directives: [input_component_1.InputComponent, all_1.MATERIAL_DIRECTIVES, confirmComponent_1.confirmComponent]
                    }), 
                    __metadata('design:paramtypes', [change_detector_ref_1.ChangeDetectorRef])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOlsiQXBwQ29tcG9uZW50IiwiQXBwQ29tcG9uZW50LmNvbnN0cnVjdG9yIiwiQXBwQ29tcG9uZW50Lm9uU3VibWl0IiwiQXBwQ29tcG9uZW50Lm9uQ29uZmlybSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBT0E7Z0JBc0JJQSxzQkFBb0JBLEdBQXNCQTtvQkFBdEJDLFFBQUdBLEdBQUhBLEdBQUdBLENBQW1CQTtvQkFDdENBLElBQUlBLENBQUNBLE1BQU1BLEdBQUdBO3dCQUNWQSxJQUFJQSxFQUFFQSxFQUFFQTt3QkFDUkEsR0FBR0EsRUFBRUEsRUFBRUE7cUJBQ1ZBLENBQUNBO29CQUNGQSxJQUFJQSxDQUFDQSxlQUFlQSxHQUFHQTt3QkFDbkJBLElBQUlBLEVBQUVBLEVBQUVBO3dCQUNSQSxHQUFHQSxFQUFFQSxFQUFFQTtxQkFDVkEsQ0FBQUE7Z0JBQ0xBLENBQUNBO2dCQUVERCxzRkFBc0ZBO2dCQUN0RkEsK0JBQVFBLEdBQVJBLFVBQVNBLE1BQWlCQTtvQkFFdEJFLHlHQUF5R0E7b0JBQ3pHQSxJQUFJQSxDQUFDQSxNQUFNQSxHQUFHQTt3QkFDVkEsSUFBSUEsRUFBRUEsTUFBTUEsQ0FBQ0EsSUFBSUE7d0JBQ2pCQSxHQUFHQSxFQUFFQSxNQUFNQSxDQUFDQSxHQUFHQTtxQkFDbEJBLENBQUNBO29CQUNGQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxhQUFhQSxFQUFFQSxDQUFDQTtnQkFDN0JBLENBQUNBO2dCQUNERixnQ0FBU0EsR0FBVEEsVUFBVUEsTUFBaUJBO29CQUV2QkcsSUFBSUEsQ0FBQ0EsZUFBZUEsR0FBR0E7d0JBQ25CQSxJQUFJQSxFQUFFQSxNQUFNQSxDQUFDQSxJQUFJQTt3QkFDakJBLEdBQUdBLEVBQUVBLE1BQU1BLENBQUNBLEdBQUdBO3FCQUNsQkEsQ0FBQ0E7b0JBQ0ZBLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLGFBQWFBLEVBQUVBLENBQUNBO2dCQUM3QkEsQ0FBQ0E7Z0JBbERMSDtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNQQSxRQUFRQSxFQUFFQSxRQUFRQTt3QkFDbEJBLFFBQVFBLEVBQUVBLDZoQkFXVEE7d0JBQ0RBLFVBQVVBLEVBQUNBLENBQUNBLGdDQUFjQSxFQUFFQSx5QkFBbUJBLEVBQUVBLG1DQUFnQkEsQ0FBQ0E7cUJBQ3JFQSxDQUFDQTs7aUNBb0NEQTtnQkFBREEsbUJBQUNBO1lBQURBLENBbkRBLEFBbURDQSxJQUFBO1lBbkRELHVDQW1EQyxDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0RhdGFNb2RlbH0gZnJvbSBcIi4vbW9kZWwvZGF0YS1tb2RlbFwiO1xuaW1wb3J0IHtJbnB1dENvbXBvbmVudH0gZnJvbSBcIi4vYmluZGluZ3MvaW5wdXQuY29tcG9uZW50XCI7XG5pbXBvcnQge01BVEVSSUFMX0RJUkVDVElWRVN9IGZyb20gJ25nMi1tYXRlcmlhbC9hbGwnO1xuaW1wb3J0IHtjb25maXJtQ29tcG9uZW50fSBmcm9tIFwiLi9iaW5kaW5ncy9jb25maXJtQ29tcG9uZW50XCI7XG5pbXBvcnQge0NoYW5nZURldGVjdG9yUmVmfSBmcm9tIFwiYW5ndWxhcjIvc3JjL2NvcmUvY2hhbmdlX2RldGVjdGlvbi9jaGFuZ2VfZGV0ZWN0b3JfcmVmXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgIDxzZWN0aW9uIGNsYXNzPVwiYXBwLWNvbnRlbnRcIiBmbGV4PVwiXCIgbGF5b3V0PVwiY29sdW1uXCIgbGF5b3V0LWFsaWduPVwic3RhcnQgY2VudGVyXCI+XG4gICAgICAgIDxtZC1jb250ZW50IGNsYXNzPVwiZXhhbXBsZXNcIiBsYXlvdXQtcGFkZGluZz1cIlwiIG1kLXNjcm9sbC15PVwiXCI+XG4gICAgICAgICAgICA8IS0tIGNhdGNoIHRoZSBzdWJtaXQgZXZlbnQgd2l0aCB0aGUgZW1pdHRlciAtLT5cbiAgICAgICAgICAgIDwhLS0gd2hlbiB0aGlzIGNhdGNoZXMgYW4gZXZlbnQgaXQgZmlyZXMgdGhlIGZ1bmN0aW9uIC0tPlxuICAgICAgICAgICAgPG15LWlucHV0IChzdWJtaXR0ZWQpPVwib25TdWJtaXQoJGV2ZW50KVwiIFtteVNlbGZdPVwiY29uZmlybWVkTXlzZWxmXCI+PC9teS1pbnB1dD5cblxuICAgICAgICAgICAgPGNvbmZpcm0gKGNvbmZpcm1lZCk9XCJvbkNvbmZpcm0oJGV2ZW50KVwiIFtteVNlbGZdPVwibXlTZWxmXCI+PC9jb25maXJtPlxuXG4gICAgICAgIDwvbWQtY29udGVudD5cbiAgICA8L3NlY3Rpb24+XG4gICAgYCxcbiAgICBkaXJlY3RpdmVzOltJbnB1dENvbXBvbmVudCwgTUFURVJJQUxfRElSRUNUSVZFUywgY29uZmlybUNvbXBvbmVudF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuXG4gICAgbXlTZWxmOiBEYXRhTW9kZWw7XG4gICAgY29uZmlybWVkTXlzZWxmOiBEYXRhTW9kZWw7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpe1xuICAgICAgICB0aGlzLm15U2VsZiA9IHtcbiAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgYWdlOiAnJ1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNvbmZpcm1lZE15c2VsZiA9IHtcbiAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgYWdlOiAnJ1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy9Vc2luZyBjaGFuZ2UgZGV0ZWN0aW9uIHVudGlsIHdlIGhhdmUgdGVzdGVkIHVzaW5nIHByb3BlciBmb3JtIHNldHVwIGZvciBwYXNzaW5nIGRhdGFcbiAgICBvblN1Ym1pdChteVNlbGY6IERhdGFNb2RlbCk6IHZvaWR7XG5cbiAgICAgICAgLy90aGlzIGNyZWF0ZXMgYSBuZXcgb2JqZWN0IHNvIHdlIGRvbid0IGp1c3QgMiB3YXkgZGF0YWJpbmQgdG8gdGhlIHJlZiBvYmplY3QgcGFzc2VkIGZyb20gdGhlIGZpcnN0IGZvcm0uXG4gICAgICAgIHRoaXMubXlTZWxmID0ge1xuICAgICAgICAgICAgbmFtZTogbXlTZWxmLm5hbWUsXG4gICAgICAgICAgICBhZ2U6IG15U2VsZi5hZ2VcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cbiAgICBvbkNvbmZpcm0obXlTZWxmOiBEYXRhTW9kZWwpOiB2b2lke1xuXG4gICAgICAgIHRoaXMuY29uZmlybWVkTXlzZWxmID0ge1xuICAgICAgICAgICAgbmFtZTogbXlTZWxmLm5hbWUsXG4gICAgICAgICAgICBhZ2U6IG15U2VsZi5hZ2VcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
