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
      role: "Assistant Professor",
      urlImagen: "../../assets/lola-6.jpg",
      urlLinkedin: "https://www.linkedin.com/in/dmsau/",
      urlOrcid: "https://orcid.org/0000-0001-8527-493X",
      urlTwitter: "https://twitter.com/i/flow/login?redirect_after_login=%2FXubaskeroAColor%3Ft%3D7tB_bE1SVn3u91bO1odtjA%26s%3D08",
      galones: ["PhD in Pharmacology and Physiology (Universidad Autónoma de Madrid)",
                "M. Sc. Research, Development and Innovation of  Drugs (Universidad de Navarra)", 
                "B. Sc. Pharmacy (Universidad Complutense de Madrid)",  
              ]
    },
    {
      name: "Miguel Lobete",
      role: "Graduate Student",
      urlImagen: "../../assets/Lobete.jpg",
      urlLinkedin: "https://www.linkedin.com/in/juancarloscorrales/",
      urlOrcid: "https://orcid.org/0009-0003-5646-1658",
      urlTwitter: "https://twitter.com/juancarloscorra",
      galones: ["M. Sc. Biochemistry, Molecular Biology and Biomedicine (Universidad Complutense de Madrid)",
                "B. Sc. Chemistry  (Universidad Autónoma de Madrid)",]
    },
    {
      name: "Silvia Socas",
      role: "Master's student",
      urlImagen: "../../assets/SilviaSocas.jpg",
      urlLinkedin: undefined,
      urlOrcid: undefined,
      urlTwitter: undefined,
      galones: ["M.M. Sc. Neuroscience (Universidad Complutense)",
                "B. Sc. Biochemistry (Universidad Autónoma de Madrid)",]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
