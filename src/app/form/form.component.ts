import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormService } from './form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  genders = [
    { key: 'man', value: 'Man' },
    { key: 'woman', value: 'Woman' }
  ]

  userForm!: FormGroup

  constructor(private formService: FormService,
              private _snackBar: MatSnackBar) {
    this.userForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      lastname: new FormControl('', [Validators.required, Validators.minLength(2)]),
      birthday: new FormControl(''),
      gender: new FormControl(''),
      phone: new FormArray([new FormControl('',Validators.required)]),
      email: new FormControl('')
    })
  }

  public onSubmit() {
    if (this.userForm.invalid) {
      return
    }
    this.formService.addUser(this.userForm.value).subscribe(res => {
      console.log(res);
      this._snackBar.open(  'User Added', 'Successful', {
        duration:2000,
      });
      this.userForm.reset();
    })
    
  }

  public control(name: string) {
    return this.userForm.get(name);
  }

  addPhone() {
    this.phone.push(new FormControl(''));
  }

  removePhone(index: number) {
    this.phone.removeAt(index);
  }

  addEmail() {
    this.email.push(new FormControl(''));
  }

  removeEmail(index: number) {
    this.email.removeAt(index);
  }

  save() {
    if (this.userForm.invalid) {
      return
    }
    console.log(this.userForm.value);
  }

  get phone(): FormArray {
    return this.userForm.get('phone') as FormArray;
  }
  get email(): FormArray {
    return this.userForm.get('email') as FormArray;
  }

  ngOnInit(): void {
  }

}
