import { Component, inject, Input, OnDestroy, OnInit } from '@angular/core';
import { DetailsService } from '../../services/details.service';
import { Subscription, take } from 'rxjs';
import { Detail } from '../../core/detail';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-details',
  imports: [RouterModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent implements OnInit, OnDestroy {
  private readonly detailService = inject(DetailsService);
  private detailSubscription: Subscription = new Subscription();
  detailsData!: Detail;

  @Input() id: string = '';

  ngOnInit(): void {
    this._fetchDetails();
  }

  private _fetchDetails(): void {
    this.detailSubscription = this.detailService
      .getDetailsById(this.id)
      .pipe(take(1))
      .subscribe({
        next: (response: { state: Detail }) => {
          this.detailsData = response.state;
        },
        error: (error) => {
          console.error('Error al mostrar los detalles', error);
        },
      });
  }

  ngOnDestroy(): void {
    if (this.detailSubscription) {
      this.detailSubscription.unsubscribe();
    }
  }
}
