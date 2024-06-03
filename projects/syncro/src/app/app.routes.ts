import { Routes } from '@angular/router';
import { DemoComponent } from './sections/demo/demo.component';
import { CoverComponent } from './sections/cover/cover.component';

export const routes: Routes = [
  { path: '', component: CoverComponent },
  { path: 'sections', component: DemoComponent }
];
