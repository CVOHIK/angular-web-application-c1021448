import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import {MatButtonModule,MatCheckboxModule,MatToolbarModule,MatInputModule,MatProgressSpinnerModule,MatCardModule,MatMenuModule,
MatIconModule,MatSelectModule,MatSliderModule} from '@angular/material';

@NgModule({

imports: [MatButtonModule, MatCheckboxModule,MatToolbarModule,MatInputModule,
    MatProgressSpinnerModule,MatCardModule,MatMenuModule,MatIconModule,
    MatSelectModule,MatSliderModule
],

exports: [MatButtonModule, MatCheckboxModule,MatToolbarModule,MatInputModule,
    MatProgressSpinnerModule,MatCardModule,MatMenuModule, MatIconModule,
    MatSelectModule,MatSliderModule
]

})

export class MaterialModule{}