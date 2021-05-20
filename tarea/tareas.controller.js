import { FetchRequest } from '../libs/request';

export class TareaController{
  constructor(token){
    this.request=new FetchRequest({
      uri:'http://localhost:8000/api/tareas/',
      headers:{
        'Auth-Token':token||''
      }
    });
    this.token=token
  }
  setToken(newToken){
    this.token=newToken
    this.request=new FetchRequest({
      uri:'http://localhost:8000/api/tareas/',
      headers:{'Auth-Token':this.token}
    });
  }
  async create(tarea){
    return await this.request.post(JSON.stringify({tarea}))
  }
  async update({id,tarea}){
    return await this.request.patch(id,JSON.stringify({tarea}))
  }
  async delete(id){
    return await this.request.delete(id);
  }
  async getAll(){
    return await this.request.get();
  }
  async getOne(id){
    return await this.request.get(id);
  }
  
}