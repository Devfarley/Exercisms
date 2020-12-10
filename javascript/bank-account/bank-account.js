//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

import { error } from "console";

export class BankAccount {

  constructor() {
    this.account = 
    {balance : 0,
    active : false};

  }

  open() {
    if (this.account.active === true){
     throw new ValueError();
    } else {
      this.account.active = true;
    }
   return this.account;
  }

  close() {
    if (this.account.active === true){
      this.account.active = false;
      this.account.balance = 0;
    } else if (this.account.active === false){
     throw new ValueError();
    }
    return this.account
  }

  deposit(amount) {
    if (this.account.active === false) {
    throw new ValueError();
    }else if (amount < 0){
      throw new ValueError();
    }else {
     let newBalance = this.account.balance + amount;
     this.account.balance = newBalance;
    }
    return this.account.balance;
  }

  withdraw(amount) {
    if (this.account.active === false) {
     throw new ValueError();
    }else if (amount > this.account.balance){
      throw new ValueError();
    }else if (amount < 0 ){
      throw new ValueError();
    }else {
      let newBalance = this.account.balance - amount;
     this.account.balance = newBalance;
    }
    return this.account.balance;
  }

  get balance() {
    if (this.account.active === false) {
     throw new ValueError();
    }else {
    return this.account.balance;
    }
  }

}

export class ValueError extends Error {

  constructor() {
    super('Bank account error');
  }

}
