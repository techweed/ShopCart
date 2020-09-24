import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'MyCart';
	loggedIn:boolean = false;
  Email:string;
  Email2;
	Password2:string;

constructor(){
	let e=JSON.parse(sessionStorage.getItem('CurUser'));
	if(e!=null){
		e.forEach(element => {
			this.Email2=element.Email2;
		});
		this.loggedIn=true;
	}
	
}
	ngOnInit(){
		
	}
  Signin(SignForm:NgForm):void{
	let AllUsers=JSON.parse(localStorage.getItem("AllUsers"))
	let CurUser=[];
	  if(AllUsers==null){
		alert('User not registered');
		}
		else{
			CurUser.push(SignForm.value);
			var existing=false;
			AllUsers.forEach(element => {
			if(element.Email==this.Email2 && element.Password==this.Password2){
			existing=true;
			}
			});
			if(existing){
				//document.getElementById('userSign').innerHTML=this.Email2;
				sessionStorage.setItem('CurUser',JSON.stringify(CurUser))
				this.loggedIn=true;
				let closeform=document.getElementById("close") as HTMLElement;
				closeform.click();
				this.refresh();
			}
			else{
				alert('Username or password is incorrect');
			}
		}
	}
	
  Register(RegForm:NgForm):void{
	let AllUsers=JSON.parse(localStorage.getItem("AllUsers"))

	  if(AllUsers==null){
		  AllUsers=[];
		  AllUsers.push(RegForm.value);
			localStorage.setItem('AllUsers',JSON.stringify(AllUsers))
			let closeform=document.getElementById("close2") as HTMLElement;
			closeform.click();
		}
		else{
			var existing=false;
			AllUsers.forEach(element => {
			if(element.Email==this.Email){
			existing=true;
			alert('Email already registered');
			}
			});
			if(!existing){
				AllUsers.push(RegForm.value);
			  localStorage.setItem('AllUsers',JSON.stringify(AllUsers));
			  let closeform=document.getElementById("close2") as HTMLElement;
				closeform.click();
			}
			console.log(RegForm.value);
		}
  }

  fun(){
		var flag=true,flag2=true,flag3=true,flag4=true;

		if(document.getElementById('username1')["value"]==''||document.getElementById('Email')["value"]==''||document.getElementById('psd21')["value"]=='') 
		{ alert('All fields are mandatory');
		flag3 = false;} 
	else 
		{ flag3 = true;}

	if(document.getElementById('psd11')["value"].length<8) 
		{ alert('Password is too short');
		flag4 = false;}
	else if (document.getElementById('psd11')["value"].length>16) 
		{ alert('Password is too long');
		 flag4 = false;}
	else
		{flag4 = true;} 

		if(document.getElementById('psd11')["value"]==document.getElementById('psd21')["value"]) 
		{flag = true;} 
	else 
		{ alert('Passwords do not match');
		 flag = false;}	 
	if(document.getElementById('agree')["checked"]) 
		{flag2 = true;} 
	else 
		{ alert('Accept the terms and conditions');
		 flag2 = false;}
		 
	if(flag && flag2 && flag3 && flag4) 
		{return true;} 
	else 
		{return false;}
	}

	LogoutFunction()
  {
		sessionStorage.removeItem('CurUser');
		sessionStorage.removeItem('cart');
		this.loggedIn=false;
		let closeform=document.getElementById("logoutClose") as HTMLElement;
		closeform.click();
		this.refresh();
	}
	
	refresh()
  {
    location.reload();
	}

	redirect(){
		let searchItem=document.getElementById('search')["value"];
		let s="products/"+searchItem;
		document.location.href=s;
	}
	
}
