import { Component, computed, Input, input,  output} from '@angular/core';

@Component({
  selector: 'app-user', 
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  // selectedUser = signal(DUMMY_USERS[randomeIndex]);
  // imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar); 
 
  // onSelectUser(){
  //   console.log('clicks');
  //   const randomeIndex = Math.floor(Math.random() * DUMMY_USERS.length);
  //   this.selectedUser.set(DUMMY_USERS[randomeIndex]);   
  // }
  //@Input({required: true}) avatar! : string;
  //@Input() name! : string;
  @Input() id!  : string;
  @Input({required: true}) selected! : boolean;
  //@Output() select = new EventEmitter();
 
  select = output<string>();
  avatar = input.required<string>();
  name = input.required<string>();
  imagePath = computed(() => 'assets/users/' + this.avatar());
 
  onSelectUser(){
    this.select.emit(this.id);
  } 
}
