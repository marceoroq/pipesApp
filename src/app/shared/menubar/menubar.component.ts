import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';


@Component({
    selector: 'app-menubar',
    templateUrl: './menubar.component.html',
    styles: []
})
export class MenubarComponent implements OnInit {
    items: MenuItem[] = [];

    constructor() {}

    ngOnInit() {
        this.items = [{
            label: 'Angular Pipes',
            icon: 'pi pi-desktop',
            items: [{
                label: 'Texts & Dates',
                icon: 'pi pi-align-left',
                routerLink: '/'
            },{
                label: 'Numbers',
                icon: 'pi pi-dollar',
                routerLink: 'numbers'
            },{
                label: 'No-Commons',
                icon: 'pi pi-globe',
                routerLink: 'no-commons'
            }]
        },{
            label: 'Custom Pipes',
            icon: 'pi pi-cog',
        }];
    }
}
