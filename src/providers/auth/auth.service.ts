import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Account } from '../../models/account';
import { Login } from '../../models/login';

@Injectable()
export class AuthService {

  constructor(private afAuth: AngularFireAuth) {
  }

  async signIn(account: Account) {
    try {
      return <Login> {
        result: await this.afAuth.auth.signInWithEmailAndPassword(account.email, account.password)
      };
    } catch (e) {
      return <Login> {
        error: e
      };
    }
  }
}
