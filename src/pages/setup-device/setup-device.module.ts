import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SetupDevicePage } from './setup-device';

@NgModule({
  declarations: [
    SetupDevicePage,
  ],
  imports: [
    IonicPageModule.forChild(SetupDevicePage),
  ],
})
export class SetupDevicePageModule {}
