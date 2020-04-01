import { Injectable } from '@angular/core';
import { SharedService } from '../shared/shared.service';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(
    private shared: SharedService,
  ) { }
}
