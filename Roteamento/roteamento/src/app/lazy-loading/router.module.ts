import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { LazyLoadingModule } from './lazy-loading.module';



@NgModule({
  
})
export class RouterModule {
  static forChild(routes: Router): any[] | import("@angular/core").Type<any> | import("@angular/core").ModuleWithProviders<{}> {
    throw new Error('Method not implemented.');
  }
}
