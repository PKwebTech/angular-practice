import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TaskService } from './task.service';

@Component({
  selector: 'app-task',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskComponent {
  @Input({ required: true }) id!: string;
  @Input({ required: true }) name!: string;
  isAddingTask = false;
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';
  constructor(private taskService: TaskService) { }
  get selectedUserTasks() {
    return this.taskService.getUserTasks(this.id);
  }
  onTaskComplete(id: string) {
    this.taskService.removeTask(id);
  }
  onStartAddTask() {
    this.isAddingTask = true;
  }
  onCancelAddTask() {
    this.isAddingTask = false;
  }
  onSubmit() {
    this.taskService.AddUserTask({ userId: this.id, title: this.enteredTitle, summary: this.enteredSummary, dueDate: this.enteredDate });
    this.isAddingTask = false;
  }
}
