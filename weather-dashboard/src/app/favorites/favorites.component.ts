import { Component, OnInit, OnDestroy } from '@angular/core';
import { FavoritesService } from '../services/favorites.service';
import { NgFor, NgIf } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-favorites',
  standalone: true,
  templateUrl: './favorites.component.html',
  imports: [NgFor, NgIf]
})
export class FavoritesComponent implements OnInit, OnDestroy {
  favorites: string[] = [];
  private subscription: Subscription;

  constructor(private favoritesService: FavoritesService) {
    this.subscription = this.favoritesService.favorites$.subscribe(
      favorites => this.favorites = favorites
    );
  }

  ngOnInit(): void {
    this.favorites = this.favoritesService.getFavorites();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  removeFavorite(city: string): void {
    this.favoritesService.removeFavorite(city);
  }
}
