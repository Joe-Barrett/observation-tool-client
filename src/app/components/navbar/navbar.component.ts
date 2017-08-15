import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {

  selectedGoal: any;

  items = [
    {
      title: 'PI Search',
      path: 'pi-entry'
    },
    {
      title: 'Project',
      path: 'project'
    },
    {
      title: 'Proposal',
      path: 'proposal'
    },
    {
      title: 'Planned Observing',
      path: 'plannedObs'
    }
  ];

  scienceGoals = [
    {
      title: 'Science Goal 1',
      path: 'sciGoals'
    },
    {
      title: 'Science Goal 2',
      path: 'sciGoals'
    },
    {
      title: 'Science Goal 3',
      path: 'sciGoals'
    }
  ];

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.selectedGoal = this.scienceGoals[0];
  }

  click(newGoal) {
    this.selectedGoal = newGoal;
  }


}
