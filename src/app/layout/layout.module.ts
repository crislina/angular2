import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { LandingPageComponent } from './main/landing-page/landing-page.component';
import { GalleryComponent } from './main/gallery/gallery.component';
import { AboutUsComponent } from './main/about-us/about-us.component';
import { ContactUsComponent } from './main/contact-us/contact-us.component';
import { TaskComponent } from './main/task/task.component';
@NgModule({
	imports:      [ BrowserModule,RouterModule ],
	declarations: [ FooterComponent,HeaderComponent, LandingPageComponent, GalleryComponent, AboutUsComponent, ContactUsComponent, TaskComponent ],
	exports:      [ FooterComponent,HeaderComponent],
})
export class layoutModule{

}