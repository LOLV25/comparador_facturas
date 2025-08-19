import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
<<<<<<< HEAD
import toastr from 'toastr';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));


  window.addEventListener("DOMContentLoaded", () => {
  const btnInicioCarga = document.getElementById("btnInicioCarga");

  if (btnInicioCarga) {
    btnInicioCarga.addEventListener("click", () => {
      toastr.success("Carga completa", "", {
        timeOut: 5000,
        closeButton: true,
        positionClass: "toast-top-right",
        progressBar: true,
      });
    });
  }
});
=======

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
>>>>>>> 711a6f9e29588f997ce63d711e9c94b3eb21d263
