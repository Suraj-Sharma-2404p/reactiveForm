import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TemplateformComponent } from './templateform/templateform.component';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from './components/child/child.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildViewChildComponent } from './components/child-view-child/child-view-child.component';
import { ParentViewChildComponent } from './components/parent-view-child/parent-view-child.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveformComponent,
    TemplateformComponent,
    ChildComponent,
    ParentComponent,
    ChildViewChildComponent,
    ParentViewChildComponent,
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
