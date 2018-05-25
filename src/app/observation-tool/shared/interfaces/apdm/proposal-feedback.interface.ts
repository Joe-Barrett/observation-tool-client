import {Time} from '../../../../units/classes/time';
import {IDataRateBreakdown} from './data-rate-breakdown.interface';
import {IReceiverTimeBreakdown} from './receiver-time-breakdown.interface';
import {ITimeAllocationBreakdown} from './time-allocation-breakdown.interface';
import {IArrayTimeBreakdown} from './array-time-breakdown.interface';

export interface IProposalFeedback {
  estimatedTotalIntegrationTime: Time;
  arrayTimeBreakdown: IArrayTimeBreakdown;
  dataRateBreakdown: IDataRateBreakdown;
  receiverTimeBreakdown: IReceiverTimeBreakdown;
  timeAllocationBreakdown: ITimeAllocationBreakdown;
}