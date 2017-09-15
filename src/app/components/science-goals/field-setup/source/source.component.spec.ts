import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceComponent } from './source.component';
import {FormsModule} from "@angular/forms";
import {SexagesimalPipe} from "../../../../pipes/sexagesimal.pipe";
import {DegreesPipe} from "../../../../pipes/degrees.pipe";
import {DelayTooltipDirective} from "../../../../directives/delay-tooltip.directive";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

describe('SourceComponent', () => {
  let component: SourceComponent;
  let fixture: ComponentFixture<SourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourceComponent, SexagesimalPipe, DegreesPipe, DelayTooltipDirective ],
      imports: [ FormsModule, NgbModule.forRoot() ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});