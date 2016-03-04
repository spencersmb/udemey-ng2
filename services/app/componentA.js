System.register(["angular2/core", 'ng2-material/all', "./services/logging.service", "./services/calc.service"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, all_1, logging_service_1, calc_service_1;
    var ComponentA;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (all_1_1) {
                all_1 = all_1_1;
            },
            function (logging_service_1_1) {
                logging_service_1 = logging_service_1_1;
            },
            function (calc_service_1_1) {
                calc_service_1 = calc_service_1_1;
            }],
        execute: function() {
            ComponentA = (function () {
                function ComponentA(_loggingService, _calcService) {
                    this._loggingService = _loggingService;
                    this._calcService = _calcService;
                    this.result = 0;
                }
                ComponentA.prototype.onLog = function (message) {
                    this._loggingService.log(message);
                };
                ComponentA.prototype.onMultiply = function (num1, num2) {
                    //adding '' at begining converts to string
                    //adding + at begining converts to number
                    this.result = this._calcService.multiply(+num1, +num2);
                };
                ComponentA.prototype.onAdd = function (num1, num2) {
                    this.result = this._calcService.add(+num1, +num2);
                };
                ComponentA = __decorate([
                    core_1.Component({
                        selector: 'my-component-A',
                        directives: [all_1.MATERIAL_DIRECTIVES],
                        template: "\n    <section class=\"examples\">\n        <div layout=\"column\" class=\"md-inline-form\">\n            <md-toolbar class=\"demo-toolbar md-primary\">\n                <div class=\"md-toolbar-tools\">\n                  <h3>Logging Service</h3>\n                  <span flex=\"\"></span>\n                </div>\n            </md-toolbar>\n            <md-content layout-padding>\n                <div class=\"section1\">\n                    <div layout-gt-sm=\"row\">\n                        <md-input-container class=\"md-block\" flex-gt-sm>\n                            <label>Message</label>\n                            <input md-input #message type=\"text\">\n                        </md-input-container>\n                    </div>\n                    <button  md-raised-button class=\"md-raised md-primary\" (click)=\"onLog(message.value)\">Send</button>\n                </div>\n                <hr>\n                <h3>Calculator Service</h3>\n                <p>Add or multiply these two numbers:</p>\n                <div layout-gt-sm=\"row\">\n                        <md-input-container class=\"md-block\" flex-gt-sm>\n                            <label>First Number</label>\n                            <input md-input #num1 type=\"text\">\n                        </md-input-container>\n                        <div class=\"factor\"> X or + </div>\n                        <md-input-container class=\"md-block\" flex-gt-sm>\n                            <label>Second Number</label>\n                            <input md-input #num2 type=\"text\">\n                        </md-input-container>\n                </div>\n\n                <button  md-raised-button class=\"md-raised md-primary\" (click)=\"onMultiply(num1.value, num2.value)\">Multiply</button>\n                <button  md-raised-button class=\"md-raised md-primary\" (click)=\"onAdd(num1.value, num2.value)\">Add</button>\n                <br>\n                <p>Result: {{result}}</p>\n            </md-content>\n        </div>\n    </section>\n    "
                    }), 
                    __metadata('design:paramtypes', [logging_service_1.LoggingService, calc_service_1.CalcService])
                ], ComponentA);
                return ComponentA;
            })();
            exports_1("ComponentA", ComponentA);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudEEudHMiXSwibmFtZXMiOlsiQ29tcG9uZW50QSIsIkNvbXBvbmVudEEuY29uc3RydWN0b3IiLCJDb21wb25lbnRBLm9uTG9nIiwiQ29tcG9uZW50QS5vbk11bHRpcGx5IiwiQ29tcG9uZW50QS5vbkFkZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBTUE7Z0JBaURJQSxvQkFDWUEsZUFBK0JBLEVBQy9CQSxZQUF5QkE7b0JBRHpCQyxvQkFBZUEsR0FBZkEsZUFBZUEsQ0FBZ0JBO29CQUMvQkEsaUJBQVlBLEdBQVpBLFlBQVlBLENBQWFBO29CQUVqQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsR0FBR0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ3BCQSxDQUFDQTtnQkFDREQsMEJBQUtBLEdBQUxBLFVBQU1BLE9BQWNBO29CQUNoQkUsSUFBSUEsQ0FBQ0EsZUFBZUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ3RDQSxDQUFDQTtnQkFDREYsK0JBQVVBLEdBQVZBLFVBQVdBLElBQVlBLEVBQUVBLElBQVdBO29CQUNoQ0csMENBQTBDQTtvQkFDMUNBLHlDQUF5Q0E7b0JBQ3pDQSxJQUFJQSxDQUFDQSxNQUFNQSxHQUFHQSxJQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQSxJQUFJQSxFQUFFQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtnQkFDM0RBLENBQUNBO2dCQUNESCwwQkFBS0EsR0FBTEEsVUFBTUEsSUFBWUEsRUFBRUEsSUFBV0E7b0JBQzNCSSxJQUFJQSxDQUFDQSxNQUFNQSxHQUFHQSxJQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxJQUFJQSxFQUFFQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtnQkFDdERBLENBQUNBO2dCQWpFTEo7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDUEEsUUFBUUEsRUFBRUEsZ0JBQWdCQTt3QkFDMUJBLFVBQVVBLEVBQUVBLENBQUNBLHlCQUFtQkEsQ0FBQ0E7d0JBQ2pDQSxRQUFRQSxFQUFDQSwyL0RBeUNSQTtxQkFDSkEsQ0FBQ0E7OytCQXFCREE7Z0JBQURBLGlCQUFDQTtZQUFEQSxDQWxFQSxBQWtFQ0EsSUFBQTtZQWxFRCxtQ0FrRUMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRBLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQge01BVEVSSUFMX0RJUkVDVElWRVN9IGZyb20gJ25nMi1tYXRlcmlhbC9hbGwnO1xuaW1wb3J0IHtMb2dnaW5nU2VydmljZX0gZnJvbSBcIi4vc2VydmljZXMvbG9nZ2luZy5zZXJ2aWNlXCI7XG5pbXBvcnQge0NhbGNTZXJ2aWNlfSBmcm9tIFwiLi9zZXJ2aWNlcy9jYWxjLnNlcnZpY2VcIjtcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LWNvbXBvbmVudC1BJyxcbiAgICBkaXJlY3RpdmVzOiBbTUFURVJJQUxfRElSRUNUSVZFU10sXG4gICAgdGVtcGxhdGU6YFxuICAgIDxzZWN0aW9uIGNsYXNzPVwiZXhhbXBsZXNcIj5cbiAgICAgICAgPGRpdiBsYXlvdXQ9XCJjb2x1bW5cIiBjbGFzcz1cIm1kLWlubGluZS1mb3JtXCI+XG4gICAgICAgICAgICA8bWQtdG9vbGJhciBjbGFzcz1cImRlbW8tdG9vbGJhciBtZC1wcmltYXJ5XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1kLXRvb2xiYXItdG9vbHNcIj5cbiAgICAgICAgICAgICAgICAgIDxoMz5Mb2dnaW5nIFNlcnZpY2U8L2gzPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gZmxleD1cIlwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbWQtdG9vbGJhcj5cbiAgICAgICAgICAgIDxtZC1jb250ZW50IGxheW91dC1wYWRkaW5nPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uMVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGxheW91dC1ndC1zbT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG1kLWlucHV0LWNvbnRhaW5lciBjbGFzcz1cIm1kLWJsb2NrXCIgZmxleC1ndC1zbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+TWVzc2FnZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IG1kLWlucHV0ICNtZXNzYWdlIHR5cGU9XCJ0ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L21kLWlucHV0LWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gIG1kLXJhaXNlZC1idXR0b24gY2xhc3M9XCJtZC1yYWlzZWQgbWQtcHJpbWFyeVwiIChjbGljayk9XCJvbkxvZyhtZXNzYWdlLnZhbHVlKVwiPlNlbmQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8aHI+XG4gICAgICAgICAgICAgICAgPGgzPkNhbGN1bGF0b3IgU2VydmljZTwvaDM+XG4gICAgICAgICAgICAgICAgPHA+QWRkIG9yIG11bHRpcGx5IHRoZXNlIHR3byBudW1iZXJzOjwvcD5cbiAgICAgICAgICAgICAgICA8ZGl2IGxheW91dC1ndC1zbT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG1kLWlucHV0LWNvbnRhaW5lciBjbGFzcz1cIm1kLWJsb2NrXCIgZmxleC1ndC1zbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+Rmlyc3QgTnVtYmVyPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgbWQtaW5wdXQgI251bTEgdHlwZT1cInRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbWQtaW5wdXQtY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZhY3RvclwiPiBYIG9yICsgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bWQtaW5wdXQtY29udGFpbmVyIGNsYXNzPVwibWQtYmxvY2tcIiBmbGV4LWd0LXNtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5TZWNvbmQgTnVtYmVyPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgbWQtaW5wdXQgI251bTIgdHlwZT1cInRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbWQtaW5wdXQtY29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiAgbWQtcmFpc2VkLWJ1dHRvbiBjbGFzcz1cIm1kLXJhaXNlZCBtZC1wcmltYXJ5XCIgKGNsaWNrKT1cIm9uTXVsdGlwbHkobnVtMS52YWx1ZSwgbnVtMi52YWx1ZSlcIj5NdWx0aXBseTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gIG1kLXJhaXNlZC1idXR0b24gY2xhc3M9XCJtZC1yYWlzZWQgbWQtcHJpbWFyeVwiIChjbGljayk9XCJvbkFkZChudW0xLnZhbHVlLCBudW0yLnZhbHVlKVwiPkFkZDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxicj5cbiAgICAgICAgICAgICAgICA8cD5SZXN1bHQ6IHt7cmVzdWx0fX08L3A+XG4gICAgICAgICAgICA8L21kLWNvbnRlbnQ+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgICBgXG59KVxuXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50QXtcbiAgICByZXN1bHQ6IG51bWJlcjtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBfbG9nZ2luZ1NlcnZpY2U6IExvZ2dpbmdTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIF9jYWxjU2VydmljZTogQ2FsY1NlcnZpY2VcbiAgICApe1xuICAgICAgICB0aGlzLnJlc3VsdCA9IDA7XG4gICAgfVxuICAgIG9uTG9nKG1lc3NhZ2U6c3RyaW5nKTp2b2lke1xuICAgICAgICB0aGlzLl9sb2dnaW5nU2VydmljZS5sb2cobWVzc2FnZSk7XG4gICAgfVxuICAgIG9uTXVsdGlwbHkobnVtMTogbnVtYmVyLCBudW0yOm51bWJlcik6dm9pZHtcbiAgICAgICAgLy9hZGRpbmcgJycgYXQgYmVnaW5pbmcgY29udmVydHMgdG8gc3RyaW5nXG4gICAgICAgIC8vYWRkaW5nICsgYXQgYmVnaW5pbmcgY29udmVydHMgdG8gbnVtYmVyXG4gICAgICAgIHRoaXMucmVzdWx0ID0gdGhpcy5fY2FsY1NlcnZpY2UubXVsdGlwbHkoK251bTEsICtudW0yKTtcbiAgICB9XG4gICAgb25BZGQobnVtMTogbnVtYmVyLCBudW0yOm51bWJlcik6dm9pZHtcbiAgICAgICAgdGhpcy5yZXN1bHQgPSB0aGlzLl9jYWxjU2VydmljZS5hZGQoK251bTEsICtudW0yKTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
