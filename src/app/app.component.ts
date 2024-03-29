import { Component, OnInit } from '@angular/core';
import { finalize, Observable } from 'rxjs';
import { LeaderboardService } from './services/leaderboard.service';
import { ScoreItem } from './services/ScoreItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  commands: any[] = []
  boardResponse$!: Observable<ScoreItem[]>
  loadingScores = false
  tempRand = 0
  currentIndex = 0
  lastIndex = 0
  streak = 0
  question = ''
  solution = ''
  userInput = ''
  placeholder = ''
  isCorrect = true
  showSolution = false
  selectedCategory = 'azure'

  constructor(private board: LeaderboardService) {}

  async ngOnInit() {
    this.loadCommands()
    this.loadLeaderboard()
  }

  loadCommands() {
    let jsonData = require(`./commands/${this.selectedCategory}.json`)

    this.commands = jsonData;
    this.lastIndex = this.commands.length - 1
    this.randomIndex()
    
    this.question = this.commands[this.currentIndex].question;
    this.solution = this.commands[this.currentIndex].solution;
  }

  loadLeaderboard() {
    this.boardResponse$ = this.board.getLeaderboard()
  }

  compareInput() {
    if(this.userInput.length === 0) {
      this.isCorrect = true
      return
    }
    
    if (this.userInput.toLowerCase() === this.solution.toLowerCase()) {
      this.isCorrect = true;
      this.streak++
      this.nextCommand();
    } else {
      if (this.solution.toLowerCase().startsWith(this.userInput.toLowerCase())) {
        this.isCorrect = true;
      } else {
        this.streak = 0
        this.isCorrect = false
      }
    }
  }

  nextCommand() {
    this.randomIndex()
    this.question = this.commands[this.currentIndex].question;
    this.solution = this.commands[this.currentIndex].solution;
    this.showSolution = false
    this.placeholder = '';
    this.userInput = '';
  }

  randomIndex() {
    do {
      this.tempRand = Math.floor(Math.random() * this.lastIndex) + 1
    } while (this.currentIndex == this.tempRand);
    this.currentIndex = this.tempRand
  }

  togglePlaceholder() {
    this.streak = 0;
    this.placeholder = this.showSolution ? this.solution : '';
  }

  clear() {
    this.isCorrect = true;
    this.userInput = '';
  }
}
