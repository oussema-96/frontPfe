import { Component, OnInit } from '@angular/core';
import { HistoryService } from 'src/app/services/entities/history.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  histories: [];

  constructor(private hisotryService: HistoryService) { }

  ngOnInit(): void {
    this.getHistory();
  }

  async getHistory() {
    await this.hisotryService.getListHistory()
    .then((resp:any) => {
      this.histories = resp;
    })
  }
}
