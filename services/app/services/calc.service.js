System.register(["angular2/core"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var CalcService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            CalcService = (function () {
                function CalcService() {
                }
                CalcService.prototype.add = function (num1, num2) {
                    return num1 + num2;
                };
                CalcService.prototype.multiply = function (num1, num2) {
                    return num1 * num2;
                };
                CalcService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], CalcService);
                return CalcService;
            })();
            exports_1("CalcService", CalcService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2NhbGMuc2VydmljZS50cyJdLCJuYW1lcyI6WyJDYWxjU2VydmljZSIsIkNhbGNTZXJ2aWNlLmNvbnN0cnVjdG9yIiwiQ2FsY1NlcnZpY2UuYWRkIiwiQ2FsY1NlcnZpY2UubXVsdGlwbHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUdBO2dCQUdJQTtnQkFFQUMsQ0FBQ0E7Z0JBQ0RELHlCQUFHQSxHQUFIQSxVQUFJQSxJQUFJQSxFQUFFQSxJQUFJQTtvQkFDVkUsTUFBTUEsQ0FBQ0EsSUFBSUEsR0FBR0EsSUFBSUEsQ0FBQ0E7Z0JBQ3ZCQSxDQUFDQTtnQkFDREYsOEJBQVFBLEdBQVJBLFVBQVNBLElBQUlBLEVBQUVBLElBQUlBO29CQUNmRyxNQUFNQSxDQUFDQSxJQUFJQSxHQUFHQSxJQUFJQSxDQUFDQTtnQkFDdkJBLENBQUNBO2dCQVhMSDtvQkFBQ0EsaUJBQVVBLEVBQUVBOztnQ0FhWkE7Z0JBQURBLGtCQUFDQTtZQUFEQSxDQWJBLEFBYUNBLElBQUE7WUFiRCxxQ0FhQyxDQUFBIiwiZmlsZSI6InNlcnZpY2VzL2NhbGMuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2FsY1NlcnZpY2V7XG5cbiAgICBjb25zdHJ1Y3Rvcigpe1xuXG4gICAgfVxuICAgIGFkZChudW0xLCBudW0yKTpudW1iZXIge1xuICAgICAgICByZXR1cm4gbnVtMSArIG51bTI7XG4gICAgfVxuICAgIG11bHRpcGx5KG51bTEsIG51bTIpOm51bWJlciB7XG4gICAgICAgIHJldHVybiBudW0xICogbnVtMjtcbiAgICB9XG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
