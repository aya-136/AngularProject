import { Component } from '@angular/core';
import { VacationRequestComponent } from './vacation-requests/vacation-requests.component';
import { HighlighterPipe } from './highlighter.pipe';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [VacationRequestComponent, HighlighterPipe]
})
export class AppComponent {
  title = 'vacation-request';
}
