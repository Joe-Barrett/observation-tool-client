/*
 * ALMA - Atacama Large Millimeter Array
 * Copyright (c) UKATC - UK Astronomy Technology Centre, Science and Technology Facilities Council, 2018
 * (in the framework of the ALMA collaboration).
 * All rights reserved.
 *
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 2.1 of the License, or (at your option) any later version.
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with this library; if not, write to the Free Software
 * Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA 02111-1307  USA
 */

import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {tap} from 'rxjs/operators';
import {ToastsManager} from 'ng2-toastr';
import {ErrorObservable} from 'rxjs/observable/ErrorObservable';
import * as _ from 'lodash';
import {IObsProject} from '../generated/apdm/obsproject.interface';
import {IObsProposal} from '../generated/apdm/obsproposal.interface';
import {IAbstractScienceGoalUnion} from '../generated/apdm/abstract-science-goal.interface';
// import {IObsProposal} from '../interfaces/apdm/obs-proposal.interface';
// import {IScienceGoal} from '../interfaces/apdm/science-goal.interface';

const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'
  })
};

/**
 * Service to supply data to pages and sections from stored objects
 */
@Injectable()
export class ProjectService implements CanActivate {
  get selectedProject(): IObsProject {
    return this._selectedProject;
  }

  set selectedProject(value: IObsProject) {
    this._selectedProject = value;
  }


  private baseUrl = 'http://localhost:8080/api/project';
  private _currentTarget = new BehaviorSubject<number>(0);
  private _loadedProject = new BehaviorSubject<IObsProject>(null);
  private _loadedProposal = new BehaviorSubject<IObsProposal>(null);
  private _loadedGoal = new BehaviorSubject<IAbstractScienceGoalUnion>(null);
  private _currentGoal = 0;

  private _selectedProject: IObsProject;

  /**
   * Constructor, loads data and sets members
   */
  constructor(private http: HttpClient,
              private router: Router,
              private toastr: ToastsManager) {
  }

  get currentTarget(): BehaviorSubject<number> {
    return this._currentTarget;
  }

  setCurrentTarget(value: number) {
    this._currentTarget.next(value);
  }

  get currentGoal(): number {
    return this._currentGoal;
  }

  set currentGoal(value: number) {
    this._currentGoal = value;
  }

  getAllProjects(): Observable<IObsProject[]> {
    return this.http.get<IObsProject[]>(`${this.baseUrl}/projects`).pipe(
      tap(
        data => {
        },
        error => this.handleError(error)
      )
    );
  }

  get loadedProject(): BehaviorSubject<IObsProject> {
    return this._loadedProject
  }

  get loadedProposal(): BehaviorSubject<IObsProposal> {
    return this._loadedProposal;
  }

  get loadedGoal(): BehaviorSubject<IAbstractScienceGoalUnion> {
    return this._loadedGoal;
  }

  selectProject() {
    this._loadedProject.next(this._selectedProject);
    this.loadProposal();
  }

  loadScienceGoal(index) {
    this.loadedGoal.next(this._loadedProposal.value.scienceGoals[index]);
  }

  loadProposal() {
    const options = {params: new HttpParams().set('proposalRef', this._loadedProject.value.obsProposalRef.entityId)};
    this.http.get<IObsProposal>(`${this.baseUrl}/proposal`, options).subscribe(result => {
      console.log(result);
      this._loadedProposal.next(result);
    });
  }

  hasProjectLoaded(): boolean {
    return this._loadedProject.getValue() !== null;
  }

  hasProposalLoaded(): boolean {
    return this._loadedProposal.getValue() !== null;
  }

  hasScienceGoals(): boolean {
    if (this.hasProposalLoaded()) {
      return this._loadedProposal.value.scienceGoals !== (null || undefined);
    }
  }

  hasSources(): boolean {
    if (this.hasScienceGoals()) {
      return this._loadedGoal.getValue().TargetParameters !== (null || undefined);
    }
    return false;
  }

  startNewProject() {
    // TODO Fix
    //   this.http.get('assets/new_project/ObsProject.json').subscribe(result => {
    //     this._loadedProject.next(Object.assign(new IObsProject, result));
    //   });
    //   this.http.get('assets/new_project/ObsProposal.json').subscribe(result => {
    //     this._loadedProposal.next(Object.assign(new ObsProposal, result));
    //   });
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.hasProjectLoaded()) {
      return true
    }
    this.router.navigate(['/new-start']).then();
    return false;
  }

  handleError(error: HttpErrorResponse) {
    console.log(error);
    if (error.status === 0) { // No server found or CORS
      this.toastr.error('Could not connect to server', 'Error');
    } else if (error.status === 404) {
      this.toastr.error('Not found', 'Error');
    } else if (error.status === 500) {
      this.toastr.error('Server error', 'Error');
    } else {
      this.toastr.error('Other error')
    }
    return new ErrorObservable('Broke');
  }

  addScienceGoal() {
    // TODO Fix
    // if (this.hasScienceGoals()) {
    //   this._loadedProposal.getValue().ScienceGoal.push(new ScienceGoal());
    // } else {
    //   this._loadedProposal.getValue().ScienceGoal = [new ScienceGoal()];
    // }
  }

  removeScienceGoal() {
    this._loadedProposal.getValue().scienceGoals.splice(this._currentGoal, 1);
    this._currentGoal--;
    if (this._currentGoal === -1) {
      this._currentGoal = 0;
    }
    if (this._loadedProposal.getValue().scienceGoals.length > 0) {
      this.loadScienceGoal(this._currentGoal);
    } else {
      this._loadedProposal.getValue().scienceGoals = undefined;
      this.router.navigate(['/project']).then(() => this.toastr.info('All science goals removed'));
    }
  }

  addSource() {
    // TODO Fix
    // if (this.hasSources()) {
    //   this._loadedGoal.getValue().TargetParameters.push(new TargetParameters());
    // } else {
    //   this._loadedGoal.getValue().TargetParameters = [new TargetParameters()];
    // }
  }

  removeSource() {
    this._loadedGoal.getValue().TargetParameters.splice(this._currentTarget.getValue(), 1);
    this._currentTarget.next(this._currentTarget.value - 1);
    if (this._currentTarget.value === -1) {
      this._currentTarget.next(0);
    }
    if (this._loadedGoal.getValue().TargetParameters.length <= 0) {
      this._loadedGoal.getValue().TargetParameters = undefined;
      this.router.navigate(['/science-goals/general']).then(() => this.toastr.info('All sources removed'));
    }
  }

  setPi(newPi: any) {
    const oldProposal = this._loadedProposal.getValue();
    oldProposal.PrincipalInvestigator = newPi;
    this._loadedProposal.next(oldProposal);
  }

  updateProposal(updates: IObsProposal) {
    console.log(this.loadedProposal.getValue());
    console.log(updates);
    this.http.put<IObsProposal>(`${this.baseUrl}/proposal`, _.merge(this.loadedProposal.getValue(), updates)).subscribe(response =>
      this._loadedProposal.next(response)
    );
  }

}
