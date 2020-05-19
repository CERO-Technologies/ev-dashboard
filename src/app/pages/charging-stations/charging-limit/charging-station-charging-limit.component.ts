import { Component, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ChargingStation } from 'app/types/ChargingStation';

@Component({
  selector: 'app-charging-station-charging-limit',
  templateUrl: 'charging-station-charging-limit.component.html',
})
export class ChargingStationChargingLimitComponent {
  @Input() public chargingStation!: ChargingStation;
  @Input() public inDialog!: boolean;
  @Input() public dialogRef!: MatDialogRef<any>;

  public close(saved: boolean = false) {
    if (this.inDialog) {
      this.dialogRef.close(saved);
    }
  }
}
