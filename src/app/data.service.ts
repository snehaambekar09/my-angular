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
    return this.http.get("http://localhost/emps");
  }

  SelectByNo(No)
  {
    return this.http.get("http://localhost/emps/" +No);
  }


  Delete(No)
  {
    return this.http.delete("http://localhost/emps/" +No);
  }

  Update(empobj)
  {
    return this.http.put("http://localhost/emps/" +empobj.No,empobj);
  }

  Insert(empobj)
  {
    return this.http.post("http://localhost/emps",empobj);
  }
}
