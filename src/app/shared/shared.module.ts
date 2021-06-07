import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarLoaderDirective } from './directives/avatar-loader.directive';

@NgModule({
  declarations: [
    AvatarLoaderDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AvatarLoaderDirective
  ]
})
export class SharedModule { }
