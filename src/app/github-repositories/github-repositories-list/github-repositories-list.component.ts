import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GithubRepositoriesService } from '../api/github-repositories.service';
import { GithubRepositoryModel } from '../api/github-repository.model';

@Component({
  selector: 'app-github-repositories-list',
  templateUrl: './github-repositories-list.component.html',
  styleUrls: ['./github-repositories-list.component.scss']
})
export class GithubRepositoriesListComponent implements OnInit, OnDestroy {
  //Models
  repositories: GithubRepositoryModel[] | null;
  fetchSubscription: Subscription | null;

  //Inject services
  constructor(
    private githubRepositoriesService: GithubRepositoriesService
  ) {
    this.repositories = null;
    this.fetchSubscription = null;
  }

  ngOnInit(): void {
    this.fetchSubscription = this.githubRepositoriesService.onNewRepositoriesFetched.subscribe((repositories: GithubRepositoryModel[] | null) =>{
      this.repositories = repositories;
    });
  }

  ngOnDestroy(): void{
    if(this.fetchSubscription instanceof Subscription) {
      this.fetchSubscription.unsubscribe();
    }
  }

}
