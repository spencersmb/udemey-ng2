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
    var DataService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            DataService = (function () {
                function DataService(_data) {
                    if (_data === void 0) { _data = ['summer', 'winter', 'fall', 'spring']; }
                    this._data = _data;
                }
                DataService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [Object])
                ], DataService);
                return DataService;
            })();
            exports_1("DataService", DataService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2RhdGEuc2VydmljZS50cyJdLCJuYW1lcyI6WyJEYXRhU2VydmljZSIsIkRhdGFTZXJ2aWNlLmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFHQTtnQkFHSUEscUJBQW9CQSxLQUE4Q0E7b0JBQXREQyxxQkFBc0RBLEdBQXREQSxTQUFpQkEsUUFBUUEsRUFBRUEsUUFBUUEsRUFBRUEsTUFBTUEsRUFBRUEsUUFBUUEsQ0FBQ0E7b0JBQTlDQSxVQUFLQSxHQUFMQSxLQUFLQSxDQUF5Q0E7Z0JBRWxFQSxDQUFDQTtnQkFMTEQ7b0JBQUNBLGlCQUFVQSxFQUFFQTs7Z0NBT1pBO2dCQUFEQSxrQkFBQ0E7WUFBREEsQ0FQQSxBQU9DQSxJQUFBO1lBUEQscUNBT0MsQ0FBQSIsImZpbGUiOiJzZXJ2aWNlcy9kYXRhLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERhdGFTZXJ2aWNle1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZGF0YSA9IFsnc3VtbWVyJywgJ3dpbnRlcicsICdmYWxsJywgJ3NwcmluZyddKXtcblxuICAgIH1cblxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
