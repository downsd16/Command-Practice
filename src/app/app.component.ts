import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  commands: any[] = []
  leaderboard: any[] = []
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

  constructor() {}

  ngOnInit() {
    this.loadCommands();
    
  }

  loadCommands() {
    let jsonData = require(`./commands/${this.selectedCategory}.json`)

    this.commands = jsonData;
    this.lastIndex = this.commands.length - 1
    this.randomIndex()
    
    this.question = this.commands[this.currentIndex].question;
    this.solution = this.commands[this.currentIndex].solution;
  }

  compareInput() {
    if(this.userInput.length === 0) {
      this.isCorrect = true
      return
    }
    
    if (this.userInput.toLowerCase() === this.solution.toLowerCase()) {
      this.isCorrect = true;
      this.nextCommand();
    } else {
      if (this.solution.toLowerCase().startsWith(this.userInput.toLowerCase())) {
        this.isCorrect = true;
      } else {
        this.isCorrect = false;
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
    this.placeholder = this.showSolution ? this.solution : '';
  }

  clear() {
    this.isCorrect = true;
    this.userInput = '';
  }
}
