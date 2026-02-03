import { Routes } from '@angular/router';
import { QuestionComponent } from './question/question.component';
import { CelebrationComponent } from './celebration/celebration.component';

export const routes: Routes = [
  { path: '', component: QuestionComponent },
  { path: 'celebration', component: CelebrationComponent },
  { path: '**', redirectTo: '' }
];
