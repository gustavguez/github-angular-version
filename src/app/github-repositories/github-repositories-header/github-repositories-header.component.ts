import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GithubRepositoriesService } from '../api/github-repositories.service';
import { GithubRepositoryModel } from '../api/github-repository.model';

@Component({
  selector: 'app-github-repositories-header',
  templateUrl: './github-repositories-header.component.html',
  styleUrls: ['./github-repositories-header.component.scss']
})
export class GithubRepositoriesHeaderComponent {
  //Models
  searchForm: FormGroup;
  isLoading: boolean;

  //Inject services
  constructor(
    private formBuilder: FormBuilder,
    private githubRepositoriesService: GithubRepositoriesService
  ) { 
    //Init all models
    this.isLoading = false;
    this.searchForm = this.formBuilder.group({
      username: this.formBuilder.control('', [Validators.required])
    });
  }

  onSearch() {
    const username: string = this.searchForm.value.username;

    //Start loading
    this.isLoading = true;

    //Notify
    this.githubRepositoriesService.notifyNewRepositoriesFetched(null);

    //Do request
    this.githubRepositoriesService.fetchRepositories(username).subscribe(
      (repositories: GithubRepositoryModel[]) => {
        //Notify
        this.githubRepositoriesService.notifyNewRepositoriesFetched(repositories);

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
