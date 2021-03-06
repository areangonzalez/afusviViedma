import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { LoaderService } from 'src/app/core/services';
//import { AuthenticationService } from '../services/authentication.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    //constructor(private authenticationService: AuthenticationService, private _loadService: LoaderService) { }
    constructor(private _loadService: LoaderService){}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this._loadService.show();
        console.log("url: ",request.url);
        return next.handle(request).pipe(
          catchError(err => {
            if (err.status === 401) {
              // auto logout if 401 response returned from api
              //              this.authenticationService.logout();
              location.reload(true);
            }
            const error = err.error.message || err.statusText;
            console.log(error);
                return throwError(error);
            }),
            finalize(() => this._loadService.hide())
        )
    }
}
