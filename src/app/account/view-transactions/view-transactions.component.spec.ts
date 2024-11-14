import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTransactionsComponent } from './view-transactions.component';
import { FormsModule } from '@angular/forms';

describe('ViewTransactionsComponent', () => {
  let component: ViewTransactionsComponent;
  let fixture: ComponentFixture<ViewTransactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewTransactionsComponent],
      imports: [FormsModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
