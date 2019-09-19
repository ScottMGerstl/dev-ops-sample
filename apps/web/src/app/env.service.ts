import { Injectable } from '@angular/core';
import envData from '../assets/environment.json';
import { Env } from './env.interface.js';

@Injectable({ providedIn: 'root' })
export class EnvService {

    private envData: Env;

    get config(): Env {
        return this.envData;
    }

    constructor() {
        this.envData = envData;
    }
}
