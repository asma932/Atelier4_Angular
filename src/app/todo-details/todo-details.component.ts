import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersServiceService } from '../core/Services/users.service';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent implements OnInit {
  Todo : any[]=[];
  id!:number;
  constructor(private actR : ActivatedRoute,private UsersSer :UsersServiceService) { }

  getTodo(id :number){
    this.UsersSer.getUserByTodoId(id).subscribe(data =>{
      this.Todo = data;
    });
  }
  ngOnInit(): void {
    this.actR.paramMap.subscribe(params=>this.id= Number(params.get('id')));
    this.getTodo(this.id);
  }

}
