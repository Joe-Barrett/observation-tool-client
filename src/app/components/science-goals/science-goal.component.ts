import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-science-goal',
  templateUrl: './science-goal.component.html',
  styleUrls: ['./science-goal.component.scss']
})
export class ScienceGoalComponent implements OnInit {

  scienceGoals = {
    'general': {title: 'General', path: ''},
    'fieldSetup': {title: 'Field Setup', path: 'fieldSetup'},
    'spectralSetup': {title: 'Spectral Setup', path: ''},
    'calibrationSetup': {title: 'Calibration Setup', path: ''},
    'control': {title: 'Control and Performance', path: ''},
    'technicalJustification': {title: 'Technical Justification', path: ''}
  };
  goalKeys = Object.keys;

  constructor() { }

  ngOnInit() {
  }

}
