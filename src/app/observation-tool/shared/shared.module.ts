import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {UnitsModule} from '../../units/units.module';
import {DegreesPipe} from './pipes/degrees.pipe';
import {SexagesimalPipe} from './pipes/sexagesimal.pipe';
import {PersistenceService} from './services/persistence.service';
import {SuiModule} from 'ng2-semantic-ui';
import {SimbadService} from './services/simbad.service';
import {SystemService} from './services/system.service';
import {ProjectImportComponent} from './components/project-import/project-import.component';
import { ProjectImportModalComponent } from './components/project-import-modal/project-import-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SuiModule,
    UnitsModule,
  ],
  declarations: [
    DegreesPipe,
    SexagesimalPipe,
    ProjectImportComponent,
    ProjectImportModalComponent,
  ],
  providers: [
    PersistenceService,
    SystemService,
    SimbadService
  ],
  exports: [
    CommonModule,
    RouterModule,
    FormsModule,
    UnitsModule,
    DegreesPipe,
    ProjectImportComponent,
    SexagesimalPipe,
    SuiModule,
  ]
})

export class SharedModule {
}
