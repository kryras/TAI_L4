import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms'
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {QuizComponent} from './components/quiz/quiz.component';
import {ContactComponent} from './components/contact/contact.component';
import {BlogComponent} from './components/blog/blog.component';
import {RouterModule, Routes} from "@angular/router";
import {NavbarComponent} from './components/navbar/navbar.component';
import {BlogItemComponent} from './components/blog/blog-item/blog-item.component';
import {SummaryPipe} from './pipes/summary.pipe';
import {BlogItemTextComponent} from './components/blog/blog-item-text/blog-item-text.component';
import {BlogItemImageComponent} from './components/blog/blog-item-image/blog-item-image.component';
import {BlogItemDetailComponent} from './components/blog/blog-item-detail/blog-item-detail.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {DataService} from "./services/data.service";
import {FilterPipe} from './pipes/filter.pipe';
import {ReactiveFormsModule} from '@angular/forms';
import {BlogHomeComponent} from './components/blog/blog-home/blog-home.component';
import {SearchBarComponent} from './components/search-bar/search-bar.component';
import {TextFormatDirective} from './directives/text-format.directive';
import {BlogCreateComponent} from './components/blog/blog-create/blog-create.component';
import {AuthServiceService} from "./services/auth-service.service";
import {AdminGuard} from "./services/admin-guard.guard";
import {AuthInterceptor} from "./services/auth/auth.interceptor";
import {LoginComponent} from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';


// import {AuthServiceService} from "./services/auth-service.service";

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'quiz',
    component: QuizComponent,
    canActivate: [AdminGuard],
    data: {state: 'admin'}
  },
  {
    path: 'blog',
    component: BlogHomeComponent
  },
  {
    path: 'blog/detail/:id',
    component: BlogItemDetailComponent
  },
  {
    path: 'blog/createPost',
    component: BlogCreateComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  }
]


@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    ContactComponent,
    BlogComponent,
    HomeComponent,
    NavbarComponent,
    BlogItemComponent,
    SummaryPipe,
    BlogItemTextComponent,
    BlogItemImageComponent,
    BlogItemDetailComponent,
    FilterPipe,
    BlogHomeComponent,
    SearchBarComponent,
    TextFormatDirective,
    BlogCreateComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },
    DataService, AuthServiceService,],
  bootstrap: [AppComponent]
})


export class AppModule {
}
