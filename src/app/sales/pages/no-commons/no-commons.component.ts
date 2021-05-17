import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { interval } from 'rxjs';


@Component({
    selector: 'app-no-commons',
    templateUrl: './no-commons.component.html',
    styles: []
})
export class NoCommonsComponent implements OnInit {
    
    // to use in i18nSelect
    name: string = "Fernando";
    gender: string = 'male';
    genderMap = {
        'male': 'Mr.',
        'female': 'Mrs.'
    }
    
    // to use in i18nPlural & Slice Pipe
    clients: string[] = ["Pepe", "Jose", "Sara", "Melena", "Sofia"];
    clientsMap = {
        '=0': "no clients waiting.",
        '=1': "1 client waiting.",
        'other': "# clients waiting."
    }

    // to use in KeyValue Pipe
    client = {
        name: "Fernando",
        age: 35,
        address: "Ottawa, Canada"
    }

    // to use in Json Pipe
    heroes = [{
        name: "Superman",
        canFly: true
    },{
        name: "Spiderman",
        canFly: false
    },{
        name: "Aquaman",
        canFly: true
    }]
    
    // to use in Async Pipe
    // Interval emite 1, 2, 3, etc cada 1000ms
    myObservable = interval(1000);
    promiseValue = new Promise(resolve => {
        setTimeout(() => resolve("Promise Resolved"), 5500);
    })

    constructor(private primeNGConfig: PrimeNGConfig) {}

    ngOnInit(): void {
        // Esto mas la inyeccion del primeNGConfig son para agregar el 
        // efecto de ripple al hacer clic en la cabezera del p-fieldset.
        this.primeNGConfig.ripple = true;
    }

    public changeClient() {
        if (this.name == "Fernando") {
            this.name = "Maria";
            this.gender = "female";
        } else {
            this.name = "Fernando";
            this.gender = "male";
        }
    }

    public deleteClient() {
        this.clients.pop();
    }


}
