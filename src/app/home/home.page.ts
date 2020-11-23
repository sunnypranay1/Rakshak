import {Router} from '@angular/router';
import {Component} from '@angular/core';
import {MotionOrientationEventResult, PluginListenerHandle, Capacitor} from '@capacitor/core';
import { Magnetometer, MagnetometerReading } from '@ionic-native/magnetometer/ngx';
import { interval, Subscription } from 'rxjs';
import { takeWhile } from 'rxjs/operators';
const {Motion} = Capacitor.Plugins;

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

  subscription: Subscription;
  intervalId: number;
  testing: any = 0;
  msg = 'Safe';
  requestNumber = 0;

    constructor(private magnetometer: Magnetometer, private router: Router) {
      this.magnetometer.getReading().then(
        (data: MagnetometerReading) => this.testing = data,
           (error: any) => console.log('error '  + error)
         );
      console.log('hello');
      console.log(this.testing.magnitude);
    }

    how_to_use()
    {
      this.router.navigate(['/usage']);
    }

    home()
    {
      this.router.navigate(['/home']);
    }

    test(){
      this.magnetometer.getReading().then(
        (data: MagnetometerReading) => this.testing = data,
           (error: any) => console.log('error '  + error)
         );
      console.log(this.testing.magnitude);
      this.requestNumber = this.requestNumber + 1;
      if (this.testing.magnitude > 100)
      {
        this.msg = 'It definetly contains camera or microphone';
      }
      else if (this.testing.magnitude > 55)
      {
        this.msg = 'It may have camera or microphone';
      }
      else
      {
        this.msg = 'It is safe';
      }
    }
}