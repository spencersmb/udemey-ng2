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
    var ReversePipe;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ReversePipe = (function () {
                function ReversePipe() {
                }
                ReversePipe.prototype.transform = function (value, args) {
                    var length = value.length;
                    var resultString = '';
                    for (var i = 0; i < length; i++) {
                        resultString = value[i] + resultString;
                    }
                    return resultString;
                };
                ReversePipe = __decorate([
                    core_1.Pipe({
                        name: 'myReverse'
                    }), 
                    __metadata('design:paramtypes', [])
                ], ReversePipe);
                return ReversePipe;
            })();
            exports_1("ReversePipe", ReversePipe);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBpcGVzL3JldmVyc2UucGlwZS50cyJdLCJuYW1lcyI6WyJSZXZlcnNlUGlwZSIsIlJldmVyc2VQaXBlLmNvbnN0cnVjdG9yIiwiUmV2ZXJzZVBpcGUudHJhbnNmb3JtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFJQTtnQkFBQUE7Z0JBZUFDLENBQUNBO2dCQVZHRCwrQkFBU0EsR0FBVEEsVUFBVUEsS0FBWUEsRUFBRUEsSUFBVUE7b0JBQzlCRSxJQUFNQSxNQUFNQSxHQUFHQSxLQUFLQSxDQUFDQSxNQUFNQSxDQUFDQTtvQkFDNUJBLElBQUlBLFlBQVlBLEdBQUdBLEVBQUVBLENBQUNBO29CQUV0QkEsR0FBR0EsQ0FBQUEsQ0FBRUEsR0FBR0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsR0FBRUEsTUFBTUEsRUFBRUEsQ0FBQ0EsRUFBRUEsRUFBQ0EsQ0FBQ0E7d0JBQzVCQSxZQUFZQSxHQUFHQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQSxHQUFHQSxZQUFZQSxDQUFDQTtvQkFDM0NBLENBQUNBO29CQUVEQSxNQUFNQSxDQUFDQSxZQUFZQSxDQUFDQTtnQkFDeEJBLENBQUNBO2dCQWRMRjtvQkFBQ0EsV0FBSUEsQ0FBQ0E7d0JBQ0ZBLElBQUlBLEVBQUVBLFdBQVdBO3FCQUNwQkEsQ0FBQ0E7O2dDQWFEQTtnQkFBREEsa0JBQUNBO1lBQURBLENBZkEsQUFlQ0EsSUFBQTtZQWZELHFDQWVDLENBQUEiLCJmaWxlIjoicGlwZXMvcmV2ZXJzZS5waXBlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQge1BpcGV9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQge1BpcGVUcmFuc2Zvcm19IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5cbkBQaXBlKHtcbiAgICBuYW1lOiAnbXlSZXZlcnNlJ1xufSlcbmV4cG9ydCBjbGFzcyBSZXZlcnNlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm17XG5cbiAgICB0cmFuc2Zvcm0odmFsdWU6c3RyaW5nLCBhcmdzOmFueVtdKXtcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gdmFsdWUubGVuZ3RoO1xuICAgICAgICBsZXQgcmVzdWx0U3RyaW5nID0gJyc7XG5cbiAgICAgICAgZm9yKCBsZXQgaSA9IDA7IGkgPGxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIHJlc3VsdFN0cmluZyA9IHZhbHVlW2ldICsgcmVzdWx0U3RyaW5nO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFN0cmluZztcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
