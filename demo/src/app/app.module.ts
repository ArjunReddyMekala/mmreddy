import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { BlinkComponent } from './blink/blink.component';
import { SideComponent } from './side/side.component';

import { FresherComponent } from './fresher/fresher.component';
import { CompareValidatorDirective } from './shared/compare-validator.directive';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { CandidateComponent } from './candidate/candidate.component';
import { CanheadComponent } from './canhead/canhead.component';
import { ForgotComponent } from './forgot/forgot.component';
import { ExperienceComponent } from './experience/experience.component';

import { MservicesComponent } from './mservices/mservices.component';
import { TestimonailsComponent } from './testimonails/testimonails.component';
import { ContactComponent } from './contact/contact.component';

import {HttpClientModule } from '@angular/common/http';

import { TrailComponent } from './trail/trail.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { NamescrollComponent } from './namescroll/namescroll.component';
import { SubfooterComponent } from './subfooter/subfooter.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { ScrollcandidatesComponent } from './scrollcandidates/scrollcandidates.component';
import { PasswordComponent } from './password/password.component';
import { FreshandexpComponent } from './freshandexp/freshandexp.component';


import { httpInterceptorProviders } from './auth/auth-interceptor';
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



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MainComponent,
    BlinkComponent,
    SideComponent,
  
    FresherComponent,
    CompareValidatorDirective,
    CandidateComponent,
    CanheadComponent,
    ForgotComponent,
    ExperienceComponent,
  
    MservicesComponent,
    TestimonailsComponent,
    ContactComponent,
    TrailComponent,
    EditprofileComponent,
    NamescrollComponent,
    SubfooterComponent,
    SearchbarComponent,
    ScrollcandidatesComponent,
    PasswordComponent,
    FreshandexpComponent,

    LoginComponent,
    JobseekerComponent,
    Home1Component,
    TestComponent,
    Test1Component,
    JobslocationComponent,
    SampleComponent,
    VideosComponent,
    Videos2Component,
    Sample1Component,
    Side1Component,
    ReferalComponent,
    ReferalregComponent,
    TablesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgbPaginationModule, NgbAlertModule  ,
    HttpClientModule 
  ],
  providers:[httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
