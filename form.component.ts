import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  isdisabled:boolean=true;

  libForm: any;
  constructor() { }

  ngOnInit(): void {
    this.libForm = new FormGroup({
      bookId: new FormControl(null, [ Validators.required]),
      bookName:new FormControl('',[Validators.required,Validators.max(999999)])
    })
  }

  submit(data:any) {
    console.log('----', data)
  }
}
