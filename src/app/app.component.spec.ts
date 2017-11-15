import {async, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {NgbDropdownConfig, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import 'jasmine';
import {ContextMenuModule} from 'ngx-contextmenu';

import {AppComponent} from './app.component';
import {NavbarComponent} from './observation-tool/navbar/navbar.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        // TreeModule,
        ContextMenuModule,
        NgbModule
      ],
      declarations: [
        AppComponent,
        NavbarComponent,
        // SidenavComponent
      ],
      providers: [NgbDropdownConfig]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app     = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app     = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
});
