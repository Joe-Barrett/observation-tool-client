import {HttpErrorResponse} from '@angular/common/http';
import {Component, ViewContainerRef} from '@angular/core';
import {ComponentModalConfig, ModalSize, SuiModal} from 'ng2-semantic-ui';
import {ToastsManager} from 'ng2-toastr';
import {IAlmaInvestigator} from '../../../shared/interfaces/alma-investigator.interface';
import {AlmaInvestigatorSearchService} from '../../services/alma-investigator-search.service';

interface ModalContext {
  name: string;
  title: string;
}

@Component({
             selector: 'app-modal',
             templateUrl: './modal.component.html',
             styleUrls: ['./modal.component.css'],
             providers: [AlmaInvestigatorSearchService]
           })

export class AlmaInvestigatorSearchModalComponent {

  searchResults: IAlmaInvestigator[];
  isSearching = false;

  constructor(public modal: SuiModal<ModalContext>,
              private almaInvestigatorSearchService: AlmaInvestigatorSearchService) {
    this.search('Name', this.modal.context.name);
  }

  search(searchType, searchString) {
    if (searchType === 'ALMA ID') {
      searchType = 'Uid';
    }
    this.isSearching = true;
    this.almaInvestigatorSearchService.search(searchType, searchString)
        .subscribe(
          results => this.searchResults = results,
          (error: HttpErrorResponse) => {
            this.isSearching = false;
            console.log(error);
            sessionStorage.setItem('modalError', 'unknown error');
            this.modal.deny(undefined);
          },
          () => this.isSearching = false);
  }

}

export class AlmaInvestigatorSearchModal extends ComponentModalConfig<ModalContext, void, void> {

  constructor(name?,
              title = 'Investigator Search',
              size  = ModalSize.Large) {
    super(AlmaInvestigatorSearchModalComponent, {name, title});
    this.isClosable         = false;
    this.transitionDuration = 200;
    this.size               = size;
    this.mustScroll         = true;
    this.isClosable         = true;
  }
}
