import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceExpectedPropertiesComponent } from './source-expected-properties.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {DelayTooltipDirective} from "../../../../directives/delay-tooltip.directive";

describe('SourceExpectedPropertiesComponent', () => {
  let component: SourceExpectedPropertiesComponent;
  let fixture: ComponentFixture<SourceExpectedPropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourceExpectedPropertiesComponent, DelayTooltipDirective ],
      imports: [NgbModule.forRoot()]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourceExpectedPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});