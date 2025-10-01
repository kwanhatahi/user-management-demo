import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UsersComponent } from "./users.component";
import { UsersDetailComponent } from "./users-detail/users-detail.component";

const routes: Routes = [
  {
    path: "users",
    component: UsersComponent,
  },
  { path: "users/:id", component: UsersDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
