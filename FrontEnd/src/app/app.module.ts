import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputVitalsComponent } from './component/input-vitals/input-vitals.component';
import { MakingAppointmentComponent } from './component/making-appointment/making-appointment.component';
import { ReceivePaymentComponent } from './component/receive-payment/receive-payment.component';
import { SignInComponent } from './component/sign-in/sign-in.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { HomeComponent } from './component/home/home.component';
import { PrescriptionMakerComponent } from './component/prescription-maker/prescription-maker.component';
import { ProfileComponent } from './component/profile/profile.component';
import { EditProfileComponent } from './component/edit-profile/edit-profile.component';
import { SettingsComponent } from './component/settings/settings.component';
import { AskQuestionComponent } from './component/ask-question/ask-question.component';
import { QaComponent } from './component/qa/qa.component';
import { CheckHistoryComponent } from './component/check-history/check-history.component';
import { CheckAppointmentComponent } from './component/check-appointment/check-appointment.component';
import { CheckSerialComponent } from './component/check-serial/check-serial.component';
import { WelcomePageComponent } from './component/welcome-page/welcome-page.component';

@NgModule({
  declarations: [
    AppComponent,
    InputVitalsComponent,
    MakingAppointmentComponent,
    ReceivePaymentComponent,
    SignInComponent,
    SignUpComponent,
    HomeComponent,
    PrescriptionMakerComponent,
    ProfileComponent,
    EditProfileComponent,
    SettingsComponent,
    AskQuestionComponent,
    QaComponent,
    CheckHistoryComponent,
    CheckAppointmentComponent,
    CheckSerialComponent,
    WelcomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
