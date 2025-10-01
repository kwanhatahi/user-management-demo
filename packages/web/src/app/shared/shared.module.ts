import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TranslateModule } from "@ngx-translate/core";
import { WebviewDirective } from "./directives";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { DataTablesModule } from "angular-datatables";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatListModule } from "@angular/material/list";
import { HttpClientModule } from "@angular/common/http";
import { LoggerModule, NgxLoggerLevel } from "ngx-logger";
import { MatSelectModule } from "@angular/material/select";
import { ProgressSpinnerModule } from "./components/progress-spinner/progress-spinner.module";
import { AppOverlayModule } from "./components/overlay/overlay.module";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { ReactiveFormsModule } from "@angular/forms";
import { ConfirmComponent } from "./components/dialogs/confirm/confirm.component";
import { MatDialogModule } from "@angular/material/dialog";
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [WebviewDirective, ConfirmComponent],
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    DataTablesModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    HttpClientModule,
    LoggerModule.forRoot({
      level: NgxLoggerLevel.INFO,
      disableConsoleLogging: false,
    }),
    MatDatepickerModule,
    MatDialogModule,
  ],
  exports: [
    TranslateModule,
    WebviewDirective,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    DataTablesModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatSelectModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    LoggerModule,
    ProgressSpinnerModule,
    AppOverlayModule,
    MatProgressBarModule,
    MatCardModule,
    MatInputModule,
    MatDialogModule
  ],
})
export class SharedModule {}
