import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent} from './header/header.component';
import { FooterComponent} from './footer/footer.component';
import { HomeComponent} from './home/home.component';
import { MainComponent} from './main/main.component';
import { BlinkComponent} from './blink/blink.component';
import { SideComponent} from './side/side.component';

import { FresherComponent} from './fresher/fresher.component';
import { CandidateComponent} from './candidate/candidate.component';
import { CanheadComponent} from './canhead/canhead.component';
import { ForgotComponent} from './forgot/forgot.component';
import { ExperienceComponent} from './experience/experience.component';

import { MservicesComponent} from './mservices/mservices.component';
import { TestimonailsComponent} from './testimonails/testimonails.component';
import { ContactComponent} from './contact/contact.component';
import { TrailComponent } from './trail/trail.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { NamescrollComponent } from './namescroll/namescroll.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { ScrollcandidatesComponent } from './scrollcandidates/scrollcandidates.component';
import { PasswordComponent } from './password/password.component';
import { FreshandexpComponent } from './freshandexp/freshandexp.component';

import { LoginComponent } from './login/login.component';

import { JobseekerComponent } from './jobseeker/jobseeker.component';
import { Home1Component } from './home1/home1.component';
import { TestComponent } from './test/test.component';

import { Test1Component } from './test1/test1.component';
import { JobslocationComponent } from './jobslocation/jobslocation.component';
import { SampleComponent } from './sample/sample.component';
import { VideosComponent } from './videos/videos.component';
import { Videos2Component } from './videos2/videos2.component';
import { Sample1Component } from './sample1/sample1.component';
import { Side1Component } from './side1/side1.component';
import { ReferalComponent } from './referal/referal.component';
import { ReferalregComponent } from './referalreg/referalreg.component';
import { TablesComponent } from './tables/tables.component';




const routes: Routes = [
  { path: 'header', component:HeaderComponent},
  { path: 'footer', component:FooterComponent},
  { path: 'home', component:HomeComponent},
  { path: 'main', component:MainComponent},
  { path: 'blink', component:BlinkComponent},
  { path: 'side', component:SideComponent},

  { path: 'fresher', component:FresherComponent},
  { path: 'candidate', component:CandidateComponent},
  { path: 'canhead' , component: CanheadComponent},
  { path: 'forgot' , component: ForgotComponent},
  { path: 'experience' , component: ExperienceComponent},
  
  { path: 'mservices' , component: MservicesComponent},
  { path: 'testimonails' , component: TestimonailsComponent},
  { path: 'contact' , component: ContactComponent},
  { path: 'trail' , component: TrailComponent},
  { path: 'editprofile', component:  EditprofileComponent },
  { path: 'namescroll',  component: NamescrollComponent},
  { path: 'searchbar', component: SearchbarComponent},
  { path: 'scrollcandidates', component: ScrollcandidatesComponent},
  { path: 'password', component: PasswordComponent},
  { path: 'freshandexp', component: FreshandexpComponent},

  { path: 'auth/login',component: LoginComponent},
  { path:'jobseeker',component:JobseekerComponent},
/*
{
  path: 'home1',redirectTo: 'home1',pathMatch: 'full',
 
}
*/
{ path: 'home1', component: Home1Component},
{ path: 'test', component: TestComponent},
{ path: 'test1', component: Test1Component},
{ path: 'jobslocation', component: JobslocationComponent},
{ path: 'sample',component: SampleComponent},
{ path: 'videos',component: VideosComponent},
{ path: 'videos2',component: Videos2Component},
{ path: 'sample1',component: Sample1Component},
{ path: 'side1',component: Side1Component},
{ path: 'referal',component: ReferalComponent},
{ path: 'referalreg',component: ReferalregComponent},
{ path: 'tables',component: TablesComponent}




  
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
