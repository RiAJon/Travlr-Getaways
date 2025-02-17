import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripListingComponent } from './trip-listing/trip-listing.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TripListingComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Travlr Getaways Admin!';
}
