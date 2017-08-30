import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModularPanelComponent } from './modular-panel.component';
import {NgbCollapseModule} from "@ng-bootstrap/ng-bootstrap";

describe('ModularPanelComponent', () => {
  let component: ModularPanelComponent;
  let fixture: ComponentFixture<ModularPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModularPanelComponent ],
      imports: [ NgbCollapseModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModularPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});