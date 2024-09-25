import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HighlighterPipe } from '../highlighter.pipe';
@Component({
  selector: 'vacation-request',
  templateUrl: './vacation-requests.component.html',
  styleUrls: ['./vacation-requests.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, HighlighterPipe, HttpClientModule]
})

export class VacationRequestComponent implements OnInit {
  searchTerm: string = '';
  selectAll: boolean = false;

  vacationRequests: any[] = [];  // Initialize as an empty array

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchVacationRequests();
  }


  fetchVacationRequests() {
    this.http.get<any[]>('assets/vacation-requests.json').subscribe({
      next: (data) => {
        this.vacationRequests = data;
        console.log('Fetched vacation requests:', this.vacationRequests);
      },
      error: (error) => {
        console.error('Error fetching vacation requests:', error);
      },
      complete: () => {
        console.log('Request completed');
      }
    });
  }

  filterRequests() {
    return this.vacationRequests.filter(request =>
      request.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  toggleSelectAll() {
    this.selectAll = !this.selectAll;
  }
}



