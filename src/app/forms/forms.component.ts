import { Component } from '@angular/core';
import { NgForm ,FormControl, NgModel} from '@angular/forms';
import { Router } from '@angular/router';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {

  onsubmit(f:NgForm){
    console.log(f);
  }
  getValue(f:NgModel){
    console.log(f);
  }



}
