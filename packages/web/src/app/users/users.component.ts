import { Component, OnInit, ViewChild } from "@angular/core";
import { DataTableDirective } from "angular-datatables";
import { Subject, lastValueFrom } from "rxjs";
import { IUser, UsersService } from "./users.service";
import HelperUtility from "../utils/helper.utility";
import { Router } from "@angular/router";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.scss"],
})
export class UsersComponent implements OnInit {
  dtTrigger: Subject<any> = new Subject<any>();
  dtOptions: DataTables.Settings = {};
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective | undefined;

  users: IUser[] = [];
  displayProgressSpinner = true;

  constructor(private usersService: UsersService, private router: Router) {}

  ngOnInit(): void {
    this.init();
  }

  ngAfterViewInit() {
    this.getUserList();
  }

  init() {
    this.dtOptions = {
      pagingType: "full_numbers",
      pageLength: 25,
      processing: true,
      deferRender: true,
      destroy: true,
      responsive: true,
      paging: true,
      info: false,
      autoWidth: false,
      scrollX: true,
      language: {
        lengthMenu: "Show _MENU_ users",
        zeroRecords: "No matching records found",
      },
    };
  }

  async getUserList() {
    this.users = await lastValueFrom(this.usersService.findAll());
    this.render();
    this.displayProgressSpinner = false;
  }

  render() {
    if (!this.dtElement) return;

    if (!this.dtElement.dtInstance) {
      this.dtTrigger.next(this.dtOptions);
      return;
    }
    this.dtElement.dtInstance.then((dtInstance: any) => {
      dtInstance.destroy();
      this.dtTrigger.next(this.dtOptions);
    });
  }

  displayHnNo(no: number) {
    return HelperUtility.padLeft(6, no);
  }

  openDialog(user: IUser) {
    this.router.navigate([`users/${user.id}`]);
  }
}
