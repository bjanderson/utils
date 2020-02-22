import { getObject, getString, getValueOrDefault } from '../../utils';
import { HttpCode } from '../../enums';

/**
 * This is a simple error reponse object that should contain the
 * status and errorMessage from any errors received from an api call.
 */
export class ErrorResponse {
  public errorMessage: string;
  public status: HttpCode;

  constructor(o?: Partial<ErrorResponse>) {
    const obj = getObject(o);
    this.errorMessage = getString(obj.errorMessage, 'An Error Occurred');
    this.status = getValueOrDefault(obj.status, HttpCode.NO_RESPONSE);
  }
}
