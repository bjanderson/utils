import { defaultNumber } from '../../utils';
import { ErrorResponse } from './error-response.model';

describe('ErrorResponse', () => {
  describe('constructor defaults', () => {
    const defaults = {
      errorMessage: 'An Error Occurred',
      status: defaultNumber
    };

    it('should have the expected fields', () => {
      expect(Object.keys(defaults)).toEqual(Object.keys(new ErrorResponse()));
    });

    it('should set the default values when given no input object', () => {
      expect(Object.values(defaults)).toEqual(Object.values(new ErrorResponse()));
    });

    it('should set the default values when given null', () => {
      expect(Object.values(defaults)).toEqual(Object.values(new ErrorResponse(null)));
    });
  });

  describe('constructor assignments', () => {
    it('should set all values passed into the constructor', () => {
      const test = {
        errorMessage: 'test errorMessage',
        status: 404
      };

      expect(Object.values(test)).toEqual(Object.values(new ErrorResponse(test)));
    });
  });
});
