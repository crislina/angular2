import { Observable } from 'rxjs/Rx';
import { Router, ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { WebServiceApi } from './../../services/api/WebServiceApi';

@Injectable()
export class GalleryGuard implements Resolve<any> {
	constructor(
        private webServiceApi: WebServiceApi) {
    }

	resolve(route: ActivatedRouteSnapshot) {
		const $obs = Observable.forkJoin(this.webServiceApi.getCities()
        ).catch(
            err => {
                console.log('Gallery Guard caught error, redirecting to error page.');
                //this.router.navigate(['/error']); r
                return Observable.of(err);
            }
            );
        return $obs;
	}

}