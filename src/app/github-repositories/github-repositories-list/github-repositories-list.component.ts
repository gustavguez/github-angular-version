import { Component, Input } from '@angular/core';
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
