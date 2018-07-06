import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MqttProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MqttProvider {

  constructor(public http: HttpClient) {
    console.log('Hello MqttProvider Provider');
  }

  url:string="https://connected-litter.mybluemix.net/register-device"

  registerDevice(deviceId){

    let params = {"params":{}}

    params["deviceId"] = deviceId
    
    this.http.get(this.url, params)
  }

}
