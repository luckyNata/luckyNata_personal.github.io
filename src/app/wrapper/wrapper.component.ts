import {Component, OnInit} from '@angular/core';
import {MainService} from 'app/shared/main.service';
import {DataType} from "app/shared/dataType";
import {Router} from '@angular/router';
import {LoginService} from "../shared/login.service";

@Component({
    moduleId: module.id,
    selector: 'wrapper',
    templateUrl: 'wrapper.component.html',
    styleUrls: ['wrapper.component.css']
})

export class WrapperComponent implements OnInit{
    data1: DataType;
    flag: Boolean;
    hideFlag: Boolean;

    constructor(private mainService: MainService,  private router: Router, private loginService: LoginService){}
    ngOnInit(){
        this.router.navigate(['']);
        // this.changeColor();
        // setInterval(() => {
        //     this.changeColor();
        // }, 3000);


        this.mainService.getData()
            .subscribe(mas => {
                this.data1 = mas;
                this.flag = this.data1.flag;
            });


        this.mainService.btnHidden.subscribe(
            data => {this.hideFlag = data;
                console.log('onInit', this.hideFlag);
            }
        )
    }
    openPopup(){
      this.loginService.setIsClosed(false);
    }
    // changeColor(){
    //     this.color = this.mainService.changeColor();
    // }

}
