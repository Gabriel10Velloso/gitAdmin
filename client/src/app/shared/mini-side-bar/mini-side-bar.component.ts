import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mini-side-bar',
  templateUrl: './mini-side-bar.component.html',
  styleUrls: ['./mini-side-bar.component.scss']
})
export class MiniSideBarComponent implements OnInit {

  @Input() login;
  @Input() location;
  @Input() email;
  @Input() blog;
  @Input() created_at;

  mostrarCard: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  sideBarUser() {
    this.mostrarCard = !this.mostrarCard;
  }

}
