import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-ticket-issue',
  templateUrl: './ticket-issue.component.html',
  styleUrls: ['./ticket-issue.component.css']
})
export class TicketIssueComponent implements OnInit {

  people: any ={};
  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    this.getPeopleData();
  }

  getPeopleData(){
    this.service.getPeople().subscribe(each => this.people = each);
  }

}
