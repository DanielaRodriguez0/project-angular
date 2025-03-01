import { Component, inject, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DetailService } from '../../../services/detail.service';
import { Subscription, take } from 'rxjs';
import { Detail } from '../../../core/detail.interface';

@Component({
  selector: 'app-detail',
  imports: [RouterModule],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {
  private readonly detailService: DetailService = inject(DetailService);
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
