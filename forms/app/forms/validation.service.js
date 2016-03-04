//https://coryrylan.com/blog/angular-2-form-builder-and-validation-management
System.register([], function(exports_1) {
    var ValidationService;
    return {
        setters:[],
        execute: function() {
            ValidationService = (function () {
                function ValidationService() {
                }
                ValidationService.getValidatorErrorMessage = function (code) {
                    var config = {
                        'required': 'Required',
                        'invalidCreditCard': 'Is invalid credit card number',
                        'invalidEmailAddress': 'Invalid email address',
                        'invalidPassword': 'Invalid password. Password must be at least 6 characters long, and contain a number.'
                    };
                    return config[code];
                };
                ValidationService.creditCardValidator = function (control) {
                    // Visa, MasterCard, American Express, Diners Club, Discover, JCB
                    if (control.value.match(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/)) {
                        return null;
                    }
                    else {
                        return { 'invalidCreditCard': true };
                    }
                };
                ValidationService.emailValidator = function (control) {
                    // RFC 2822 compliant regex
                    if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
                        return null;
                    }
                    else {
                        return { 'invalidEmailAddress': true };
                    }
                };
                ValidationService.passwordValidator = function (control) {
                    // {6,100}           - Assert password is between 6 and 100 characters
                    // (?=.*[0-9])       - Assert a string has at least one number
                    if (control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/)) {
                        return null;
                    }
                    else {
                        return { 'invalidPassword': true };
                    }
                };
                return ValidationService;
            })();
            exports_1("ValidationService", ValidationService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm1zL3ZhbGlkYXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6WyJWYWxpZGF0aW9uU2VydmljZSIsIlZhbGlkYXRpb25TZXJ2aWNlLmNvbnN0cnVjdG9yIiwiVmFsaWRhdGlvblNlcnZpY2UuZ2V0VmFsaWRhdG9yRXJyb3JNZXNzYWdlIiwiVmFsaWRhdGlvblNlcnZpY2UuY3JlZGl0Q2FyZFZhbGlkYXRvciIsIlZhbGlkYXRpb25TZXJ2aWNlLmVtYWlsVmFsaWRhdG9yIiwiVmFsaWRhdGlvblNlcnZpY2UucGFzc3dvcmRWYWxpZGF0b3IiXSwibWFwcGluZ3MiOiJBQUFBLDZFQUE2RTs7Ozs7O1lBRTdFO2dCQUFBQTtnQkF1Q0FDLENBQUNBO2dCQXJDVUQsMENBQXdCQSxHQUEvQkEsVUFBZ0NBLElBQVlBO29CQUN4Q0UsSUFBSUEsTUFBTUEsR0FBR0E7d0JBQ1RBLFVBQVVBLEVBQUVBLFVBQVVBO3dCQUN0QkEsbUJBQW1CQSxFQUFFQSwrQkFBK0JBO3dCQUNwREEscUJBQXFCQSxFQUFFQSx1QkFBdUJBO3dCQUM5Q0EsaUJBQWlCQSxFQUFFQSxzRkFBc0ZBO3FCQUM1R0EsQ0FBQ0E7b0JBQ0ZBLE1BQU1BLENBQUNBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLENBQUNBO2dCQUN4QkEsQ0FBQ0E7Z0JBRU1GLHFDQUFtQkEsR0FBMUJBLFVBQTJCQSxPQUFPQTtvQkFDOUJHLGlFQUFpRUE7b0JBQ2pFQSxFQUFFQSxDQUFDQSxDQUFDQSxPQUFPQSxDQUFDQSxLQUFLQSxDQUFDQSxLQUFLQSxDQUFDQSx1SkFBdUpBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO3dCQUMvS0EsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0E7b0JBQ2hCQSxDQUFDQTtvQkFBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7d0JBQ0pBLE1BQU1BLENBQUNBLEVBQUVBLG1CQUFtQkEsRUFBRUEsSUFBSUEsRUFBRUEsQ0FBQ0E7b0JBQ3pDQSxDQUFDQTtnQkFDTEEsQ0FBQ0E7Z0JBRU1ILGdDQUFjQSxHQUFyQkEsVUFBc0JBLE9BQU9BO29CQUN6QkksMkJBQTJCQTtvQkFDM0JBLEVBQUVBLENBQUNBLENBQUNBLE9BQU9BLENBQUNBLEtBQUtBLENBQUNBLEtBQUtBLENBQUNBLHVJQUF1SUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7d0JBQy9KQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQTtvQkFDaEJBLENBQUNBO29CQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTt3QkFDSkEsTUFBTUEsQ0FBQ0EsRUFBRUEscUJBQXFCQSxFQUFFQSxJQUFJQSxFQUFFQSxDQUFDQTtvQkFDM0NBLENBQUNBO2dCQUNMQSxDQUFDQTtnQkFFTUosbUNBQWlCQSxHQUF4QkEsVUFBeUJBLE9BQU9BO29CQUM1Qkssc0VBQXNFQTtvQkFDdEVBLDhEQUE4REE7b0JBQzlEQSxFQUFFQSxDQUFDQSxDQUFDQSxPQUFPQSxDQUFDQSxLQUFLQSxDQUFDQSxLQUFLQSxDQUFDQSx5Q0FBeUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO3dCQUNqRUEsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0E7b0JBQ2hCQSxDQUFDQTtvQkFBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7d0JBQ0pBLE1BQU1BLENBQUNBLEVBQUVBLGlCQUFpQkEsRUFBRUEsSUFBSUEsRUFBRUEsQ0FBQ0E7b0JBQ3ZDQSxDQUFDQTtnQkFDTEEsQ0FBQ0E7Z0JBQ0xMLHdCQUFDQTtZQUFEQSxDQXZDQSxBQXVDQ0EsSUFBQTtZQXZDRCxpREF1Q0MsQ0FBQSIsImZpbGUiOiJmb3Jtcy92YWxpZGF0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL2h0dHBzOi8vY29yeXJ5bGFuLmNvbS9ibG9nL2FuZ3VsYXItMi1mb3JtLWJ1aWxkZXItYW5kLXZhbGlkYXRpb24tbWFuYWdlbWVudFxuXG5leHBvcnQgY2xhc3MgVmFsaWRhdGlvblNlcnZpY2Uge1xuXG4gICAgc3RhdGljIGdldFZhbGlkYXRvckVycm9yTWVzc2FnZShjb2RlOiBzdHJpbmcpIHtcbiAgICAgICAgbGV0IGNvbmZpZyA9IHtcbiAgICAgICAgICAgICdyZXF1aXJlZCc6ICdSZXF1aXJlZCcsXG4gICAgICAgICAgICAnaW52YWxpZENyZWRpdENhcmQnOiAnSXMgaW52YWxpZCBjcmVkaXQgY2FyZCBudW1iZXInLFxuICAgICAgICAgICAgJ2ludmFsaWRFbWFpbEFkZHJlc3MnOiAnSW52YWxpZCBlbWFpbCBhZGRyZXNzJyxcbiAgICAgICAgICAgICdpbnZhbGlkUGFzc3dvcmQnOiAnSW52YWxpZCBwYXNzd29yZC4gUGFzc3dvcmQgbXVzdCBiZSBhdCBsZWFzdCA2IGNoYXJhY3RlcnMgbG9uZywgYW5kIGNvbnRhaW4gYSBudW1iZXIuJ1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gY29uZmlnW2NvZGVdO1xuICAgIH1cblxuICAgIHN0YXRpYyBjcmVkaXRDYXJkVmFsaWRhdG9yKGNvbnRyb2wpIHtcbiAgICAgICAgLy8gVmlzYSwgTWFzdGVyQ2FyZCwgQW1lcmljYW4gRXhwcmVzcywgRGluZXJzIENsdWIsIERpc2NvdmVyLCBKQ0JcbiAgICAgICAgaWYgKGNvbnRyb2wudmFsdWUubWF0Y2goL14oPzo0WzAtOV17MTJ9KD86WzAtOV17M30pP3w1WzEtNV1bMC05XXsxNH18Nig/OjAxMXw1WzAtOV1bMC05XSlbMC05XXsxMn18M1s0N11bMC05XXsxM318Myg/OjBbMC01XXxbNjhdWzAtOV0pWzAtOV17MTF9fCg/OjIxMzF8MTgwMHwzNVxcZHszfSlcXGR7MTF9KSQvKSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4geyAnaW52YWxpZENyZWRpdENhcmQnOiB0cnVlIH07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgZW1haWxWYWxpZGF0b3IoY29udHJvbCkge1xuICAgICAgICAvLyBSRkMgMjgyMiBjb21wbGlhbnQgcmVnZXhcbiAgICAgICAgaWYgKGNvbnRyb2wudmFsdWUubWF0Y2goL1thLXowLTkhIyQlJicqKy89P15fYHt8fX4tXSsoPzpcXC5bYS16MC05ISMkJSYnKisvPT9eX2B7fH1+LV0rKSpAKD86W2EtejAtOV0oPzpbYS16MC05LV0qW2EtejAtOV0pP1xcLikrW2EtejAtOV0oPzpbYS16MC05LV0qW2EtejAtOV0pPy8pKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB7ICdpbnZhbGlkRW1haWxBZGRyZXNzJzogdHJ1ZSB9O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIHBhc3N3b3JkVmFsaWRhdG9yKGNvbnRyb2wpIHtcbiAgICAgICAgLy8gezYsMTAwfSAgICAgICAgICAgLSBBc3NlcnQgcGFzc3dvcmQgaXMgYmV0d2VlbiA2IGFuZCAxMDAgY2hhcmFjdGVyc1xuICAgICAgICAvLyAoPz0uKlswLTldKSAgICAgICAtIEFzc2VydCBhIHN0cmluZyBoYXMgYXQgbGVhc3Qgb25lIG51bWJlclxuICAgICAgICBpZiAoY29udHJvbC52YWx1ZS5tYXRjaCgvXig/PS4qWzAtOV0pW2EtekEtWjAtOSFAIyQlXiYqXXs2LDEwMH0kLykpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHsgJ2ludmFsaWRQYXNzd29yZCc6IHRydWUgfTtcbiAgICAgICAgfVxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
