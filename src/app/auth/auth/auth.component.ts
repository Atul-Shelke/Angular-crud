import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpRequestService } from 'src/app/common-services/http-request.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private fb:FormBuilder,private http:HttpRequestService) { }

  loginForm:any=this.fb.group({
    email   :['',Validators.required],
    password:['',Validators.required]
  })
  ngOnInit(): void {
  }

  onSubmit(){
      console.log(this.loginForm.value.email)
      this.http.request('base','post','/login',this.loginForm.value).subscribe((res:any)=>{
        console.log(res)
        console.log('res',this.loginForm.value.password)
      })
    }
  

}
