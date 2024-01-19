import { Component, OnInit } from '@angular/core';
import { LabNew } from 'src/app/entities/labNew';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  public labnews: LabNew[] = [{
    urlImagen: "assets/1.AEI.jpg",
    date: "September 2022",
    title: "Lola Martín-de-Saavedra is awarded with a grant from the Spanish Research Agency to study the role of ectodomain shedding in neurodevelopmental disorders. The fun starts!!"
  },
  {
    urlImagen: "assets/2. Cafeteria.jpg",
    date: "June 2023",
    title: "All the lab celebrating Miguel Lobete's amazing Master's Thesis presentation. From left to right: Miguel, Lola, Mª Jesus Oset, Beatriz Chamorro and Sara Izquierdo."
  },
  {
    urlImagen: "assets/3.IBRO.jpeg",
    date: "September 2023",
    title: "Lola Martín-de-Saavedra, our Group Leader, receives an Early Career Award from the International Brain Research Organization (IBRO)."
  },
  {
    urlImagen: "assets/4. Lola presenting.jpg",
    date: "September 2023",
    title: "Lola presenting data on ectodomain shedding at IBRO 2023 in Granada (Spain)."
  }, {
    urlImagen: "assets/SfN2023.jpg",
    date: "November 2023.",
    title: "Attending conferences is fun! This is Lola and her friends from her postdoctoral stage at the conference Society for Neuroscience 2023 celebrated in Washington DC."
  },
  {
    urlImagen: "assets/5.-Miguel-microscope (1).jpg",
    date: "December 2023",
    title: "Miguel Lobete starts his PhD thanks to a FPI fellowship. Well deserved, Miguel!"
  },
  {
    urlImagen: "assets/SilviaSocas.jpg",
    date: "January 2024",
    title: "Silvia Socas joins the lab!"
  },


  ];

  constructor() { }

  ngOnInit(): void {
  }

  public sortedNewsArray(): LabNew[] {
    return this.labnews.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }

}
