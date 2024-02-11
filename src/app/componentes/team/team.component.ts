import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/entities/member';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  readonly members:Member[] = [  
    {
      name: "Lola Martín de Saavedra, PhD",
      role: "Group Leader",
      urlImagen: "../../assets/lola-6.jpg",
      urlLinkedin: "https://www.linkedin.com/in/dmsau/",
      urlOrcid: "https://orcid.org/0000-0001-8527-493X",
      urlTwitter: "https://twitter.com/i/flow/login?redirect_after_login=%2FXubaskeroAColor%3Ft%3D7tB_bE1SVn3u91bO1odtjA%26s%3D08",
      galones: ["PhD in Pharmacology and Physiology (Universidad Autónoma de Madrid)",
                "M. Sc. Research, Development and Innovation of  Drugs (Universidad de Navarra)", 
                "B. Sc. Pharmacy (Universidad Complutense de Madrid)",  
              ],
              infoExtraImage: "../../assets/My description.png",
              infoExtraText:
              '<h2>Curriculum Vitae</h2>'+
              '<p>I received my B.Sc. in Pharmacy from Universidad Complutense de Madrid (UCM, 2004), and later pursued a Master’s degree in Research and Development of New Drugs at Universidad de Navarra (2007). For my PhD, I joined the lab of Manuela G. López at Universidad Autónoma de Madrid (UAM), where I studied the role of the master antioxidant regulator NRF2 in major depression. Here, I also contributed to the repurposing of known drugs for neurodegenerative disorders such as Alzheimer’s disease. Additionally, I enjoyed two scientific stays at University College London (UK) and Universidad de Navarra.</p>' +
              '<p>In 2012, I started my post-doctoral research in the lab of Dr. Peter Penzes at Northwestern University (Chicago, USA). My work primarily centered on studying the role of synaptic proteins in neuropsychiatric disorders, with a specific focus on the regulation of CNTNAP2 by ectodomain shedding. I explored how this regulatory mechanism impacts calcium dynamics and neuronal connectivity.</p>' +
              '<p>In September 2020, I secured an Assistant Professor position at UCM and joined the Neurotransmission and Neurorreparation Group. Briefly after, I was awarded with a grant from the Spanish Research Agency to establish my independent research program. This program aims to investigate whether ectodomain shedding regulates neurodevelopmental conditions such as autism, schizophrenia, and epilepsy.</p>' +
              '<p>In addition to my research, I teach Clinical Biochemistry, Biochemistry and Molecular Biology to Pharmacy and Biochemistry undergraduates at UCM. I am involved in teaching activities in the Master’s of Pharmacological Research program at UAM.</p>' +
              '<p>In my free time, I love travelling, running, yoga, and enjoying some quality time with my three kids and my partner.</p>' +
              '<p>Learn more about my research:</p> ' +
              '<ul>' +
                '<li><a href="#">My Google Scholar</a></li>' +
                '<li><a href="#">UCM Scientific Production Portal</a></li>' +
              '</ul>'
    },
    
    {
      name: "Miguel Lobete",
      role: "Graduate student",
      urlImagen: "../../assets/Lobete.jpg",
      urlLinkedin: undefined,
      urlOrcid: "https://orcid.org/0009-0003-5646-1658",
      urlTwitter: undefined,
      galones: ["M. Sc. Biochemistry, Molecular Biology and Biomedicine (Universidad Complutense de Madrid)",
                "B. Sc. Chemistry  (Universidad Autónoma de Madrid)",]
    },
    {
      name: "Silvia Socas",
      role: "Master's student",
      urlImagen: "../../assets/SilviaSocas.png",
      urlLinkedin: undefined,
      urlOrcid: undefined,
      urlTwitter: undefined,
      galones: ["M. Sc. Neurosciences (Universidad Complutense de Madrid)",
                "B. Sc. Biochemistry (Universidad Autónoma de Madrid)",]
    },
    {
      name: "Tamel Salinas",
      role: "Alumnus, ex Master's student",
      urlImagen: "../../assets/Tamel.jpg",
      urlLinkedin: undefined,
      urlOrcid: undefined,
      urlTwitter: undefined,
      galones: ["M. Sc. Neurosciences   (Universidad Complutense de Madrid)",
                "B. Sc. Psychology   (Universidad de Barcelona)",]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
