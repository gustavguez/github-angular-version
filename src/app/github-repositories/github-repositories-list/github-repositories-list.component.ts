import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GithubRepositoriesService } from '../api/github-repositories.service';
import { GithubRepositoryModel } from '../api/github-repository.model';

@Component({
  selector: 'app-github-repositories-list',
  templateUrl: './github-repositories-list.component.html',
  styleUrls: ['./github-repositories-list.component.scss']
})
export class GithubRepositoriesListComponent{
  //Inputs and outputs
  @Input() repositories: GithubRepositoryModel[] = [];
}
