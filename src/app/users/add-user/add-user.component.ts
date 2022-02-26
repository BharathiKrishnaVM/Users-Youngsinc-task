import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements OnInit {
  userForm: FormGroup;
  userDetails: any;

  constructor(private service: ServiceService) {
    this.userForm = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      gender: new FormControl(''),
      status: new FormControl(''),
    });
  }

  ngOnInit(): void {}
  onSubmit() {
   let dummy:any = this.userForm.value;
   console.log(dummy);
    this.service.saveData(this.userForm.value).subscribe(res => {
      if(res){
          this.userDetails = res;
          console.log('response', res);
          this.userForm.reset();
      }
    })
  }
}
