import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  guessForm = this.formBuilder.group({
    num: ''
  });
  random = Math.random() * (50 - 0) + 0;
  count = 1;
  private player = localStorage.getItem('currentPlayer');
  private score = +localStorage.getItem(this.player);
  constructor(
    private formBuilder: FormBuilder,
    public router: Router,
  ) {
    this.player = localStorage.getItem('currentPlayer');
    this.score = +localStorage.getItem(this.player);
  }

  onSubmit(): void {
    console.log(this.guessForm.value);
    if ( +this.guessForm.value.num === this.random || this.count === 3){
      if ( +this.guessForm.value.num === this.random){
        this.score = this.score +1;
        localStorage.setItem(this.player,this.score.toString());
      }
      this.router.navigate(['tabs/tab3']);
    } else {
      this.count++;
    }
    this.guessForm.reset();
    this.random = Math.random() * (50 - 0) + 0;
    this.player = localStorage.getItem('currentPlayer');
    this.score = +localStorage.getItem(this.player);
  }
}
