import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  userForm: FormGroup;
  userDetails: any;

   constructor(private service: ServiceService){
     this.userForm = new FormGroup({
       id: new FormControl(''),
       name: new FormControl(''),
       email: new FormControl(''),
       gender: new FormControl(''),
      status: new FormControl('')
     })
   }

  ngOnInit(): void {

  }
  onSubmit(){

    this.service.saveData(this.userForm.value).subscribe({next:res=>{
      if(res){
        this.userDetails = res;
        console.log('response', res);
        this.userForm.reset();
      }
    },
    error:(err:any) => {
      if(err){
        console.log('error', err);
      }
    },
  })
  console.log(this.userForm.value);
  return this.userForm.value;
  }

}
