import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HighlighterPipe } from './highlighter.pipe';

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    HighlighterPipe,
    BrowserModule,
    FormsModule
  ],
  providers: [],
})
export class AppModule { }
