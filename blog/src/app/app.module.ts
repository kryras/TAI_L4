import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { ContactComponent } from './components/contact/contact.component';
import { BlogComponent } from './components/blog/blog.component';
import {RouterModule, Routes} from "@angular/router";
import { NavbarComponent } from './components/navbar/navbar.component';
import { BlogItemComponent } from './components/blog/blog-item/blog-item.component';
import { SummaryPipe } from './summary.pipe';
import { BlogItemTextComponent } from './components/blog/blog-item-text/blog-item-text.component';
import { BlogItemImageComponent } from './components/blog/blog-item-image/blog-item-image.component';
import { BlogItemDetailComponent } from './components/blog/blog-item-detail/blog-item-detail.component';

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
    component: QuizComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'blog/detail/:id',
    component: BlogItemDetailComponent
  }]


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
    BlogItemDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
