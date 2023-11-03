import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent{
  Links : Array<string>
  constructor(){
    this.Links=['Business Litigation','Elder Law Litigation'
    ,'Real Estate Litigation','Environmental Litigation','Government & Admin','Professional Litigation','Finance Litigation',
    'Arbitration & Meditation'] 
  }
}
