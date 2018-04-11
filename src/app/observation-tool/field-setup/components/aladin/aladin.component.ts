import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {
  ISinglePoint,
  ITargetParameters
} from '../../../shared/interfaces/project/science-goal/target-parameters.interface';
import {PersistenceService} from '../../../shared/services/persistence.service';
import {AladinService} from '../../services/aladin.service';
import {FormGroup} from '@angular/forms';
import {Longitude} from '../../../../units/classes/longitude';
import {LongitudeUnits} from '../../../../units/enums/longitude-units.enum';
import {LatitudeUnits} from '../../../../units/enums/latitude-units.enum';
import {Latitude} from '../../../../units/classes/latitude';

@Component({
  selector: 'app-aladin',
  templateUrl: './aladin.component.html',
  styleUrls: ['./aladin.component.css']
})
export class AladinComponent implements OnInit, AfterViewInit {

  @Output() coordinatesEmitter = new EventEmitter();
  @Output() fovAddedEmitter = new EventEmitter();
  @Output() rectAddedEmitter = new EventEmitter();

  @Input() form: FormGroup;
  target?: ITargetParameters;
  addingRect = false;
  addingFov = false;

  constructor(private persistenceService: PersistenceService,
              private aladinService: AladinService) {
  }

  ngOnInit() {
    // this.persistenceService.getScienceGoal().subscribe(result => {
    //   this.target = result.TargetParameters[this.persistenceService.currentTarget];
    //   this.aladinService.goToRaDec(this.target.sourceCoordinates.longitude.content, this.target.sourceCoordinates.latitude.content);
    //   if (this.target.SinglePoint) {
    //     this.target.SinglePoint.forEach((point: ISinglePoint) => {
    //       this.aladinService.addPointing(new Fov(
    //         false,
    //         false,
    //         [
    //           this.target.sourceCoordinates.longitude.content + Object.assign(new Longitude, point.centre.longitude).getValueInUnits(LongitudeUnits.DEG),
    //           this.target.sourceCoordinates.latitude.content + Object.assign(new Latitude, point.centre.longitude).getValueInUnits(LongitudeUnits.DEG)
    //         ],
    //         null,
    //         0.05,
    //         25
    //       ))
    //     })
    //   }
    // });
  }

  ngAfterViewInit() {
    this.aladinService.initAladin();
    this.observeFormChanges();
  }

  resetView() {
    this.aladinService.goToObject(this.target.prj_sourceName, this.target.prj_sourceCoordinates.val_longitude.content, this.target.prj_sourceCoordinates.val_latitude.content);
  }

  zoomIn() {
    this.aladinService.zoomIn()
  }

  zoomOut() {
    this.aladinService.zoomOut();
  }

  normalZoom() {
    this.aladinService.resetZoom();
  }

  goToCoords(lon: number, lat: number) {
    this.aladinService.goToRaDec(lon, lat);
  }

  mouseMove(event: MouseEvent) {
    this.coordinatesEmitter.emit({
      pixel: [event.layerX, event.layerY],
      world: this.aladinService.coordsPixToWorld([event.layerX, event.layerY])
    });
  }

  mouseLeave() {
    this.coordinatesEmitter.emit({
      pixel: [document.getElementById('aladin-lite-div').offsetWidth / 2,
        document.getElementById('aladin-lite-div').offsetHeight / 2],
      world: this.aladinService.RaDec
    });
  }

  viewMode() {
    // TODO Work out what happens here
    this.aladinService.showPointings();
  }

  editMode() {
    // TODO Work out what happens here
    // Stop form subscriptions
    // hide overlays
    this.aladinService.hidePointings();
  }

  observeFormChanges() {
    this.form.valueChanges.subscribe((value: ITargetParameters) => {
      this.aladinService.goToRaDec(this.form.value.prj_sourceCoordinates.val_longitude.content, this.form.value.prj_sourceCoordinates.val_latitude.content);
      this.aladinService.clearPointings();
      value.prj_SinglePoint.forEach((point: ISinglePoint) => {
        this.aladinService.addPointing(
          value.prj_sourceCoordinates.val_longitude.content + Object.assign(new Longitude, point.prj_centre.val_longitude).getValueInUnits(LongitudeUnits.DEG),
          value.prj_sourceCoordinates.val_latitude.content + Object.assign(new Latitude, point.prj_centre.val_latitude).getValueInUnits(LatitudeUnits.DEG)
        );
      });
    });
  }

}
