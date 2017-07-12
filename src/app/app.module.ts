import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MyRouteModule } from './routes/my-route.module';
import { AppComponent } from './app.component';
import { layoutModule } from './layout/layout.module';
import { GalleryGuard } from './routes/resolver/gallery-guard';
import { WebServiceApi } from './services/api/WebServiceApi';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MyRouteModule,
    layoutModule,
    HttpModule
  ],
  providers: [GalleryGuard,WebServiceApi],
  bootstrap: [AppComponent]
})
export class AppModule { }
