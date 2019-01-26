import { NgModule } from '@angular/core';
import {
  MatBadgeModule,
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatButtonModule,
  MatListModule
} from '@angular/material';

@NgModule({
  imports: [
    MatBadgeModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule
  ],
  exports: [
    MatBadgeModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule
  ]
})
export class MaterialModule {}
