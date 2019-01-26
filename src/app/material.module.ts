import { NgModule } from '@angular/core';
import {
  MatBadgeModule,
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatButtonModule,
  MatListModule,
  MatTabsModule
} from '@angular/material';

@NgModule({
  imports: [
    MatBadgeModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatTabsModule
  ],
  exports: [
    MatBadgeModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatTabsModule
  ]
})
export class MaterialModule {}
