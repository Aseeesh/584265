import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

type PaneType = 'left' | 'right';

const LINKS: any[] = [
  { link: '/home', name: 'home', icon: 'home' },
  { link: '/mock', name: 'mock', icon: 'info_outline' },
  { link: '/async', name: 'async-http', icon: 'swap_vert' },
  { link: '/back', name: 'back-http', icon: 'swap_vert' },
  { link: '/static/back', name: 'static-back-http', icon: 'swap_vert' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush, 
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(100%, 0, 0)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
  ]
})

export class SidebarComponent implements OnInit {
  public links: any[] = [];
  ngOnInit(): void {
    const linkTemp = JSON.parse(JSON.stringify(LINKS));
    this.links = linkTemp.map((link) => {
      link.name = `sidebar.${link.name}`;
      return link;
    }); 
  }
  
  @Input() activePane: PaneType = 'left';

}
