import { Component, OnInit } from '@angular/core';
import { OverlayContainer } from '@angular/material';


@Component({
  selector: 'amte-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'amte';

  theme = 'my-theme';
  constructor(
    private overlayContainer: OverlayContainer
  ) {}

  ngOnInit(): void {
    this.overlayContainer.themeClass = this.theme;
  }

  onThemeChange() {
    this.overlayContainer.themeClass = this.theme;
  }

}
