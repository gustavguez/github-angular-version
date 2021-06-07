import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GithubRepositoriesService } from './api/github-repositories.service';
import { GithubRepositoryModel } from './api/github-repository.model';

@Component({
  selector: 'app-github-repositories',
  templateUrl: './github-repositories.component.html',
  styleUrls: ['./github-repositories.component.scss']
})
export class GithubRepositoriesComponent {
  repositories: GithubRepositoryModel[];
  isLoading: boolean;

  constructor(
    private githubRepositoriesService: GithubRepositoriesService) {
    this.repositories = [];
    this.isLoading = false;
  }

  onSearch(username: string): void {
    this.repositories = [];

    //Start loading
    this.isLoading = true;

    //Do request
    this.githubRepositoriesService.fetchRepositories(username).subscribe(
      (repositories: GithubRepositoryModel[]) => {
        this.repositories = repositories;

        //Stop loading
        this.isLoading = false;
      },
      (error: HttpErrorResponse) => {
        //Stop loading
        this.isLoading = false;
      }
    )
  }

}
