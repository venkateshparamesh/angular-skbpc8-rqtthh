
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NgbdDatepickerPopup } from './datepicker-popup';
import { NgbDateFRParserFormatter } from './ngb-date-fr-parser-formatter';
import {NgbUTCStringAdapter} from './ngb-UTC-string-adapter';
import {
  NgbDropdownModule,
  NgbModule,
  NgbPopover,
  NgbTabsetModule,
  NgbDatepicker,
  NgbDatepickerModule,
  NgbDatepickerConfig,
  NgbDateParserFormatter,
  NgbDateAdapter
} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule, NgbModule.forRoot()],
  declarations: [AppComponent, NgbdDatepickerPopup],
  providers: [
    {
      provide: NgbDateParserFormatter,
      useClass: NgbDateFRParserFormatter
    },
    {
        provide: NgbDateAdapter,
        useClass: NgbUTCStringAdapter
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
