
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { HeaderOnlyLayoutComponent } from './layout/header-only-layout/header-only-layout.component';


const routes: Routes = [

  {
    path: '', component: MainLayoutComponent, children: [
      { path: '', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) }
    ]
  },
  {
    path: 'hearder', component: HeaderOnlyLayoutComponent, children: [
      { path: '', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) }
    ]
  },
  {
    path: 'first', component: HeaderOnlyLayoutComponent, children: [
      { path: '', loadChildren: () => import('./modules/first/first.module').then(m => m.FirstModule) }
    ]
  },
  {
    path: 'test', component: HeaderOnlyLayoutComponent, children: [
      { path: '', loadChildren: () => import('./modules/test1/test1.module').then(m => m.Test1Module) }
    ]
  },
  {
    path: 'todo', component: HeaderOnlyLayoutComponent, children: [
      { path: '', loadChildren: () => import('./modules/todo/todo.module').then(m => m.TodoModule) }
    ]
  },

  { path: 'rxjs', loadChildren: () => import('./modules/rxjs/rxjs.module').then(m => m.RxjsModule) },
  // {
  //   path: 'first', component: MainLayoutComponent, children: [
  //     { path: '', loadChildren: () => import('./modules/first/first.module').then(m => m.FirstModule) },
  //     { path: 'first2', loadChildren: () => import('./modules/first/first.module').then(m => m.FirstModule) }
  //   ]
  // },





  // { path: '', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },


  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
    initialNavigation: 'enabled',
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    relativeLinkResolution: 'legacy'
})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
