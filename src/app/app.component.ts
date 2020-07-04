import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Title } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { State } from './store/reducers';
import { loadCustomers, loadCommissions } from './store/actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private translate: TranslateService,
    private titleService: Title,
    private store: Store<State>
  ) {
    // this language will be used as a fallback when a translation isn't found in the current language
    this.translate.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    this.translate.use('en');

    // Set application title
    this.setTitle('Mobile Money');

    this.store.dispatch(loadCustomers());
    this.store.dispatch(loadCommissions());
  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}
