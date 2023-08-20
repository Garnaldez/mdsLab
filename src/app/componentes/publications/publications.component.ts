import { Component, OnInit } from '@angular/core';
import { Publication } from 'src/app/entities/publication';
import { PublicationYear } from 'src/app/entities/publicationYear';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss']
})


export class PublicationsComponent implements OnInit {

  step:number = 0;

  readonly publications:Publication[] = [
    {
      title: "Neuroprotective and Antioxidant Properties of CholesteroNitrone ChN2 and QuinolylNitrone QN23 in an Experimental Model of Cerebral Ischemia: Involvement of Necrotic and Apoptotic Cell Death",
      journal: "Antioxidants. 2023;12(7):1364.",
      authors: "Chamorro B, Izquierdo-Bermejo S, Martín-de-Saavedra MD, López-Muñoz F, Chioua M, Marco-Contelles J, Oset-Gasque MJ",
      year: 2023
    },
    {
      title: "Palmitoylation controls the stability of 190 kDa ankyrin-G in dendritic spines and is regulated by ZDHHC8 and lithium",
      journal: "Front Mol Neurosci. 2023;16:1144066.",
      authors: "Piguel NH, Sanders SS, De Simone FI, Martín-de-Saavedra MD, McCoig E, Dionisio LE, Smith KR, Thomas GM, Penzes P",
      year: 2023
    },
    {
      title: "Rescue of neuropsychiatric phenotypes in a mouse model of 16p11.2 duplication syndrome by genetic correction of an epilepsy network hub",
      journal: "Nat Commun. 2023;14(1):825.",
      authors: "Forrest MP, Dos Santos M, Piguel NH, Wang YZ, Hawkins NA, Bagchi VA, Dionisio LE, Yoon S, Simkin D, Martín-de-Saavedra MD, Gao R, Horan KE, George AL Jr., LeDoux MS, Kearney JA, Savas JN, Penzes P",
      year: 2023
    },
    {
      title: "A developmental delay linked missense mutation in Kalirin-7 disrupts protein function and neuronal morphology",
      journal: "Front Mol Neurosci. 2022;15:994513.",
      authors: "Parnell E, Voorn RA, Martín-de-Saavedra MD, Loizzo DD, Dos Santos M, Penzes P",
      year: 2022
    },
    {
      title: "Intercellular signaling by ectodomain shedding at the synapse",
      journal: "Trends Neurosci. 2022;45(6):483-98.",
      authors: "Martín-de-Saavedra MD, Santos MD, Penzes P",
      year: 2022
    },
    {
      title: "Shed CNTNAP2 ectodomain is detectable in CSF and regulates Ca(2+) homeostasis and network synchrony via PMCA2/ATP2B2",
      journal: "Neuron. 2022;110(4):627-43 e9.",
      authors: "Martín-de-Saavedra MD, Dos Santos M, Culotta L, Varea O, Spielman BP, Parnell E, Forrest MP, Gao R, Yoon S, McCoig E, Jalloul HA, Myczek K, Khalatyan N, Hall EA, Turk LS, Sanz-Clemente A, Comoletti D, Lichtenthaler SF, Burgdorf JS, Barbolina MV, Savas JN, Penzes P",
      year: 2022
    },
    {
      title: "Rapid 3D Enhanced Resolution Microscopy Reveals Diversity in Dendritic Spinule Dynamics, Regulation, and Function",
      journal: "Neuron. 2020;107(3):522-37 e6.",
      authors: "Zaccard CR, Shapiro L, Martín-de-Saavedra MD, Pratt C, Myczek K, Song A, Forrest MP, Penzes P",
      year: 2020
    },
    {
      title: "A novel role for the late-onset Alzheimer's disease (LOAD)-associated protein Bin1 in regulating postsynaptic trafficking and glutamatergic signaling",
      journal: "Mol Psychiatry. 2020;25(9):2000-16.",
      authors: "Schurmann B, Bermingham DP, Kopeikina KJ, Myczek K, Yoon S, Horan KE, Kelly CJ, Martín-de-Saavedra MD, Forrest MP, Fawcett-Patel JM, Smith KR, Gao R, Bach A, Burette AC, Rappoport JZ, Weinberg RJ, Martína M, Penzes P",
      year: 2020
    },
    {
      title: "CNTNAP2 is targeted to endosomes by the polarity protein PAR3",
      journal: "Eur J Neurosci. 2020;51(4):1074-86.",
      authors: "Gao R, Pratt CP, Yoon S, Martín-de-Saavedra MD, Forrest MP, Penzes P",
      year: 2020
    },
    {
      title: "The CNTNAP2-CASK complex modulates GluA1 subcellular distribution in interneurons",
      journal: "Neurosci Lett. 2019;701:92-9.",
      authors: "Gao R, Zaccard CR, Shapiro LP, Dionisio LE, Martín-de-Saavedra MD, Piguel NH, Pratt CP, Horan KE, Penzes P",
      year: 2019
    },
    {
      title: "The APPswe/PS1A246E mutations in an astrocytic cell line leads to increased vulnerability to oxygen and glucose deprivation, Ca(2+) dysregulation, and mitochondrial abnormalities",
      journal: "J Neurochem. 2018;145(2):170-82.",
      authors: "Martín-de-Saavedra MD, Navarro E, Moreno-Ortega AJ, Cunha MP, Buendia I, Hernansanz-Agustin P, Leon R, Cano-Abad MF, Martínez-Ruiz A, Martínez-Murillo R, Duchen MR, Lopez MG",
      year: 2018
    },
    {
      title: "CNTNAP2 stabilizes interneuron dendritic arbors through CASK",
      journal: "Mol Psychiatry. 2018;23(9):1832-50.",
      authors: "Gao R, Piguel NH, Melendez-Zaidi AE, Martín-de-Saavedra MD, Yoon S, Forrest MP, Myczek K, Zhang G, Russell TA, Csernansky JG, Surmeier DJ, Penzes P",
      year: 2018
    },
    {
      title: "Folic Acid Protects Against Glutamate-Induced Excitotoxicity in Hippocampal Slices Through a Mechanism that Implicates Inhibition of GSK-3beta and iNOS",
      journal: "Mol Neurobiol. 2018;55(2):1580-9.",
      authors: "Budni J, Molz S, Dal-Cim T, Martín-de-Saavedra MD, Egea J, Lopez MG, Tasca CI, Rodrigues ALS",
      year: 2018
    },
    {
      title: "Reversal of dendritic phenotypes in 16p11.2 microduplication mouse model neurons by pharmacological targeting of a network hub",
      journal: "Proc Natl Acad Sci U S A. 2016;113(30):8520-5.",
      authors: "Blizinsky KD, Diaz-Castro B, Forrest MP, Schurmann B, Bach AP, Martín-de-Saavedra MD, Wang L, Csernansky JG, Duan J, Penzes P",
      year: 2016
    },
    {
      title: "Synaptic abnormalities and cytoplasmic glutamate receptor aggregates in contactin associated protein-like 2/Caspr2 knockout neurons",
      journal: "Proc Natl Acad Sci U S A. 2015;112(19):6176-81.",
      authors: "Varea O, Martín-de-Saavedra MD, Kopeikina KJ, Schurmann B, Fleming HJ, Fawcett-Patel JM, Bach A, Jang S, Peles E, Kim E, Penzes P",
      year: 2015
    },
    {
      title: "The modulation of NMDA receptors and L-arginine/nitric oxide pathway is implicated in the anti-immobility effect of creatine in the tail suspension test",
      journal: "Amino Acids. 2015;47(4):795-811.",
      authors: "Cunha MP, Pazini FL, Ludka FK, Rosa JM, Oliveira A, Budni J, Ramos-Hryb AB, Lieberknecht V, Bettio LE, Martín-de-Saavedra MD, Lopez MG, Tasca CI, Rodrigues AL",
      year: 2015
    },
    {
      title: "ITH12410/SC058: a new neuroprotective compound with potential in the treatment of Alzheimer's disease",
      journal: "ACS Chem Neurosci. 2014;5(9):770-5.",
      authors: "Romero A, Egea J, Gonzalez-Munoz GC, Martín de Saavedra MD, del Barrio L, Rodriguez-Franco MI, Conde S, Lopez MG, Villarroya M, de los Rios C",
      year: 2014
    },
    {
      title: "Both creatine and its product phosphocreatine reduce oxidative stress and afford neuroprotection in an in vitro Parkinson's model",
      journal: "ASN Neuro. 2014;6(6).",
      authors: "Cunha MP, Martín-de-Saavedra MD, Romero A, Parada E, Egea J, Del Barrio L, Rodrigues AL, Lopez MG",
      year: 2014
    },
    {
      title: "Nrf2 participates in depressive disorders through an anti-inflammatory mechanism",
      journal: "Psychoneuroendocrinology. 2013;38(10):2010-22.",
      authors: "Martín-de-Saavedra MD, Budni J, Cunha MP, Gomez-Rangel V, Lorrio S, Del Barrio L, Lastres-Becker I, Parada E, Tordera RM, Rodrigues AL, Cuadrado A, Lopez MG",
      year: 2013
    },
    {
      title: "Protective effect of creatine against 6-hydroxydopamine-induced cell death in human neuroblastoma SH-SY5Y cells: Involvement of intracellular signaling pathways",
      journal: "Neuroscience. 2013;238:185-94.",
      authors: "Cunha MP, Martín-de-Saavedra MD, Romero A, Parada E, Egea J, Del Barrio L, Tasca CI, Farina M, Rodrigues AL, Lopez MG",
      year: 2013
    },
    {
      title: "Galantamine elicits neuroprotection by inhibiting iNOS, NADPH oxidase and ROS in hippocampal slices stressed with anoxia/reoxygenation",
      journal: "Neuropharmacology. 2012;62(2):1082-90.",
      authors: "Egea J, Martín-de-Saavedra MD, Parada E, Romero A, Del Barrio L, Rosa AO, Garcia AG, Lopez MG",
      year: 2012
    },
    {
      title: "Guanosine protects human neuroblastoma SH-SY5Y cells against mitochondrial oxidative stress by inducing heme oxigenase-1 via PI3K/Akt/GSK-3beta pathway",
      journal: "Neurochem Int. 2012;61(3):397-404.",
      authors: "Dal-Cim T, Molz S, Egea J, Parada E, Romero A, Budni J, Martín de Saavedra MD, del Barrio L, Tasca CI, Lopez MG",
      year: 2012
    },
    {
      title: "Involvement of PI3K, GSK-3beta and PPARgamma in the antidepressant-like effect of folic acid in the forced swimming test in mice",
      journal: "J Psychopharmacol. 2012;26(5):714-23.",
      authors: "Budni J, Lobato KR, Binfare RW, Freitas AE, Costa AP, Martín-de-Saavedra MD, Leal RB, Lopez MG, Rodrigues AL",
      year: 2012
    },
    {
      title: "Delayed pre-conditioning by 3-nitropropionic acid prevents 3,4-methylenedioxymetamphetamine-induced 5-HT deficits",
      journal: "J Neurochem. 2010;114(3):843-52.",
      authors: "Puerta E, Pastor F, Dvoracek J, de Saavedra MD, Goñi-Allo B, Jordán J, Hervias I, Aguirre N",
      year: 2010
    },
    {
      title: "The APPswe/PS1A246E mutations in an astrocytic cell line leads to increased vulnerability to oxygen and glucose deprivation, Ca(2+) dysregulation, and mitochondrial abnormalities",
      journal: "J Neurochem. 2018;145(2):170-82.",
      authors: "Martín-de-Saavedra MD, Navarro E, Moreno-Ortega AJ, Cunha MP, Buendia I, Hernansanz-Agustin P, Leon R, Cano-Abad MF, Martínez-Ruiz A, Martínez-Murillo R, Duchen MR, Lopez MG",
      year: 2018
    },
    {
      title: "CNTNAP2 stabilizes interneuron dendritic arbors through CASK",
      journal: "Mol Psychiatry. 2018;23(9):1832-50.",
      authors: "Gao R, Piguel NH, Melendez-Zaidi AE, Martín-de-Saavedra MD, Yoon S, Forrest MP, Myczek K, Zhang G, Russell TA, Csernansky JG, Surmeier DJ, Penzes P",
      year: 2018
    },
    {
      title: "Folic Acid Protects Against Glutamate-Induced Excitotoxicity in Hippocampal Slices Through a Mechanism that Implicates Inhibition of GSK-3beta and iNOS",
      journal: "Mol Neurobiol. 2018;55(2):1580-9.",
      authors: "Budni J, Molz S, Dal-Cim T, Martín-de-Saavedra MD, Egea J, Lopez MG, Tasca CI, Rodrigues ALS",
      year: 2018
    },
    {
      title: "Reversal of dendritic phenotypes in 16p11.2 microduplication mouse model neurons by pharmacological targeting of a network hub",
      journal: "Proc Natl Acad Sci U S A. 2016;113(30):8520-5.",
      authors: "Blizinsky KD, Diaz-Castro B, Forrest MP, Schurmann B, Bach AP, Martín-de-Saavedra MD, Wang L, Csernansky JG, Duan J, Penzes P",
      year: 2016
    },
    {
      title: "Synaptic abnormalities and cytoplasmic glutamate receptor aggregates in contactin associated protein-like 2/Caspr2 knockout neurons",
      journal: "Proc Natl Acad Sci U S A. 2015;112(19):6176-81.",
      authors: "Varea O, Martín-de-Saavedra MD, Kopeikina KJ, Schurmann B, Fleming HJ, Fawcett-Patel JM, Bach A, Jang S, Peles E, Kim E, Penzes P",
      year: 2015
    },
    {
      title: "The modulation of NMDA receptors and L-arginine/nitric oxide pathway is implicated in the anti-immobility effect of creatine in the tail suspension test",
      journal: "Amino Acids. 2015;47(4):795-811.",
      authors: "Cunha MP, Pazini FL, Ludka FK, Rosa JM, Oliveira A, Budni J, Ramos-Hryb AB, Lieberknecht V, Bettio LE, Martín-de-Saavedra MD, Lopez MG, Tasca CI, Rodrigues AL",
      year: 2015
    },
    {
      title: "ITH12410/SC058: a new neuroprotective compound with potential in the treatment of Alzheimer's disease",
      journal: "ACS Chem Neurosci. 2014;5(9):770-5.",
      authors: "Romero A, Egea J, Gonzalez-Munoz GC, Martín de Saavedra MD, del Barrio L, Rodriguez-Franco MI, Conde S, Lopez MG, Villarroya M, de los Rios C",
      year: 2014
    },
    {
      title: "Both creatine and its product phosphocreatine reduce oxidative stress and afford neuroprotection in an in vitro Parkinson's model",
      journal: "ASN Neuro. 2014;6(6).",
      authors: "Cunha MP, Martín-de-Saavedra MD, Romero A, Parada E, Egea J, Del Barrio L, Rodrigues AL, Lopez MG",
      year: 2014
    },
    {
      title: "Nrf2 participates in depressive disorders through an anti-inflammatory mechanism",
      journal: "Psychoneuroendocrinology. 2013;38(10):2010-22.",
      authors: "Martín-de-Saavedra MD, Budni J, Cunha MP, Gomez-Rangel V, Lorrio S, Del Barrio L, Lastres-Becker I, Parada E, Tordera RM, Rodrigues AL, Cuadrado A, Lopez MG",
      year: 2013
    },
    {
      title: "Protective effect of creatine against 6-hydroxydopamine-induced cell death in human neuroblastoma SH-SY5Y cells: Involvement of intracellular signaling pathways",
      journal: "Neuroscience. 2013;238:185-94.",
      authors: "Cunha MP, Martín-de-Saavedra MD, Romero A, Parada E, Egea J, Del Barrio L, Tasca CI, Farina M, Rodrigues AL, Lopez MG",
      year: 2013
    },
    {
      title: "Galantamine elicits neuroprotection by inhibiting iNOS, NADPH oxidase and ROS in hippocampal slices stressed with anoxia/reoxygenation",
      journal: "Neuropharmacology. 2012;62(2):1082-90.",
      authors: "Egea J, Martín-de-Saavedra MD, Parada E, Romero A, Del Barrio L, Rosa AO, Garcia AG, Lopez MG",
      year: 2012
    },
    {
      title: "Guanosine protects human neuroblastoma SH-SY5Y cells against mitochondrial oxidative stress by inducing heme oxigenase-1 via PI3K/Akt/GSK-3beta pathway",
      journal: "Neurochem Int. 2012;61(3):397-404.",
      authors: "Dal-Cim T, Molz S, Egea J, Parada E, Romero A, Budni J, Martín de Saavedra MD, del Barrio L, Tasca CI, Lopez MG",
      year: 2012
    },
    {
      title: "Involvement of PI3K, GSK-3beta and PPARgamma in the antidepressant-like effect of folic acid in the forced swimming test in mice",
      journal: "J Psychopharmacol. 2012;26(5):714-23.",
      authors: "Budni J, Lobato KR, Binfare RW, Freitas AE, Costa AP, Martín-de-Saavedra MD, Leal RB, Lopez MG, Rodrigues AL",
      year: 2012
    },
    {
      title: "Delayed pre-conditioning by 3-nitropropionic acid prevents 3,4-methylenedioxymetamphetamine-induced 5-HT deficits",
      journal: "J Neurochem. 2010;114(3):843-52.",
      authors: "Puerta E, Pastor F, Dvoracek J, de Saavedra MD, Goñi-Allo B, Jordán J, Hervias I, Aguirre N",
      year: 2010
    }
  ];

  years:number[] = this.getYears();



  constructor() { }

  ngOnInit(): void {
  }

  atras(){
    if(this.step == 0) {
      this.step = this.years.length - 1;
      return;
    }
    this.step--;
  }
  adelante(){
    if(this.step == this.years.length - 1) {
      this.step = 0;
      return;
    }
    this.step++;
  }

  goToYear(year: number){
    this.step = this.years.indexOf(year);
  }

  getYears(): number[]{
    let years:number[] = [];
    this.publications.forEach(publication => {
      if(!years.includes(publication.year | 0)) years.push(publication.year);
    });
    return years;
  }
  getPublicationsByYear(year: number): PublicationYear{
    let publicationYear: PublicationYear = {};
    publicationYear.year = year;
    publicationYear.publications = this.publications.filter(publication => publication.year == year);
    return publicationYear;
  }

  
}
