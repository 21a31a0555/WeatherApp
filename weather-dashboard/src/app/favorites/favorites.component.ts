import { Component, OnInit } from '@angular/core';
import { FavoritesService } from '../services/favorites.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-favorites',
  standalone: true,
  templateUrl: './favorites.component.html',
  imports:[NgFor,NgIf]

})
export class FavoritesComponent implements OnInit {
  favorites: string[] = [];

  constructor(private favoritesService: FavoritesService) {}

  ngOnInit(): void {
    this.loadFavorites();
  }

  loadFavorites(): void {
    this.favorites = this.favoritesService.getFavorites();
  }

  removeFavorite(city: string): void {
    this.favoritesService.removeFavorite(city);
    this.loadFavorites();
  }
}
