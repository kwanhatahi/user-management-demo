import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UsersRoutingModule } from "./users-routing.module";
import { UsersComponent } from "./users.component";
import { SharedModule } from "../shared/shared.module";
import { UsersDetailComponent } from './users-detail/users-detail.component';
import { MatSnackBarModule } from "@angular/material/snack-bar";

@NgModule({
  imports: [CommonModule, UsersRoutingModule, SharedModule, MatSnackBarModule],
  declarations: [UsersComponent, UsersDetailComponent],
})
export class UsersModule {}
