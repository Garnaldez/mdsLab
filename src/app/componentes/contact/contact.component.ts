import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  submitted = false;
  lat = 40.445374672028;
  long = -3.726383646860517;
  options: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 25,
    minZoom:15,

  };
  attachment: File | null = null;
  attachmentName: string = '';

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
      attachment: [null]
    });
  }
  onSubmit(e: Event) {
    this.submitted = true;
    this.contactForm.updateValueAndValidity();
    this.contactForm.markAllAsTouched();
    if (this.contactForm.valid) {
      // Aquí puedes implementar la lógica para enviar el correo electrónico
      // Por ejemplo, utilizando una API de terceros o una función en el backend de Angular
     let mail = this.contactForm.value;
      emailjs.sendForm('service_sa5a0ca', 'template_gwgqy5a', e.target as HTMLFormElement, 'NLwUoElVObUN3-Kgh') 
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

      console.log('Formulario enviado:', this.contactForm.value);
    } else {
      console.log('Formulario inválido. Verifica los campos.');
    }
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.attachment = file;
      this.attachmentName = file.name;
      this.contactForm.patchValue({
        attachment: this.attachment
      });
    }
  }

}
