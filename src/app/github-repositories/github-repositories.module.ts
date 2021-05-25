import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GithubRepositoriesHeaderComponent } from './github-repositories-header/github-repositories-header.component';
import { GithubRepositoriesListComponent } from './github-repositories-list/github-repositories-list.component';
import { GithubRepositoriesComponent } from './github-repositories.component';

@NgModule({
  declarations: [
    GithubRepositoriesHeaderComponent,
    GithubRepositoriesListComponent,
    GithubRepositoriesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GithubRepositoriesComponent
  ]
})
export class GithubRepositoriesModule { }
