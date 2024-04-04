import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PractiseExmpComponent } from './practise-exmp.component';

describe('PractiseExmpComponent', () => {
  let component: PractiseExmpComponent;
  let fixture: ComponentFixture<PractiseExmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PractiseExmpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PractiseExmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
