import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from 'src/app/todos/components/todos/todos.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from 'src/app/todos/components/header/header.component';
import { TodosService } from 'src/app/todos/services/todos.service';
import { MainComponent } from './components/main/main.component';

import { FooterComponent } from './components/footer/footer.component';
import { TodoComponent } from './components/todo/todo.component';

const routes: Routes = [
  {
    path: '',
    component: TodosComponent,
  },
];

@NgModule({
  declarations: [
    TodosComponent,
    HeaderComponent,
    MainComponent,
    TodoComponent,
    FooterComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
  providers: [TodosService],
})
export class TodosModule {}
