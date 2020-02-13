import { Component, NgZone } from '@angular/core';
import { BLE } from '@ionic-native/ble/ngx';
import { ConnectableObservable } from 'rxjs';
import { NavController, ToastController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  toast: any;
  statusMessage: string;
  peripheral: any = {};
  devices: any[] = [];
  constructor(public navCtrl: NavController, private ble: BLE, private ngZone: NgZone,
    private toastCtrl: ToastController) {
  }


  ionViewDidEnter() {
    console.log('ionViewDidEnter');
    this.scan();
  }

  scan() {
    this.setStatus('Scanning for BLE devices');
    this.devices = [];            //Clear list
    this.ble.scan([], 5).subscribe(
      device => this.onDeviceDiscovered(device),
      error => this.scanError(error)
    );
    setTimeout(this.setStatus.bind(this), 5000, "Scan Complete");
  }

  async scanError(error) {
    this.setStatus('Error ' + error);
    let toast = await this.toastCtrl.create({
      message: 'Error scanning for BLE devices',
      position: 'middle',
      duration: 3000
    });
    toast.present();
  }

  ConnectToBT(device) {
    this.ble.connect(device.id).subscribe(
      peripheral => this.onConnected(peripheral),
      peripheral => this.onDeviceDisconnected(peripheral)
    );
  }

  async onConnected(peripheral) {
    this.ngZone.run(() => {
      this.setStatus('');
      this.peripheral = peripheral;
    });
    let toast = this.toastCtrl.create({
      message: 'Connected to peripheral',
      duration: 3000,
      position: 'middle'
    });
    (await toast).present();
  }

  async onDeviceDisconnected(peripheral) {
    let toast = this.toastCtrl.create({
      message: 'The periphesral unexpectedly disconnected',
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
    this.ngZone.run(() => {
      this.devices.push(device)
      console.log(device)
    });
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
