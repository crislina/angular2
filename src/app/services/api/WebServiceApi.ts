import { Inject, Injectable, Optional }                      from '@angular/core';
import { Http, Headers, URLSearchParams }                    from '@angular/http';
import { RequestMethod, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Response, ResponseContentType }                     from '@angular/http';

import { Observable }                                        from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { City } from './../model/city';

@Injectable()
export class WebServiceApi {
	public Cities:City[]
	constructor(private http: Http) {
		this.getCities().subscribe(data=> this.Cities=data, error=>console.log('error'));
	}

  	getCities(): Observable<City[]> {
  		console.log('load cities');
	   return  this.http
	               .get(`./../../assets/json/cities.json`)
	               .map(response => response.json().data as City[]);
	}
	
}