import { Component } from '@angular/core';


@Component({
    selector: 'app-basics',
    templateUrl: './basics.component.html',
    styles: []
})
export class BasicsComponent {
    lowerName: string = 'Marcelo';
    upperName: string = 'marCELO';
    fullName: string = 'maRcelo ramIrez';
    
    myDate: Date = new Date(); //today
}
