import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'graphs',
    loadChildren: () =>
      import('./graph/graph.module').then((m) => m.GraphModule),
  },
  {
    path: '**',
    redirectTo: 'graphs',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
