export class ErrorResponse {
  statusText: string;
  statusCode: string;
  error: string;
  errorCode: string;
   constructor(values: Object = {}){
      Object.assign(this, values);
  }
}
