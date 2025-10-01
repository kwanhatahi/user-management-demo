import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { IUser, UsersService } from "../users.service";
import { lastValueFrom } from "rxjs";
import { SnackbarService } from "src/app/shared/services/snackbar.service";
import HelperUtility from "../../utils/helper.utility";

@Component({
  selector: "app-users-detail",
  templateUrl: "./users-detail.component.html",
  styleUrls: ["./users-detail.component.scss"],
})
export class UsersDetailComponent implements OnInit {
  id: string | null = null;
  user: IUser | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private usersService: UsersService,
    private snackBarService: SnackbarService
  ) {}

  async ngOnInit(): Promise<void> {
    this.id = this.route.snapshot.paramMap.get("id");
    if (this.id) {
      this.user = await lastValueFrom(this.usersService.findOne(this.id));
    }
  }

  doCancel() {
    this.router.navigate(["/users"]);
  }

  async doAdd() {
    if (this.user) await lastValueFrom(this.usersService.create(this.user));
    this.snackBarService.open(`Create success.`, "OK");
    this.router.navigate(["/users"]);
  }

  async doEdit() {
    if (this.user) await lastValueFrom(this.usersService.update(this.user));
    this.snackBarService.open(`Update success.`, "OK");
    this.router.navigate(["/users"]);
  }

  async doDelete() {
    if (this.id) await lastValueFrom(this.usersService.remove(this.id));
    this.snackBarService.open(`Remove success.`, "OK");
    this.router.navigate(["/users"]);
  }

  displayHnNo(no: number) {
    return HelperUtility.padLeft(6, no);
  }
}
