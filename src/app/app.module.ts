import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { DetailerSearchBaseComponent } from './screens/detailer-search/detailer-search-base/detailer-search-base.component';
import { DetailerSearchFormComponent } from './screens/detailer-search/detailer-search-form/detailer-search-form.component';
import { DetailerSearchResultsComponent } from './screens/detailer-search/detailer-search-results/detailer-search-results.component';
import { HomeScreenBaseComponent } from './screens/home/home-screen-base/home-screen-base.component';
import { SplashScreenBaseComponent } from './screens/splash/splash-screen-base/splash-screen-base.component';
import { AuthComponent } from './screens/splash/auth/auth.component';
import { ViewADetailerProfileBaseComponent } from './screens/view-a-detailer-profile/view-a-detailer-profile-base/view-a-detailer-profile-base.component';
import { YourDetailerProfileBaseComponent } from './screens/your-detailer-profile/your-detailer-profile-base/your-detailer-profile-base.component';
import { YourDetailerProfileSetupComponent } from './screens/your-detailer-profile/your-detailer-profile-setup/your-detailer-profile-setup.component';
import { YourDetailerProfileViewComponent } from './screens/your-detailer-profile/your-detailer-profile-view/your-detailer-profile-view.component';
import { DisplayContactsMadeComponent } from './screens/your-user-profile/display-contacts-made/display-contacts-made.component';
import { YourUserProfileBaseComponent } from './screens/your-user-profile/your-user-profile-base/your-user-profile-base.component';
import { DetailerProfileSetupFormComponent } from './shared-components/detailer-profile-setup-form/detailer-profile-setup-form.component';
import { DisplayDetailerProfileComponent } from './shared-components/display-detailer-profile/display-detailer-profile.component';
import { DisplayReviewsComponent } from './shared-components/display-reviews/display-reviews.component';

import {MatCheckboxModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import { AppRoutingModule } from './app-routing.module';

//servuces and database stuff
import { UserService } from './services/user.service';
import { DetailerService } from './services/detailer.service'
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UpdateProfileComponent } from './screens/your-detailer-profile/update-profile/update-profile.component';
import { ContactService } from './services/contact.service';
import { ViewDetailerProfileOnUserPageComponent } from './screens/your-user-profile/view-detailer-profile-on-user-page/view-detailer-profile-on-user-page.component';


@NgModule({
  declarations: [
    AppComponent,
    DetailerSearchBaseComponent,
    DetailerSearchFormComponent,
    DetailerSearchResultsComponent,
    HomeScreenBaseComponent,
    SplashScreenBaseComponent,
    AuthComponent,
    ViewADetailerProfileBaseComponent,
    YourDetailerProfileBaseComponent,
    YourDetailerProfileSetupComponent,
    YourDetailerProfileViewComponent,
    DisplayContactsMadeComponent,
    YourUserProfileBaseComponent,
    DetailerProfileSetupFormComponent,
    DisplayDetailerProfileComponent,
    DisplayReviewsComponent,
    UpdateProfileComponent,
    ViewDetailerProfileOnUserPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatStepperModule,
    MatTabsModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    AppRoutingModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
    

  ],
  providers: [ UserService, DetailerService, ContactService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
