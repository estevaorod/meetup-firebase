import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'meetup';

  listData: IUserModel[] = [];

  cadastroForm: FormGroup;
  model: IUserModel = {};

  constructor(
    private fb: FormBuilder,
    private afs: AngularFirestore,
    private afAuth: AngularFireAuth,
  ) { }

  ngOnInit(): void {
    this.cadastroForm = this.fb.group({
      email: [null],
      senha: [null]
    });
    this.obter();
  }

  obter() {
    this.afs.collection('usuarios').valueChanges()
    .subscribe(
      r => {
        this.listData = r.map(x => <IUserModel>x);
      }
    );
  }

  btnSalvar() {
    this.model.data = new Date();
    this.afs.collection('usuarios').add(this.model).then();
    //this.cadastroForm.reset();
    //this.model = {};
  }

  btnEsqueciSenha() {
    console.log('esqueci senha')
  }
}

export interface IUserModel {
  email?: string;
  senha?: string;
  data?: Date;
}
