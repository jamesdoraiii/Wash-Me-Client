import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetailerSearchBaseComponent } from './screens/detailer-search/detailer-search-base/detailer-search-base.component';
import { HomeScreenBaseComponent } from './screens/home/home-screen-base/home-screen-base.component';
import { YourDetailerProfileBaseComponent } from './screens/your-detailer-profile/your-detailer-profile-base/your-detailer-profile-base.component';
import { YourUserProfileBaseComponent } from './screens/your-user-profile/your-user-profile-base/your-user-profile-base.component'

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'search', component: DetailerSearchBaseComponent },
  { path: 'home', component: HomeScreenBaseComponent },
  { path: 'yourdetailerprofile', component: YourDetailerProfileBaseComponent},
  { path: 'youruserprofile', component: YourUserProfileBaseComponent }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}