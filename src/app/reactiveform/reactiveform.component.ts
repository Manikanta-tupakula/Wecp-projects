import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {


  form :any
  constructor(){
     this.form=new FormGroup({
      fullname:new FormControl('',
      [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(10)
      ]
      ),
      email:new FormControl('',
      [
        Validators.email,
      ]
     
      ),
      address:new FormControl('',
      [
       
      ])
    });
  }
  ngOnInit(): void {
    const obsTest$=new Observable( observer =>{
      observer.next('Returned from observable');
      observer.next('Returned from observable1');
      setTimeout(()=>{
        observer.next('this is from timeout function');
      },2000);
      observer.next('Returned from observable2');
    }).subscribe( value => {
      console.log(value);
    });
    const obsTest=function(){
      //console.log("Returned from function.")
      return ' from function1';
      return ' from function2';
    }
    
    
  }
  get fullname(){
 
    return this.form.get("fullname")
  }
  get email(){
   
    return this.form.get("email")
  }
  get address(){
   
    return this.form.get("address")
  }
}
