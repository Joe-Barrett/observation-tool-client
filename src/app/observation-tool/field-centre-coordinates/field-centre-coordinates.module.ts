import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {SharedModule} from '../shared/shared.module';
import {FccIndividualComponent} from './components/fcc-individual/fcc-individual.component';
import {FccRectangularComponent} from './components/fcc-rectangular/fcc-rectangular.component';
import {FieldCenterCoordinatesComponent} from './field-center-coordinates.component';

@NgModule({
  imports: [
    SharedModule,
    NgbModule.forRoot(),
  ],
  declarations: [
    FccIndividualComponent,
    FccRectangularComponent,
    FieldCenterCoordinatesComponent
  ],
  providers: [],
  exports: [
    FieldCenterCoordinatesComponent
  ]
})

export class FieldCentreCoordinatesModule {
}
