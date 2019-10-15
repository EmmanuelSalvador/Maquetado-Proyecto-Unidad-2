import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.page.html',
  styleUrls: ['./habilidades.page.scss'],
})
export class HabilidadesPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  
  movimientos(){
    this.router.navigateByUrl("movimientos");
  }

  pokedex(){
    this.router.navigateByUrl("home");
  }

  objetos(){
    this.router.navigateByUrl("objetos");
  }

  information = [
    
    {
      img: "https://vignette.wikia.nocookie.net/es.pokemon/images/f/fc/Vaporeon.png/revision/latest?cb=20090601084626",
      nombre: "Absorbe Agua",
      descri: "Absorbs water moves,healing for 1/4 max HP."
    },
    {
      img: "https://vignette.wikia.nocookie.net/es.pokemon/images/1/1e/Jolteon.png/revision/latest?cb=20080714202120",
      nombre: "Absorbe Elec",
      descri: "Absorbs water moves,healing for 1/4 max HP."
    },
    {
      img: "https://vignette.wikia.nocookie.net/es.pokemon/images/9/98/Ninetales.png/revision/latest?cb=20080909113835",
      nombre: "Absorbe Fuego",
      descri: "Protects against fire moves. Once one has been blocked, the Pokémon's own Fire moves inflict 1.5x damage until it leaves battle."
    },
    {
      img: "https://vignette.wikia.nocookie.net/es.pokemon/images/c/cf/Golduck.png/revision/latest?cb=20080909112056",
      nombre: "Aclimatacion",
      descri: "Negates all affects of whater but does not prevent the weather itself."
    },
    {
      img: "https://vignette.wikia.nocookie.net/es.pokemon/images/1/1c/Slaking.png/revision/latest?cb=20080910101934",
      nombre: "Ausente",
      descri: "El pokemon no atacará en turnos consecutivos."
    },
    {
      img: "https://vignette.wikia.nocookie.net/es.pokemon/images/7/71/Swellow.png/revision/latest?cb=20080910102509",
      nombre: "Agallas",
      descri: "Increases Attack to 1.5x with a major status ailment."
    },
    {
      img: "https://vignette.wikia.nocookie.net/es.pokemon/images/6/66/Rayquaza.png/revision/latest?cb=20150729161538",
      nombre: "Bucle aire",
      descri: "Anula los efectos del tiempo atmosferico"
    },
    {
      img: "https://vignette.wikia.nocookie.net/es.pokemon/images/e/e1/Slowbro.png/revision/latest?cb=20080909114928",
      nombre: "Caparazón",
      descri: "Bloquea los golpes criticos."
    },
    {
      img: "https://vignette.wikia.nocookie.net/es.pokemon/images/7/7b/Armaldo.png/revision/latest?cb=20170615172733",
      nombre: "Armadura Batalla",
      descri: "Bloquea los golpes críticos"
    }
    
  ]

}
