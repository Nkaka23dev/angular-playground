import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  logMessages: string[] = [];
  constructor() {
    debugger;
  }
  log(message: string) {
    debugger;
    this.logMessages.push(message);
  }
}
