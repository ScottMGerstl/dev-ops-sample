import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';
import { EnvService } from './env.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    constructor(
        translate: TranslateService,
        ga: Angulartics2GoogleAnalytics,
        env: EnvService
    ) {
        ga.startTracking();

        console.log(env.config.logLevel);
    }
}
