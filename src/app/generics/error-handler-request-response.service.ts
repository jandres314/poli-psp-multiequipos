import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ErrorHandlerRequestResponseService {

    // Observable string sources
    public errorResponseSubject = new Subject<boolean>();
    // Observable string streams
    ErrorObservable = this.errorResponseSubject.asObservable();

    // Observable string sources
    public errorNotificationResponseSubject = new Subject<boolean>();
    // Observable string streams
    ErrorNotificationObservable = this.errorNotificationResponseSubject.asObservable();

    // add msg
    errorNotificationMsgSubject = new Subject<string>();

    constructor() { }

    checkError(response: any): void {
        if (response && (!response.respuesta || response.respuesta == null)) {
            const responseBody = response.json();
            if (responseBody && (responseBody.msgError || responseBody.msgValidacion || responseBody.msgInfo)) {
                this.errorResponseSubject.next(responseBody);
            }
        }
    }

    launchError(responseBody: any): void {
        this.errorResponseSubject.next(responseBody);
    }

    checkErrorNotification(response: any): void {
        if (response && response.status !== 200) {
            const responseBody = response.json();
            if (responseBody && (responseBody.msgError || responseBody.msgValidacion || responseBody.msgInfo)) {
                this.errorNotificationResponseSubject.next(responseBody);
            }
        }
    }

    launchErrorNotification(responseBody: any): void {
        this.errorNotificationResponseSubject.next(responseBody);
    }
}
