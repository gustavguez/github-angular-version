import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-github-repositories-header',
  templateUrl: './github-repositories-header.component.html',
  styleUrls: ['./github-repositories-header.component.scss']
})
export class GithubRepositoriesHeaderComponent {
  //Input and Outputs
  @Output() onSearch: EventEmitter<string> = new EventEmitter();
  @Input() isLoading: boolean = false;
  
  //Models
  searchForm: FormGroup;

  //Inject services
  constructor(
    private formBuilder: FormBuilder
  ) { 
    this.searchForm = this.formBuilder.group({
      username: this.formBuilder.control('', [Validators.required])
    });
  }

  onSearchEmit() {
    const username: string = this.searchForm.value.username;

    //Emit event
    this.onSearch.emit(username);
  }

}
