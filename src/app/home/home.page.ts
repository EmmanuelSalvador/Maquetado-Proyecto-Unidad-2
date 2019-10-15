import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router:Router) {}

  movimientos(){
    this.router.navigateByUrl("movimientos");
  }

  habilidades(){
    this.router.navigateByUrl("habilidades");
  }

  objetos(){
    this.router.navigateByUrl("objetos");
  }

  
information = [
	{
		img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",
		nopoke: "N.° 001",
		nombre: "Bulbasaur",
		tipos: "Planta | Veneno"
  },
  
  {
		img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/002.png",
		nopoke: "N.° 002",
		nombre: "Ivysaur",
		tipos: "Planta | Veneno"
	},

	{
		img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png",
		nopoke: "N.° 003",
		nombre: "Venusaur",
		tipos: "Planta | Veneno"
	},

	{
		img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png",
		nopoke: "N.° 004",
		nombre: "Charmander",
		tipos: "Fuego"
	},


	{
		img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/005.png",
		nopoke: "N.° 005",
		nombre: "Charmeleon",
		tipos: "Fuego"
	},


	{
		img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/006.png",
		nopoke: "N.° 006",
		nombre: "Charizard",
		tipos: "Volador"
  }
]

}
