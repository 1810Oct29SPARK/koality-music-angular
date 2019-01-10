import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatToolbarModule,
  MatCheckboxModule,
  MatMenuModule,
  MatIconModule,
  MatCardModule
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    MatButtonModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule
  ]
})
export class MaterialModule { }
