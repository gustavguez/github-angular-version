import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubRepositoriesListComponent } from './github-repositories-list.component';

describe('GithubRepositoriesListComponent', () => {
  let component: GithubRepositoriesListComponent;
  let fixture: ComponentFixture<GithubRepositoriesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubRepositoriesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubRepositoriesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
