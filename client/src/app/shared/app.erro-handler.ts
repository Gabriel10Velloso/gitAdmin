import {Response} from '@angular/http';
import { Observable } from "rxjs/Observable";

export class ErrorHandler {
    static handleError(err: Response | any) {
      let errMessage: string;

      if (err instanceof Response) {
        const body  = err.json() || '';
        const error = body.error || JSON.stringify(body);
          errMessage = `${error}`;
      } else {
          errMessage = err.message ? err.message : err.toString();
      }
      return Observable.throw(errMessage);
    }
}
