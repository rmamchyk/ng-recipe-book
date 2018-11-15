import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { CoreModule } from './core/core.module';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [ 
    AppComponent
  ],
  imports: [ 
    BrowserModule, 
    HttpClientModule,
    ShoppingListModule,
    AuthModule,
    SharedModule,
    CoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
