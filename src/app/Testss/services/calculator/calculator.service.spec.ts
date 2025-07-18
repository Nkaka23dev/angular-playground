import { LoggerService } from '../logs/logger.service';
import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  it('Should add two numbers', () => {
    // const loggerService = new LoggerService();
    // spyOn(loggerService, 'log');
    let mockLoggerService = jasmine.createSpyObj('LoggerService', ['log']);
    // const service = new CalculatorService(loggerService);
    const service = new CalculatorService(mockLoggerService);
    const result = service.add(4, 7);
    expect(result).toBe(11);
    expect(mockLoggerService.log).toHaveBeenCalledTimes(1);
  });
  it('should substract two numbers', () => {
    // const loggerService = new LoggerService();
    // spyOn(loggerService, 'log');
    let mockLoggerService = jasmine.createSpyObj('LoggerService', ['log']);
    // const service = new CalculatorService(loggerService);
    const service = new CalculatorService(mockLoggerService);
    const result = service.substract(4, 4);
    expect(result).toBe(0);
    expect(mockLoggerService.log).toHaveBeenCalledTimes(1);
  });
});
