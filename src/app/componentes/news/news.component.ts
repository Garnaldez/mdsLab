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
    title: "All the lab celebrating Miguel Lobete's amazing Master's Thesis presentation. From left to right: Miguel, Lola Martín-de-Saavedra, Mª Jesus Oset, Beatriz Chamorro and Sara Izquierdo."
  },
  {
    urlImagen: "assets/3.IBRO.jpeg",
    date: "September 2023",
    title: "Lola Martín-de-Saavedra, receives an Early Career Award from the International Brain Research Organization (IBRO)."
  },
  {
    urlImagen: "assets/4. Lola presenting.jpg",
    date: "September 2023",
    title: "Lola presenting data on ectodomain shedding at IBRO 2023 in Granada (Spain)."
  }, {
    urlImagen: "assets/SfN2023.jpg",
    date: "November 2023",
    title: "Attending conferences is fun! This is Lola and her friends from her postdoctoral stage at the conference Society for Neuroscience 2023 celebrated in Washington DC."
  },
  {
    urlImagen: "assets/5.-Miguel-microscope (1).jpg",
    date: "December 2023",
    title: "Miguel Lobete starts his PhD thanks to a FPI fellowship. Well deserved, Miguel!"
  },
  {
    urlImagen: "assets/SilviaSocas.png",
    date: "January 2024",
    title: "Silvia Socas joins the lab to do her Master's research project!"
  },
  {
    urlImagen: "assets/April2024.jpg",
    date: "April 2024",
    title: "As part of our initiatives at the Sheddome and Disease Lab, we participated in the Week of Culture at an elementary school in Madrid by hosting an engaging event titled \"How Does the Brain Work?\" The kids were very excited and asked a lot of questions!"
  },
  {
    urlImagen: "assets/MartaNew.jpg",
    date: "Jun 2024",
    title: "Marta Cámara, a former student of Lola's Clinical Biochemistry classes, will join the lab to do her final degree research project."
  },

  ];

  constructor() { }

  ngOnInit(): void {
  }

  public sortedNewsArray(): LabNew[] {
    return this.labnews.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }

}
