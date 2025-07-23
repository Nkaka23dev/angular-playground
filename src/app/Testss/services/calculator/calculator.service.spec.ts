import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  let mockLoggerService: any;
  let calculatorService: CalculatorService;

  beforeEach(() => {
    console.log('BEFORE EACH IS RUNNING...');
    mockLoggerService = jasmine.createSpyObj('LoggerService', ['log']);
    calculatorService = new CalculatorService(mockLoggerService);
  });
  it('Should add two numbers', () => {
    console.log('add is running');
    const result = calculatorService.add(4, 7);
    expect(result).toBe(11);
    expect(mockLoggerService.log).toHaveBeenCalledTimes(1);
  });
  it('should substract two numbers', () => {
    console.log('substract is running');
    const result = calculatorService.substract(4, 4);
    expect(result).toBe(0);
    expect(mockLoggerService.log).toHaveBeenCalledTimes(1);
  });
});

/* EXPLANATION BELOW ---->*/

// describe('CalculatorService', () => {
//   xit('Should add two numbers', () => {
//     /*WHITH  sypOn() to mock log will make the constructor of LoggerService to be called
//     so we commented it and mocked the whole service including the method log because we do not want to
//     instanciate LoggerService*/
//     // const loggerService = new LoggerService();
//     // spyOn(loggerService, 'log');
//     let mockLoggerService = jasmine.createSpyObj('LoggerService', ['log']);
//     // const service = new CalculatorService(loggerService);
//     const service = new CalculatorService(mockLoggerService);
//     const result = service.add(4, 7);
//     expect(result).toBe(11);
//     expect(mockLoggerService.log).toHaveBeenCalledTimes(1);
//   });
//   it('should substract two numbers', () => {
//     // const loggerService = new LoggerService();
//     // spyOn(loggerService, 'log');
//     let mockLoggerService = jasmine.createSpyObj('LoggerService', ['log']);
//     // const service = new CalculatorService(loggerService);
//     const service = new CalculatorService(mockLoggerService);
//     const result = service.substract(4, 4);
//     expect(result).toBe(0);
//     expect(mockLoggerService.log).toHaveBeenCalledTimes(1);
//   });
// });
