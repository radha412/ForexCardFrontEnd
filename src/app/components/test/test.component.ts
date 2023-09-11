import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  form2: boolean = false;
form3: boolean = false;

submit1() {
  this.form2 = true;
}
submit2() {
  this.form2 = false;
  this.form3 = true;
}
submit3() {
alert("woila");
}


}
