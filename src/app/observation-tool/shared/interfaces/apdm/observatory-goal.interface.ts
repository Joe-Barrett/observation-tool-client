// Generated using typescript-generator version 2.5.423 on 2018-07-19 14:12:38.

import {IAbstractScienceGoal} from './abstract-science-goal.interface';
import {ICalibrationSetupParameters} from './calibration-setup-parameters.interface';
import {IObservatoryGoalControlParameters} from './observatory-goal-control-parameters.interface';
import {IObservatoryGoalTargetParameters} from './observatory-goal-target-parameters.interface';
import {ISpectralSetupParameters} from './spectral-setup-parameters.interface';
import {Time} from '../../../../units/classes/time';

export interface IObservatoryGoal extends IAbstractScienceGoal {
  '@type': 'ObservatoryGoalT';
  purpose: string;
  integrationTime: Time;
  useQuery: boolean;
  CalibrationSetupParameters: ICalibrationSetupParameters;
  observatoryGoalControlParameters: IObservatoryGoalControlParameters;
  observatoryGoalTargetParameters: IObservatoryGoalTargetParameters[];
  SpectralSetupParameters: ISpectralSetupParameters;
}
