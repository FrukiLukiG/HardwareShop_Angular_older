import { Component, OnInit } from '@angular/core';
import { Hardware } from '../repository/hardware';
import { HardwareService } from 'src/app/hardware-service/hardware.service';

@Component({
  selector: 'app-hardware',
  templateUrl: './hardware.component.html',
  styleUrls: ['./hardware.component.css']
})
export class HardwareComponent implements OnInit {

  hardwareArray?: Hardware[];
  selectedHardware?: Hardware;

  constructor(private hardwareService: HardwareService) { }

  ngOnInit(): void {
    this.getHardwares()
  }

  getHardwares(): void {
    this.hardwareService.getHardware()
      .subscribe(h => this.hardwareArray = h);
  }

  onSelect(h: Hardware): void {
    this.selectedHardware = h;
  }

  addHardware(code: string, name: string, type: string, priceStr: string, numAvailableStr: string): void {
    code = code.trim();
    name = name.trim();
    type = type.trim();
    priceStr = priceStr.trim();
    numAvailableStr = numAvailableStr.trim();

    var price: number = +priceStr;
    var numAvailable: number = +numAvailableStr;

    if (!code || !name || !type || !priceStr || !numAvailableStr) {return;}
    if (code.length != 10){return;}
    if (price <= 0 || numAvailable <= 0 || numAvailable > 1000){return;}

    this.hardwareService.addHardware({code, name, type, price, numAvailable} as Hardware)
    .subscribe(h => {this.hardwareArray?.push(h);});
  }

  deleteHardware(h: Hardware): void {
    this.hardwareArray = this.hardwareArray?.filter(hw => hw !== h);
    this.hardwareService.deleteHardware(h).subscribe(hw => {
      this.hardwareArray?.filter(hw => hw !== h);
    });
  }

}
