import {HttpClientModule} from '@angular/common/http';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ModularPanelComponent} from '../shared/components/modular-panel/modular-panel.component';
import {PersistenceService} from '../shared/services/persistence.service';
import {TypeComponent} from './components/type/type.component';
import {VisualisationControlComponent} from './components/visualisation-control/visualisation-control.component';
import {VisualisationViewerComponent} from './components/visualisation-viewer/visualisation-viewer.component';
import {SpectralDataService} from './services/spectral-data.service';

import {SpectralSetupComponent} from './spectral-setup.component';

describe('SpectralSetupComponent', () => {
  let component: SpectralSetupComponent;
  let fixture: ComponentFixture<SpectralSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SpectralSetupComponent,
        ModularPanelComponent,
        VisualisationControlComponent,
        VisualisationViewerComponent,
        TypeComponent
      ],
      imports: [NgbModule.forRoot(), HttpClientModule],
      providers: [PersistenceService, SpectralDataService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture   = TestBed.createComponent(SpectralSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
