import { Component } from '@angular/core'; 
import { HeaderComponentComponent } from './header/header-component.component';
import { UserComponent } from "./user/user.component"; 
import { DUMMY_USERS } from '../dummy-users';
import { TasksComponent } from "./tasks/tasks.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponentComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-19-practice';
  users = DUMMY_USERS;
  selectedUsedId : string = '';

  get selectedUser(){
    return this.users.find((user) => user.id === this.selectedUsedId)!;
  }

  onSelectedUser(id : string){
    this.selectedUsedId = id;
  }
}
