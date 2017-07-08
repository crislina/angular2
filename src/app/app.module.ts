import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MyRouteModule } from './routes/my-route.module';
import { AppComponent } from './app.component';
import { layoutModule } from './layout/layout.module';


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    MyRouteModule,
    layoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
