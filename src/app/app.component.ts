import { Component, OnInit, HostListener } from '@angular/core';
import { DataService, Pattern } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'conways-game-of-life';
  gameTimer: any;
  isPlaying: boolean = false;
  isSmallScreen: boolean = false;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.updateScreenStatus();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.updateScreenStatus();
  }

  updateScreenStatus() {
    if (window.innerWidth < 1026) { // 768px portrait
      this.isSmallScreen = true;
    }
    else {
      this.isSmallScreen = false;
    }
  }

  playPauseToggle() {
    if (this.isPlaying) {
      this.pauseGame();
      this.isPlaying = false;
    }
    else {
      this.startGame()
      this.isPlaying = true;
    }
  }

  startGame(): void {
    this.gameTimer = setInterval(() => this.dataService.updatedGridData(), 200);
  }

  pauseGame(): void {
    clearInterval(this.gameTimer);
  }

  patternSelected(id: number) {
    this.pauseGame();
    let pattern: Pattern;
    switch (id) {
      case 0:
        pattern = Pattern.LINE;
        break;
      case 1:
        pattern = Pattern.GLIDER;
        break;
      case 2:
        pattern = Pattern.SPACESHIP;
        break;
      case 3:
        pattern = Pattern.SMALLEXPLODER;
        break;
      case 4:
        pattern = Pattern.EXPLODER;
        break;
      case 5:
        pattern = Pattern.TUMBLER;
        break;
      case 6:
        pattern = Pattern.GOSPEL;
        break;
    }
    this.dataService.selectPattern(pattern);

  }
}