import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CakesApiService {

  constructor(private _http: HttpClient) { }

  getAllCakes(){
    let url = environment.urlServiceGetAll
    return this._http.get(url)
  };
  getCakeById(id:String){
    let url = `${environment.urlServiceGetById}/${id}`
    return this._http.get(url)
  };
  createNewCake(jsonCake:any){
    let url = environment.urlServiceCreateNew
    return this._http.post(url,jsonCake)
  };
  updateCake(id:String, jsonCake: any){
    let url = `${environment.urlServiceUpdate}/${id}`
    return this._http.put(url,jsonCake)
  };
  deleteCake(id:String){
    let url = `${environment.urlServiceDelete}/${id}`
    return this._http.delete(url)
  };
}
