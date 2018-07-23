import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-panel-repos',
  templateUrl: './panel-repos.component.html',
  styleUrls: ['./panel-repos.component.scss']
})
export class PanelReposComponent implements OnInit {
  @Input() name:any;
  @Input() description:any;
  @Input() watchers:any;
  @Input() forks:any;   
  @Input() scription:any;
  @Input() html_url:any;
  constructor() { }

  ngOnInit() {
  }

}
