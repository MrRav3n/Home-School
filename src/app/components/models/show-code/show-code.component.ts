import { Component, OnInit, ViewChild } from '@angular/core';
import { SharedService } from '../../../core/services/shared.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-show-code',
  templateUrl: './show-code.component.html',
  styleUrls: ['./show-code.component.scss']
})
export class ShowCodeComponent implements OnInit {
  @ViewChild('showCode') showCode;
  @ViewChild('codeCopy') codeCopy;
  code: string;

  constructor(
    private shared: SharedService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.shared.openCode.subscribe(res => {
      this.code = res;
      this.showCode.nativeElement.click();
    });
  }

  copyCodeFunc() {
    document.addEventListener('copy', (e) => {
      this.clipboardDataSet(e);
    });
    document.execCommand('copy');
    this.shared.openCodeModal('');
    this.toastr.success('Możesz go teraz łatwo wysłać swoim uczniom.', 'Skopiowano kod!');
  }

  clipboardDataSet(e: ClipboardEvent) {
    e.clipboardData.setData('text/plain', this.codeCopy.nativeElement.textContent);
    e.preventDefault();
  }
}
