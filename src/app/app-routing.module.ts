import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundPageComponent } from './core/pages/not-found-page/not-found-page.component';
import { AuthGuard } from './core/guard/auth.guard';
import { AdminComponent } from './core/pages/admin/admin.component';

const routes: Routes = [
  { path: '', redirectTo: 'search', pathMatch: 'full' },
  { path: 'search',
    loadChildren: () => import('./youtube/youtube.module').then(m => m.YoutubeModule),
    canActivate: [AuthGuard]
  },
  { path: 'login',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  { path: 'admin',
  component: AdminComponent

  },
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
