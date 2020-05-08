import { Component, OnInit, Input } from '@angular/core';
import { AppComponent } from '../../containers/app/app.component';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class AppMenuComponent implements OnInit {
  @Input() menuType: MenuItem[];

  model: MenuItem[];

  constructor(public app: AppComponent) {}

  ngOnInit() {
    this.model = this.menuType;
  }
}
