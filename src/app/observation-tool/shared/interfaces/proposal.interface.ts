import {AlmaInvestigatorInterface} from './alma-investigator.interface';
import {ScienceGoalInterface} from './science-goal.interface';

// export enum ProposalTypeEnum {
//   REGULAR = 'regular',
//   OPPORTUNITY = 'opportunity',
//   VLBI = 'vlbi',
//   LARGE = 'large'
// }

export interface ProposalInterface {
  title: string,
  cycle: string,
  abs: string,
  proposalType: string,
  scientificCategory: string,
  keywords: [string],
  studentProject: boolean,
  relatedProposals: string,
  previousProposals: string,
  investigators: [AlmaInvestigatorInterface],
  scienceCase: any,
  duplicateObservations: string
}
