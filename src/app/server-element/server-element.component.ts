import { Component, Input, OnInit, ViewEncapsulation, } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None // this means that any styles applied to this component in its css file will be applied globally to all components; the default would be .Emulated instead of .None
  // ViewEncapsulation.Emulated is the default which would mean styles in the corresponding css file would only apply to that specific component
})
export class ServerElementComponent implements OnInit {
  @Input('srvElement') element: {type: string, name: string, content: string}; //@Input decorator now exposes this component's properties to it's parents
  // inside the parenthesis we have put an alias so we use that name instead to reference this property

  constructor() { }

  ngOnInit(): void {
  }

}
