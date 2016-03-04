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
    var LoggingService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            LoggingService = (function () {
                function LoggingService() {
                }
                LoggingService.prototype.log = function (message) {
                    console.log(message);
                };
                LoggingService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], LoggingService);
                return LoggingService;
            })();
            exports_1("LoggingService", LoggingService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2xvZ2dpbmcuc2VydmljZS50cyJdLCJuYW1lcyI6WyJMb2dnaW5nU2VydmljZSIsIkxvZ2dpbmdTZXJ2aWNlLmNvbnN0cnVjdG9yIiwiTG9nZ2luZ1NlcnZpY2UubG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFHQTtnQkFHSUE7Z0JBRUFDLENBQUNBO2dCQUNERCw0QkFBR0EsR0FBSEEsVUFBSUEsT0FBY0E7b0JBQ2RFLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLE9BQU9BLENBQUNBLENBQUNBO2dCQUN6QkEsQ0FBQ0E7Z0JBUkxGO29CQUFDQSxpQkFBVUEsRUFBRUE7O21DQVNaQTtnQkFBREEscUJBQUNBO1lBQURBLENBVEEsQUFTQ0EsSUFBQTtZQVRELDJDQVNDLENBQUEiLCJmaWxlIjoic2VydmljZXMvbG9nZ2luZy5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMb2dnaW5nU2VydmljZXtcblxuICAgIGNvbnN0cnVjdG9yKCl7XG5cbiAgICB9XG4gICAgbG9nKG1lc3NhZ2U6c3RyaW5nKXtcbiAgICAgICAgY29uc29sZS5sb2cobWVzc2FnZSk7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
