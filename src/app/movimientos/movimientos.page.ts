import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movimientos',
  templateUrl: './movimientos.page.html',
  styleUrls: ['./movimientos.page.scss'],
})
export class MovimientosPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  
  pokedex(){
    this.router.navigateByUrl("home");
  }

  habilidades(){
    this.router.navigateByUrl("habilidades");
  }

  objetos(){
    this.router.navigateByUrl("objetos");
  }

  information = [
    
    {
      img: "https://assets.pokemon.com/assets/cms2-es-xl/img/cards/web/XY7/XY7_ES_87.png",
      movi: "10,000,000 Volt Thunderbolt",
      tipo: "Eléctrico",
      catego: "Especial",
      
    },
    {
      img: "https://assets.pokemon.com/assets/cms2-es-xl/img/cards/web/DET/DET_ES_13.png",
      movi: "A Bocajarro",
      tipo: "Lucha",
      catego: "Físico",
      
    },
  
    {
      img: "https://assets.pokemon.com/assets/cms2-es-xl/img/cards/web/SM1/SM1_ES_2.png",
      movi: "A Defender",
      tipo: "Bicho",
      catego: "Estado",
      
    },
  
    {
      img: "https://assets.pokemon.com/assets/cms2-es-xl/img/cards/web/SM7/SM7_ES_10.png",
      movi: "Absorber",
      tipo: "Planta",
      catego: "Estado",
      
    },
  
    {
      img: "https://assets.pokemon.com/assets/cms2-es-xl/img/cards/web/SM11/SM11_ES_151.png",
      movi: "Acrobata",
      tipo: "Volador",
      catego: "Físico",
      
    },
  
  
    {
      img: "https://assets.pokemon.com/assets/cms2-es-xl/img/cards/web/SM4/SM4_ES_18.png",
      movi: "Acua Cola",
      tipo: "Agua",
      catego: "Físico",
      
    },
  
    
    {
      img: "https://assets.pokemon.com/assets/cms2-es-xl/img/cards/web/SM8/SM8_ES_121.png",
      movi: "Agujero Negro Aniquilador",
      tipo: "Siniestro",
      catego: "Desconocido",
      
    },
  
    {
      img: "https://assets.pokemon.com/assets/cms2-es-xl/img/cards/web/XY8/XY8_ES_155.png",
      movi: "Alud",
      tipo: "Hielo",
      catego: "Físico",
      
    }

  ]

}
