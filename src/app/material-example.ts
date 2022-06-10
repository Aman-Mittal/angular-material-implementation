import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';

/**
 * @title Simple autocomplete
 */
@Component({
  selector: 'material-example',
  templateUrl: 'material-example.html',
  styleUrls: ['material-example.css'],
})
export class MaterialExample {
  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];
}


/**  Copyright 2022 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */