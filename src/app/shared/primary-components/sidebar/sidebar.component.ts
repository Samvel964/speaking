import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NavItemI } from './sidebar.interface';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  @Input() data!: NavItemI[];
  @Input() selectedItemId!: string;
  @Output() navItemClickEvent: EventEmitter<string> = new EventEmitter<string>();

  navItemClickHandler(id: string) {
    this.navItemClickEvent.emit(id);
  }

}
