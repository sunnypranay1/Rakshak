import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-usage',
  templateUrl: './usage.page.html',
  styleUrls: ['./usage.page.scss'],
})
export class UsagePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  how_to_use()
  {
    this.router.navigate(['/usage']);
  }

  home()
  {
    this.router.navigate(['/home']);
  }

}
