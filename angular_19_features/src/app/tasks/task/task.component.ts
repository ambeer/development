import { Component, Input, Output, EventEmitter, OnInit, OnDestroy} from '@angular/core';
import { type Task } from './task.model';
 


@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent implements OnInit, OnDestroy  {
  @Input({required :true}) userTask! : Task;
  @Output() complete = new EventEmitter<string>();

  private timeOut! : NodeJS.Timeout;

  ngOnInit(){
    setInterval((){
      console.log("hi");
    }, 5000)
  }

  onCompleteTask(taskId : string){
    this.complete.emit(taskId);
  }
  ngOnDestroy(){
    clearTimeout(this.timeOut);
  } 

}
 


 
