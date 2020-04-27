import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentModule} from './crudFeature/parent/parent/parent.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ParentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
