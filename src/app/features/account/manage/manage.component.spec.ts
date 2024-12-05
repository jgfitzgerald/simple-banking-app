import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageComponent } from './manage.component';
import { AccountModule } from '../account.module';

describe('ManageComponent', () => {
  let component: ManageComponent;
  let fixture: ComponentFixture<ManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManageComponent],
      imports: [AccountModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
