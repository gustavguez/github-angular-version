import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { GithubRepositoryModel } from './github-repository.model';

@Injectable({
  providedIn: 'root'
})
export class GithubRepositoriesService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public fetchRepositories(username: string): Observable<GithubRepositoryModel[]>{
    return this.httpClient.get(environment.githubApiUrl.replace(':username', username)).pipe(
      map((response: any) => {
        const resp: GithubRepositoryModel[] = [];

        //Map response to models
        if(response instanceof Array){
          response.forEach((json: any) => {
            const model: GithubRepositoryModel = new GithubRepositoryModel();
            model.fromJSON(json);
            resp.push(model);
          });
        }
        return resp.sort((a: GithubRepositoryModel, b: GithubRepositoryModel) => {
          return (a.updateAt! > b.updateAt!) ? -1 : 1;
        });
      })
    );
  }
}
