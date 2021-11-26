import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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

  constructor() {
    // this.initializeForm();
    this.userForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      lastname: new FormControl('', [Validators.required, Validators.minLength(2)]),
      birthday: new FormControl(''),
      gender: new FormControl(''),
      phone: new FormArray([new FormControl('')]),
      email: new FormArray([new FormControl('')])
    })
  }

  //  initializeForm(): void{
  //   this.userForm = this.fb.group({
  //     name: 'Name here',
  //     lastname: '',
  //     birthday: '',
  //     gender: '',
  //     phone: this.fb.array([this.fb.control('')]),
  //     // email: this.fb.array([this.fb.control('')])
  //   });
  //  }

  public onSubmit() {
    console.log(this.userForm.value);
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

  // setGender(event): void{
  //   this.userForm.patchValue({
  //     gend
  //   })
  // }


  get phone(): FormArray {
    return this.userForm.get('phone') as FormArray;
  }
  get email(): FormArray {
    return this.userForm.get('email') as FormArray;
  }

  ngOnInit(): void {
  }

}
