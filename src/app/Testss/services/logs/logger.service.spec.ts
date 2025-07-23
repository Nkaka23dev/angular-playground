import { LoggerService } from './logger.service';

describe('LoggerService', () => {
  let loggerService: LoggerService;
  beforeEach(() => {
    loggerService = new LoggerService();
  });
  it('should not have any message at the beginning', () => {
    //arrange
    //act
    const logMessagesCount = loggerService.logMessages.length;
    //assert
    expect(logMessagesCount).toBe(0);
  });
  it('should have message once the log method is called', () => {
    //arrange
    //act
    loggerService.log('message to log');
    //assert
    expect(loggerService.logMessages.length).toBe(1);
  });
  it('should remove all messages once clear method is called', () => {
    //arrange
    loggerService.log('message');
    //act
    loggerService.clear();
    //assert
    expect(loggerService.logMessages.length).toBe(0);
  });
});
