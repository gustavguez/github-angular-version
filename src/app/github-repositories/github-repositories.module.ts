import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { GithubRepositoriesHeaderComponent } from './github-repositories-header/github-repositories-header.component';
import { GithubRepositoriesListComponent } from './github-repositories-list/github-repositories-list.component';
import { GithubRepositoriesComponent } from './github-repositories.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    GithubRepositoriesHeaderComponent,
    GithubRepositoriesListComponent,
    GithubRepositoriesComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    HttpClientModule
  ],
  exports: [
    GithubRepositoriesComponent
  ]
})
export class GithubRepositoriesModule { }
