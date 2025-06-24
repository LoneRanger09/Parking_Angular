import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard implements OnInit {

  siteList = [
    { siteId: 1, siteName: 'Site A' },
    { siteId: 2, siteName: 'Site B' }
  ];

  buildingList: any[] = [];
  floorList: any[] = [];
  parkingSpotarray: number[] = [];

  siteId: number = 0;
  buildingId: number = 0;
  floorId: number = 0;

  ngOnInit(): void {
    // Sites are already hardcoded
  }

  getBuilding() {
    if (this.siteId == 1) {
      this.buildingList = [
        { buildingId: 101, buildingName: 'Building A1' },
        { buildingId: 102, buildingName: 'Building A2' }
      ];
    } else if (this.siteId == 2) {
      this.buildingList = [
        { buildingId: 201, buildingName: 'Building B1' },
        { buildingId: 202, buildingName: 'Building B2' }
      ];
    }
    this.buildingId = 0;
    this.floorList = [];
    this.parkingSpotarray = [];
  }

  getfloorByBuilding() {
    if (this.buildingId == 101 || this.buildingId == 201) {
      this.floorList = [
        { floorId: 1, floorName: 'Ground Floor', totalSpots: 5 },
        { floorId: 2, floorName: 'First Floor', totalSpots: 6 }
      ];
    } else if (this.buildingId === 102 || this.buildingId === 202) {
      this.floorList = [
        { floorId: 3, floorName: 'Second Floor', totalSpots: 4 },
        { floorId: 4, floorName: 'Third Floor', totalSpots: 3 }
      ];
    }
    this.floorId = 0;
    this.parkingSpotarray = [];
  }

  getFloorSelect() {
    const selectedFloor = this.floorList.find(f => f.floorId === this.floorId);
    const spots = selectedFloor?.totalSpots || 0;
    this.parkingSpotarray = Array.from({ length: spots }, (_, i) => i + 1);
  }
}
