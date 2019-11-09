import { getNumber, getObject, getString } from '../../utils';

/**
 * This is a simple error reponse object that should contain the
 * status and errorMessage from any errors received from an api call.
 */
export class ErrorResponse {
  public errorMessage: string;
  public status: number;

  constructor(o?: Partial<ErrorResponse>) {
    const obj = getObject(o);
    this.errorMessage = getString(obj.errorMessage, 'An Error Occurred');
    this.status = getNumber(obj.status);
  }
}
