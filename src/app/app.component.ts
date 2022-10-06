import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'meetup';

  listData: IUserModel[] = [];

  cadastroForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.cadastroForm = this.fb.group({
      email: [null],
      senha: [null]
    });
  }

  btnSalvar(){
    debugger;
    console.log('salvar')
  }

  btnEsqueciSenha(){
    console.log('esqueci senha')
  }
}

export interface IUserModel {
  nome: string;
  senha: string;
  data: Date;
}
