import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Expense } from '../../app/expense.model';
import { ExpenseService } from '../../app/expense.service';
import { DetailPage } from '../detail/detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  expenses: Expense[];

  constructor(private navCtrl: NavController,
              private expenseService: ExpenseService) { }

  ionViewWillEnter(){
    this.expenseService.getExpenses()
      .then(expenses => this.expenses = expenses);
  }

  onAddClick() {
    console.log('add clicked');
    this.navCtrl.push(DetailPage);
  }

  onItemClick(expense: Expense) {
    console.log('item clicked:', expense);
    this.navCtrl.push(DetailPage, {
      expenseId: expense.id
    });
  }

}
