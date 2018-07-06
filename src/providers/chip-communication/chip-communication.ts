import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import { HTTP } from '@ionic-native/http';

/*
  Generated class for the ChipCommunicationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ChipCommunicationProvider {

  constructor(private http: HTTP) {
    console.log('Hello ChipCommunicationProvider Provider');
  }


  url:string="test";
  

  sendUserWifiCredentials(ssid, password): Promise<any>{
    
    console.log('heree')
    var ip ="192.168.4.1";  
    ssid = "ezapparel";
    password="2122799723"
    var url = "http://" + ip +"/user_dns?ssid="+ssid+"&password="+password;
    this.url = url;
    // let params = {};
    // params['ssid'] = ssid;
    // params['password'] = password;

    return new Promise((resolve,reject)=>{
      this.http.get(url,{},{}).then(data=>{
        //var res = JSON.parse(data.data);
        resolve(data)
      }).catch(error=>{
        reject(false)
      })
    })


  }



}
