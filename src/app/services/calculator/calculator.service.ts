import { Injectable } from '@angular/core';
import { LoggerService } from '../logs/logger.service';

@Injectable({
  providedIn: 'root',
})
export class CalculatorService {
  _loggerSerivce: LoggerService | undefined;

  constructor(loggerService: LoggerService) {
    this._loggerSerivce = loggerService;
  }

  add(a: number, b: number) {
    const result = a + b;
    this._loggerSerivce?.log('Add Operation is called');
    return result;
  }

  substract(a: number, b: number) {
    const result = a - b;
    this._loggerSerivce?.log('Substraction is called');
    return result;
  }
}
