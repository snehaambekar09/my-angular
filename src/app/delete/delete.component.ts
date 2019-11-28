import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit 
{
  

  constructor(private route:ActivatedRoute,
              private router:Router,
              private service:DataService) 
   {
     

   }

   ngOnInit()
   {
     this.route.paramMap.subscribe((result)=>{
     let No=  result.get("No");

     let observableResult=
     this.service.Delete(No);

     observableResult.subscribe((data)=>{
       console.log(data);

      this.router.navigate(['/home']);

     });

     });
}
}