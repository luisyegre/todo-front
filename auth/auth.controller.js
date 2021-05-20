import { FetchRequest } from '../libs/request';

export class AuthController{
  constructor(){
    this.request=new FetchRequest({uri:'http://localhost:8000/api/auth/'});
  }
  async authenticate({email,password}){
    const resp= await this.request.post(JSON.stringify({email,password}))
    console.log(resp)
    return resp
  }
}