import { Component, OnInit } from "@angular/core";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  public formLogin: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formLogin = this.formBuilder.group({
      email: [
        null,
        Validators.compose([
          Validators.required,
          Validators.pattern(
            // tslint:disable-next-line: quotemark
            "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$"
          ),
        ]),
      ],
      password: [
        null,
        Validators.compose([Validators.required, Validators.minLength(3)]),
      ],
    });
  }

  ngOnInit() {}
  login() {
    window.alert('Funcionou');
  }
}
