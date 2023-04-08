import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


type AppEnv = typeof environment;

@Injectable({ providedIn: 'root' })
export class ConfigService {


    /**
     * @returns configuación de la app
     */
    getEnvironment(): AppEnv {
        return environment;
    }

    /**
     * 
     * @returns Si esta la app en producción
     */

    isProd(): boolean {
        return environment.production;
    }

    /**
   * @returns version de la app
   */
    getVersion(): string {
        return environment.appVersion;
    }

    /**
  * @returns El url del backend
  */
    getAPIUrl(): string {
        return environment?.apiUrl ?? '';
    }

    /**
   * @returns configuración del cliente y servidor
   */
    getAuthSettings(): AppEnv['settings']['auth'] {
        return environment?.settings?.auth;
    }
}
