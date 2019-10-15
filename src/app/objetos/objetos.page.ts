import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-objetos',
  templateUrl: './objetos.page.html',
  styleUrls: ['./objetos.page.scss'],
})
export class ObjetosPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  
  movimientos(){
    this.router.navigateByUrl("movimientos");
  }

  habilidades(){
    this.router.navigateByUrl("habilidades");
  }

  pokedex(){
    this.router.navigateByUrl("home");
  }

  information = [
    
    {
      img: "https://vignette.wikia.nocookie.net/es.pokemon/images/a/a3/Abomasnowita_%28Dream_World%29.png/revision/latest?cb=20140222131231",
      nombre: "Abomasnowita",
      descripcion: "Hace megaevolucionar a su Abomasnow para hacer frente al Greninja de Ash y durante un momento se puede ver la Abomasnowita en el cuello de su Abomasnow."
    },
  
    {
      img: "https://vignette.wikia.nocookie.net/es.pokemon/images/6/67/Abono_brote.png/revision/latest?cb=20090612182855",
      nombre: "Abono",
      descripcion: "Su función consiste en modificar las condiciones en las que se desarrolla una baya."
    },
  
    {
      img: "https://vignette.wikia.nocookie.net/es.pokemon/images/a/ac/Acrom%C3%A1quina.png/revision/latest?cb=20120917160818",
      nombre: "Acromáquina",
      descripcion: "Es un dispositivo que sirve para despertar a la fuerza a los Pokémon dormidos."
    },
  
    {
      img: "https://vignette.wikia.nocookie.net/es.pokemon/images/e/ef/Aerostal_Z_%28Dream_World%29.png/revision/latest?cb=20161129010936",
      nombre: "Aerostal Z",
      descripcion: "Es un cristal Z introducido en la séptima generación."
    },
  
    {
      img: "https://vignette.wikia.nocookie.net/es.pokemon/images/a/a5/Agua_fresca_%28Dream_World%29.png/revision/latest?cb=20110130120412",
      nombre: "Agua fresca",
      descripcion: "Es un objeto curativo introducido en la primera generación. Se trata de una bebida curativa."
    },
  
    {
      img: "https://vignette.wikia.nocookie.net/es.pokemon/images/f/fe/Ala_arco%C3%ADris.png/revision/latest?cb=20100313134952",
      nombre: "Ala Arcoris",
      descripcion: "Se trata de una mística pluma de todos los colores como el arcoíris; sin duda caída de un Pokémon muy especial."
    },
  
    {
      img: "https://vignette.wikia.nocookie.net/es.pokemon/images/3/3e/Arena_fina_%28Dream_World%29.png/revision/latest?cb=20130529170336",
      nombre: "Arena fina",
      descripcion: "Es un objeto potenciador introducido en la segunda generación que, equipado en un Pokémon, multiplica el poder de los ataques de tipo tierra por 1,2 (lo aumenta en un 20%)."
    }

  ]

}
