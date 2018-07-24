// Generated using typescript-generator version 2.5.423 on 2018-07-19 14:12:38.

import {IAngleT, IFluxT, ITimeT} from '../test';

export interface IObservatoryGoalControlParameters {
  elevationLimit: IAngleT;
  antennaPositionTolerance: IAngleT;
  sBMaximumTime: ITimeT;
  randomizeOrder: boolean;
  minFlux: IFluxT;
  maxFlux: IFluxT;
}
