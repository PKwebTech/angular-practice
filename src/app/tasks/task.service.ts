import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class TaskService {
    private tasks: any;
    constructor() {
        const tasks = localStorage.getItem('tasks');
        if (tasks) {
            this.tasks = JSON.parse(tasks);
        }
    }
    getUserTasks(userId: string) {
        return this.tasks.filter((task: any) => task.userId == userId);
    }
    AddUserTask(task: any) {
        this.tasks.unshift({
            id: new Date().getTime().toString(),
            userId: task.userId,
            title: task.title,
            summary: task.summary,
            dueDate: task.dueDate,
        })
        this.updateTask();
    }
    removeTask(id: string) {
        this.tasks = this.tasks.filter((task: any) => task.id != id);
        this.updateTask();
    }
    private updateTask() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
}