import { Component } from '@angular/core';
import { Responsavel } from '../responsavel/entidaderesponsavel/responsavel';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  responsavel: Responsavel = new Responsavel()

  constructor(private afAuth: AngularFireAuth, private router: Router) {}
  logar(){
this.afAuth.auth.signInWithEmailAndPassword(this.responsavel.email, this.responsavel.senha).then(
() => { this.router.navigate(['listaraluno']); }
).catch( (erro) => console.log(erro) );
}
logout() {
this.afAuth.auth.signOut();
this.router.navigate(['/']);
}
}
