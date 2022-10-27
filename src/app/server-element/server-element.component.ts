import { Component, Input, OnInit, } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  @Input('srvElement') element: {type: string, name: string, content: string}; //@Input decorator now exposes this component's properties to it's parents
  // inside the parenthesis we have put an alias so we use that name instead to reference this property

  constructor() { }

  ngOnInit(): void {
  }

}
