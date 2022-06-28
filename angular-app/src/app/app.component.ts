import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nw-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'bazel-poc';

  ngOnInit(): void {
    console.log('hi3')
  }
}
