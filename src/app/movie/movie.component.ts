import { Component, ComponentFactoryResolver } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent {
  movie : Array<object> =[
    {id:1,moviename:"bahubali",director:"Mani"},
    {id:2,moviename:"pushpa",director:"sai"},
    {id:3,moviename:"sahoo",director:"ani"},
    {id:4,moviename:"Guntur karam",director:"ai"}
  ]
  constructor(private route:ActivatedRoute){}
  ngOnInit():void{
    this.route.paramMap.subscribe(value =>{
      let id=value.get('id');
      const title=value.get('title');
      console.log(id);
      console.log(title);  
    });

    
      
  
}

}
