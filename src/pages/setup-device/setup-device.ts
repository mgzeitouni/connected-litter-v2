import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Platform } from 'ionic-angular';
import { ChipCommunicationProvider } from '../../providers/chip-communication/chip-communication';
import { Network } from '@ionic-native/network';
import { MqttProvider } from '../../providers/mqtt/mqtt';


/**
 * Generated class for the SetupDevicePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */




@IonicPage()
@Component({
  selector: 'page-setup-device',
  templateUrl: 'setup-device.html',
})
export class SetupDevicePage {


  userSSID:string;
  password:string;

  currentSSID:string;

  deviceSsid:string="LitterBox";

  deviceWifiConnected:boolean=false;

  constructor(public navCtrl: NavController, public navParams: NavParams,
            public chipCommProvider: ChipCommunicationProvider,
            private network: Network,
            public mqttProvider: MqttProvider,
            private platform: Platform) {

              if (platform.is('cordova')){

                //Subscribe on pause
                platform.pause.subscribe(() => {
                  //Hello pause
               
                });
        
                //Subscribe on resume
                platform.resume.subscribe(() => {
                  
                  this.getSSID();
                });
               }
        
  }

  
  ionViewDidLoad() {
    console.log('ionViewDidLoad SetupDevicePage');
    this.getSSID();
  }

  ionViewDidEnter(){
    console.log('ionViewDidEnter SetupDevicePage');
    this.getSSID();
  }

  
  getSSID(){
    
    var that = this;

    window["WifiWizard"].getCurrentSSID(function(ssid){

      ssid = ssid.replace("\"","")
      ssid = ssid.replace("\"","")

      if (ssid==that.deviceSsid){
        that.deviceWifiConnected=true;
      }else{
        that.deviceWifiConnected = false;
      }

      that.currentSSID = ssid;

      },
      function(err){

      })
  }
  
  res:string;
  macAddress:string;

  submitWifi(){

    var that = this;
    // First send Wifi credentials  
    this.chipCommProvider.sendUserWifiCredentials(this.userSSID,this.password).then(res=>{
      this.macAddress=res;
    }, err => {
      this.macAddress=err;
  })
  }

}
