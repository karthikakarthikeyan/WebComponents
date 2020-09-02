import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'info-box',
  templateUrl: './info-box.component.html',
  styleUrls: ['./info-box.component.css']
})
export class InfoBoxComponent implements OnInit {
  @Input() signupTitle = 'Sign up - Custom Element'; 
  @Input() thankyoumsg = 'Thanks!';

  formData = {name: '', email: ''};
  formSubmitted = false;

  constructor() { 
    
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.formSubmitted = true;
  }

}
