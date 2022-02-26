import { Component, OnInit, Input } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
interface users{
  name: string,
  email: string,
  gender: string,
  status: string
}
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private service: ServiceService) { }
  params: any;
  p: any;
  usersData: users[] = [];
  @Input() userDetails: any
  ngOnChanges() {
    if(this.userDetails)
    this.usersData.push(this.userDetails)
  }
  ngOnInit(): void {
   this.service.getData().subscribe(res => {
     if(res) {
       this.usersData = res
     }
   } , (err) => {
     console.log('Error is ' , err)
   })
  }


}
