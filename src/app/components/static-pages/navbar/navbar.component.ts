import { Component } from '@angular/core';
import { SharedService } from '../../../core/services/shared.service';
import { MainService } from '../../../core/services/main.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent  {

  constructor(
    public shared: SharedService,
    public main: MainService,
  ) { }

}
