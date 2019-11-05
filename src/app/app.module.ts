import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { navComponent } from './nav/nav.component';
import { footerComponent } from './footer/footer.component';
import { contentAreaComponent } from './home/home.component';
import { projectsComponent } from './projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    navComponent,
    footerComponent,
    contentAreaComponent,
    projectsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'projects', component: projectsComponent},
      { path: '', component: contentAreaComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
