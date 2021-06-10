import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  nameForm = this.formBuilder.group({
    name: ''
  });
  constructor(
    private formBuilder: FormBuilder,
    public router: Router,
  ) {}

  onSubmit(): void {
    console.log(this.nameForm.value);
    localStorage.setItem('currentPlayer', this.nameForm.value.name);
    if (!localStorage.getItem(this.nameForm.value.name)){
      localStorage.setItem(this.nameForm.value.name, '0');
    }
    this.nameForm.reset();
    this.router.navigate(['tabs/tab2']);
  }
}
