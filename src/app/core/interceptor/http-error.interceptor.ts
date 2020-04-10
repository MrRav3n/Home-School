import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';


export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(private toastr: ToastrService) {
  }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
      .pipe(
        retry(1),
        catchError((error: HttpErrorResponse) => {
          let errorTitle = '';
          let errorMessage = '';
          if (error.error) {
            errorTitle = error.error.err;
            errorMessage = error.error.desc;
            this.toastr.error(errorMessage, errorTitle);
          } else {
            errorTitle = `Kod błędu: ${error.status}`;
            errorMessage = `Wiadomość: ${error.message}`;
            this.toastr.error(errorMessage, errorTitle);
          }
          return throwError(errorMessage);
        })
      );
  }
}
