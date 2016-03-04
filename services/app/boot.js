System.register(['angular2/platform/browser', "./app.component", 'ng2-material/all', "./services/logging.service", "./services/calc.service"], function(exports_1) {
    var browser_1, app_component_1, all_1, logging_service_1, calc_service_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
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
            //noinspection TypeScriptValidateTypes
            browser_1.bootstrap(app_component_1.AppComponent, [
                all_1.MATERIAL_PROVIDERS,
                logging_service_1.LoggingService,
                calc_service_1.CalcService
            ]);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFPQSxzQ0FBc0M7WUFDdEMsbUJBQVMsQ0FBQyw0QkFBWSxFQUFFO2dCQUNwQix3QkFBa0I7Z0JBQ2xCLGdDQUFjO2dCQUNkLDBCQUFXO2FBQ2QsQ0FBQyxDQUFDIiwiZmlsZSI6ImJvb3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2Jvb3RzdHJhcH0gZnJvbSAnYW5ndWxhcjIvcGxhdGZvcm0vYnJvd3Nlcic7XG5pbXBvcnQge0FwcENvbXBvbmVudH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtNQVRFUklBTF9QUk9WSURFUlN9IGZyb20gJ25nMi1tYXRlcmlhbC9hbGwnO1xuaW1wb3J0IHtMb2dnaW5nU2VydmljZX0gZnJvbSBcIi4vc2VydmljZXMvbG9nZ2luZy5zZXJ2aWNlXCI7XG5pbXBvcnQge0NhbGNTZXJ2aWNlfSBmcm9tIFwiLi9zZXJ2aWNlcy9jYWxjLnNlcnZpY2VcIjtcblxuXG4vL25vaW5zcGVjdGlvbiBUeXBlU2NyaXB0VmFsaWRhdGVUeXBlc1xuYm9vdHN0cmFwKEFwcENvbXBvbmVudCwgW1xuICAgIE1BVEVSSUFMX1BST1ZJREVSUyxcbiAgICBMb2dnaW5nU2VydmljZSxcbiAgICBDYWxjU2VydmljZVxuXSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
