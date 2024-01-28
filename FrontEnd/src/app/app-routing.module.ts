import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './component/sign-in/sign-in.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { HomeComponent } from './component/home/home.component';
import { InputVitalsComponent } from './component/input-vitals/input-vitals.component';
import { MakingAppointmentComponent } from './component/making-appointment/making-appointment.component';
import { ReceivePaymentComponent } from './component/receive-payment/receive-payment.component';
import { ProfileComponent } from './component/profile/profile.component';
import { SettingsComponent } from './component/settings/settings.component';
import { PrescriptionMakerComponent } from './component/prescription-maker/prescription-maker.component';
import { EditProfileComponent } from './component/edit-profile/edit-profile.component';
import { AskQuestionComponent } from './component/ask-question/ask-question.component';
import { QaComponent } from './component/qa/qa.component';
import { CheckHistoryComponent } from './component/check-history/check-history.component';
import { CheckAppointmentComponent } from './component/check-appointment/check-appointment.component';
import { CheckSerialComponent } from './component/check-serial/check-serial.component';
import { WelcomePageComponent } from './component/welcome-page/welcome-page.component';

const routes: Routes = [
  {
    path: '',
    component: WelcomePageComponent
  },
  {
    path: 'signin',
    component: SignInComponent
  },
  {
    path: 'signup',
    component: SignUpComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'settings',
    component: SettingsComponent
  },
  {
    path: 'prescription',
    component: PrescriptionMakerComponent
  },
  {
    path: 'checkAppointment',
    component: CheckAppointmentComponent
  },
  {
    path: 'QA',
    component: QaComponent
  },
  {
    path: 'payment',
    component: ReceivePaymentComponent
  },
  {
    path: 'vitals',
    component: InputVitalsComponent
  },
  {
    path: 'checkHistory',
    component: CheckHistoryComponent
  },
  {
    path: 'makeAppointment',
    component: MakingAppointmentComponent
  },
  {
    path: 'askQuestion',
    component: AskQuestionComponent
  },
  {
    path: 'checkSerial',
    component: CheckSerialComponent
  },
  {
    path: 'editProfile',
    component: EditProfileComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
