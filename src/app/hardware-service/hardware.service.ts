import { Injectable } from '@angular/core';
import { Hardware } from '../repository/hardware';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HardwareService {

  private hardwareUrl = "http://localhost:8080/hardware";

  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };

  constructor(private http: HttpClient) { }

  getHardware(): Observable<Hardware[]> {
    return this.http.get<Hardware[]>(this.hardwareUrl)
      .pipe(
        tap(h => console.log('fetched hardware')),
        catchError(this.handleError<Hardware[]>('getHardware', []))
      );
  }

  getHardwareByCode(code: string): Observable<Hardware> {
    const url = `${this.hardwareUrl}/${code}`;

    return this.http.get<Hardware>(url)
      .pipe(
        tap(h => console.log('fetched hardware')),
        catchError(this.handleError<Hardware>('getHardwareByCode'))
      );
  }
  
  addHardware(hardware: Hardware): Observable<Hardware> {
    return this.http.post<Hardware>(this.hardwareUrl, hardware, this.httpOptions)
      .pipe(
        tap((newHardware: Hardware) => console.log(`added hardware with code=${newHardware.code}`)),
        catchError(this.handleError<Hardware>('addHardware'))
      );
  }

  updateHardware(hardware: Hardware): Observable<any> {
    const url = `${this.hardwareUrl}/${hardware.code}`;

    return this.http.put(url, hardware, this.httpOptions)
      .pipe(
        tap(h => console.log(`updated hardware with code=${hardware.code}`)),
        catchError(this.handleError<any>('updateHardware'))
      );
  }

  deleteHardware(hardware: Hardware | string): Observable<Hardware> {
    const code = typeof hardware === 'string' ? hardware : hardware.code;
    const url = `${this.hardwareUrl}/${code}`;

    return this.http.delete<Hardware>(url, this.httpOptions)
      .pipe(
        tap(h => console.log(`deleted hardware with code=${code}`)),
        catchError(this.handleError<Hardware>('deleteHardware'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(operation);
      console.error(error);
      return of(result as T);
    };
  }

}
