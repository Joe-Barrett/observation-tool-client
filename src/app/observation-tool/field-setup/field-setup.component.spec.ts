import {HttpClientTestingModule} from '@angular/common/http/testing';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SuiModule} from 'ng2-semantic-ui';
import {DegreesPipe} from '../shared/pipes/degrees.pipe';
import {SexagesimalPipe} from '../shared/pipes/sexagesimal.pipe';
import {ProjectService} from '../shared/services/project.service';
import {SimbadService} from '../shared/services/simbad.service';
import {SystemService} from '../shared/services/system.service';
import {AladinComponent} from './components/aladin/aladin.component';
import {ExpectedSourcePropertiesComponent} from './components/expected-source-properties/expected-source-properties.component';
import {FieldCenterCoordinatesComponent} from './components/field-centre-coordinates/field-center-coordinates.component';
import {FovParametersComponent} from './components/fov-parameters/fov-parameters.component';
import {ImageQueryComponent} from './components/image-query/image-query.component';
import {SourceComponent} from './components/source/source.component';
import {SpacialImageComponent} from './components/spacial-image/spacial-image.component';

import {FieldSetupComponent} from './field-setup.component';

describe('FieldSetupComponent', () => {
  let component: FieldSetupComponent;
  let fixture: ComponentFixture<FieldSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
                                     declarations: [
                                       FieldSetupComponent,
                                       FieldCenterCoordinatesComponent,
                                       SpacialImageComponent,
                                       FovParametersComponent,
                                       ImageQueryComponent,
                                       SourceComponent,
                                       ExpectedSourcePropertiesComponent,
                                       SexagesimalPipe,
                                       DegreesPipe,
                                       AladinComponent
                                     ],
                                     imports: [
                                       HttpClientTestingModule,
                                       FormsModule,
                                       ReactiveFormsModule,
                                       SuiModule
                                     ],
                                     providers: [
                                       ProjectService,
                                       SystemService,
                                       SimbadService
                                     ]
                                   })
           .compileComponents();
  }));

  beforeEach(() => {
    fixture   = TestBed.createComponent(FieldSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should be created', () => {
  //   expect(component).toBeTruthy();
  // });
});
