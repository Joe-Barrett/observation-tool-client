import {NgModule} from '@angular/core';
import {FieldSetupModule} from '../field-setup/field-setup.module';
import {SharedModule} from '../shared/shared.module';
import {SpectralSetupModule} from '../spectral-setup/spectral-setup.module';
import {CalibrationSetupComponent} from './components/calibration-setup/calibration-setup.component';
import {ControlPerformanceComponent} from './components/control-performance/control-performance.component';
import {GeneralComponent} from './components/general/general.component';
import {TechnicalJustificationComponent} from './components/technical-justification/technical-justification.component';
import {ScienceGoalRoutingModule} from './science-goal-routing.module';
import {ScienceGoalComponent} from './science-goal.component';
import {RouterModule} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    FieldSetupModule,
    NgbModule.forRoot(),
    SharedModule,
    SpectralSetupModule,
    ScienceGoalRoutingModule,
  ],
  declarations: [
    CalibrationSetupComponent,
    ControlPerformanceComponent,
    GeneralComponent,
    TechnicalJustificationComponent,
    ScienceGoalComponent,
  ],
  providers: [],
  exports: [
    ScienceGoalComponent
  ]
})

export class ScienceGoalModule {
}