import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReactiveService {

  // tslint:disable-next-line: ban-types
  private subject = new BehaviorSubject<Object>({});
  private data: any = { state: [] };

  constructor() {
    this.data.state = [];
  }

  getObservable(): Observable<any> {
    return this.subject.asObservable();
  }

  setData(value: any): void {
    const keyValue = Object.keys(value);
    this.data.state[keyValue[0]] = value[keyValue[0]];
    console.log(this.data.state);
    this.subject.next(this.data.state);
  }

  closeObservable(): void {
    this.subject.unsubscribe();
  }

}
