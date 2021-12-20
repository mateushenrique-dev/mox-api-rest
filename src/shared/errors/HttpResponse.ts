import { Response } from '../../interfaces/error';

class HttpResponse{
  static serverError():Response{
    return {
      statusCode:500,
    }
  }


  static badRequest(error:any):Response{
    return {
      statusCode:400,
      body:error
    }
  }

  static unauthorizedError():Response{
    return {
      statusCode:401,
    }
  }

  static ok(body:any):Response{
    return {
      statusCode:201,
      body
    }
  }

}

export { HttpResponse }
