import { StrengthPipe } from './strength.pipe';

describe('StrengthPipe', () => {
  let pipe: StrengthPipe;
  beforeEach(() => {
    //arrange for all
    pipe = new StrengthPipe();
  });
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
  it('should display weak when the input value is 5', () => {
    //act
    const result = pipe.transform(5);
    //assertion
    expect(result).toEqual('5 Weak');
  });
  it('shoud display strong when a value is between 10 and 20', () => {
    //act
    const result = pipe.transform(19);
    //assert
    expect(result).toEqual('19Strong');
  });
  it('should display very strong wehn a value is or above 20', () => {
    //act
    const result = pipe.transform(20);
    //assert
    expect(result).toEqual('20Very Strong');
  });
});
