import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

/*
  Generated class for the CidadaoInspetorProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CidadaoInspetorProvider {
  api_url = "http://crminf.kinghost.net:21005/";

  constructor(public http: Http) {
    console.log('Hello CidadaoInspetorProvider Provider');
  }

  getTopProdutos() {
    //this.get(this.api_url + "produtos",)
    return this.http.get(this.api_url + "produtos")

 
  }

  get(url, success, error) {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json; charset=utf-8');
      headers.append('Access-Control-Allow-Origin', '*');
      headers.append('Access-Control-Allow-Headers', 'Content-Type, Authorization, Accept, X-Requested-With');
      headers.append('Access-Control-Allow-Methods', 'OPTIONS, TRACE, GET, HEAD, POST, PUT');
      this.http.get(this.api_url + url)
        .map(res => res.json())
        .subscribe(data => {
          success(data);
        }, (erro) => {
          if (erro.status == 401) {
            error('nao_autorizado');
          } else {
            error('erro_get');
          }
        });
   
  }

}
