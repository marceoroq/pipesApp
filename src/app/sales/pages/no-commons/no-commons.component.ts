import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';


@Component({
    selector: 'app-no-commons',
    templateUrl: './no-commons.component.html',
    styles: []
})
export class NoCommonsComponent implements OnInit {
    constructor(private primeNGConfig: PrimeNGConfig) {}

    ngOnInit(): void {
        // Esto mas la inyeccion del primeNGConfig son para agregar el 
        // efecto de ripple al hacer clic en la cabezera del p-fieldset.
        this.primeNGConfig.ripple = true;
    }
}
