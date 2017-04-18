import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { SignInContainerComponent } from './sign-in/signin.page';
import { SignInViewComponent } from './sign-in/signin-view.component';
import { AuthWidgetComponent } from './auth-widget/auth-widget.component';
import { VerifyModalComponent } from './verify-modal/verify-modal.component';
import { AuthModalComponent } from './auth-modal/auth-modal.component';

@NgModule({
    imports: [
        SharedModule
    ],
    providers: [],
    declarations: [
        SignInContainerComponent, SignInViewComponent, AuthWidgetComponent, VerifyModalComponent, AuthModalComponent
    ],
    exports: [
        AuthWidgetComponent, VerifyModalComponent
    ],
    entryComponents: [ AuthModalComponent, VerifyModalComponent ]
})
export class UserComponentsModule {

}