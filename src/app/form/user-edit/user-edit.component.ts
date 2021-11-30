import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { FormService } from '../form.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  genders = [
    { key: 'man', value: 'Man' },
    { key: 'woman', value: 'Woman' }
  ]

  userForm!: FormGroup;
  constructor(private userService: FormService,
             private _snackBar: MatSnackBar,
             private router: Router,
             @Inject(MAT_DIALOG_DATA) public data: User
  ) { }

  ngOnInit(): void {
   // console.log(this.data)
    this.userForm = new FormGroup({
      name: new FormControl(this.data.name || '', [Validators.required, Validators.minLength(2)]),
      lastname: new FormControl(this.data.lastname || '', [Validators.required, Validators.minLength(2)]),
      birthday: new FormControl(this.data.birthday || ''),
      gender: new FormControl(this.data.gender || ''),
      phone: new FormArray([new FormControl(this.data.phone,Validators.required)]),
      email:new FormControl(this.data.email)
    });
  }

  addPhone() {
    this.phone.push(new FormControl(''));
  }

  removePhone(index: number) {
    this.phone.removeAt(index);
  }

  get phone(): FormArray {
    return this.userForm.get('phone') as FormArray;
  }

  editUser() {
    this.userService.updateUser(this.userForm.value, this.data.id).subscribe((res:any) =>{
      console.log(res);
      this._snackBar.open(  'User Updated', 'Successful', {
        duration:2000,
      });
      this.router.navigate(['/form'])
    });
  }
}
