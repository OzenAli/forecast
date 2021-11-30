import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { FormService } from '../../form.service';
import { UserEditComponent } from '../../user-edit/user-edit.component';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  
  constructor(private userService: FormService,
              private router: Router,
              public dialog: MatDialog,
              private _snackBar: MatSnackBar) { }
  user!: User[];
  responseList$!: Observable<User[]>;


  ngOnInit(): void {
    this.responseList$ = this.userService.getUsers()
  }


  deleteUser(userId:number) {
    this.userService.deleteUser(userId).subscribe( res => {
      console.log(res);
      this._snackBar.open(  'User Deleted', 'Successful', {
        duration:2000,
      });
      this.router.navigate(['/form'])
    })
  }


  openUpdateUserModal(user:User){
   this.dialog.open(UserEditComponent, {
      width: '400px',
      data: user
    });
  }

}
