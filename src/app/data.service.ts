import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService 
{
  
  constructor(public http:HttpClient) 
  { }
  Select()
  {
    return this.http.get("http://3.134.91.211:9898/emps");
  }

  SelectByNo(No)
  {
    return this.http.get("http://3.134.91.211:9898/emps/" +No);
  }


  Delete(No)
  {
    return this.http.delete("http://3.134.91.211:9898/emps/" +No);
  }

  Update(empobj)
  {
    return this.http.put("http://3.134.91.211:9898/emps/" +empobj.No,empobj);
  }

  Insert(empobj)
  {
    return this.http.post("http://3.134.91.211:9898/emps",empobj);
  }
}
