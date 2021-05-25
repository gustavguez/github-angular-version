import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubRepositoriesHeaderComponent } from './github-repositories-header.component';

describe('GithubRepositoriesHeaderComponent', () => {
  let component: GithubRepositoriesHeaderComponent;
  let fixture: ComponentFixture<GithubRepositoriesHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubRepositoriesHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubRepositoriesHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
