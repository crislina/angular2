import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './../layout/main/landing-page/landing-page.component';
import { GalleryComponent } from './../layout/main/gallery/gallery.component';
import { AboutUsComponent } from './../layout/main/about-us/about-us.component';
import { ContactUsComponent } from './../layout/main/contact-us/contact-us.component';
import { TaskComponent } from './../layout/main/task/task.component';
const appRoutes: Routes = [
	{ path: 'home', component: LandingPageComponent},
	{ path: 'aboutus', component: AboutUsComponent},
	{ path: 'contactus', component: ContactUsComponent},
	{ path: 'gallery', component: GalleryComponent},
	{ path: 'task', component: TaskComponent},
	{ path: '', redirectTo: '/home', pathMatch: 'full'}
]

@NgModule({
  imports: [
  	RouterModule.forRoot(appRoutes)
  ],
  exports: [
  	RouterModule 
  ],
  declarations: []
})
export class MyRouteModule { }
