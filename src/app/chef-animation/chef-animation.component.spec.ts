import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefAnimationComponent } from './chef-animation.component';

describe('ChefAnimationComponent', () => {
  let component: ChefAnimationComponent;
  let fixture: ComponentFixture<ChefAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChefAnimationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
