import {bootstrap} from 'angular2/platform/browser';
import {AppComponent} from "./app.component";
import {MATERIAL_PROVIDERS} from 'ng2-material/all';
import {LoggingService} from "./services/logging.service";
import {CalcService} from "./services/calc.service";


//noinspection TypeScriptValidateTypes
bootstrap(AppComponent, [
    MATERIAL_PROVIDERS,
    LoggingService,
    CalcService
]);
