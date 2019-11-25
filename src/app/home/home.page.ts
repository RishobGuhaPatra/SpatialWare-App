import { Component, NgZone } from '@angular/core';
import { BLE } from '@ionic-native/ble/ngx';
import { ConnectableObservable } from 'rxjs';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  toast: any;
  statusMessage: string;
  peripheral: any = {};
  devices:any[] = [];
  constructor(private ble: BLE, private ngZone: NgZone,
              private toastCtrl: ToastController) {
  }

  Scan() {
    this.devices = [];
    this.ble.scan([], 15).subscribe(
        device => this.onDeviceDiscovered(device)
    );
  
}
  ConnectToBT(device) {
    this.ble.connect(device.id).subscribe(
      peripheral => this.onConnected(peripheral),
      peripheral => this.onDeviceDisconnected(peripheral)
    );
  }

  onConnected(peripheral) {
    this.ngZone.run(() => {
      this.setStatus('');
      this.peripheral = peripheral;
    });
  }

  async onDeviceDisconnected(peripheral) {
    let toast = this.toastCtrl.create({
      message: 'The peripheral unexpectedly disconnected',
      duration: 3000,
      position: 'middle'
    });
    (await toast).present();
  }

  setStatus(message) {
    console.log(message);
    this.ngZone.run(() => {
      this.statusMessage = message;
    });
  }

  onDeviceDiscovered(device) {
      console.log('Discovered' + JSON.stringify(device, null, 2));
      this.ngZone.run(()=>{
          this.devices.push(device)
          console.log(device)
      })
  }
  stringToBytes(string: any) {
  var array = new Uint8Array(string.length);
  for (var i = 0, l = string.length; i < l; i++) {
    array[i] = string.charCodeAt(i);
  }
  return array.buffer;
  }

  // receiving data 
  bytesToString(buffer) {
  return String.fromCharCode.apply(null, new Uint8Array(buffer));
  }
}
