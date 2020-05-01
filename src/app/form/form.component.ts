import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormArray, Validators} from "@angular/forms";
import { MydetailsService } from "../mydetails.service";
import { HttpClient, HttpParams } from "@angular/common/http";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  userForm:FormGroup;

  constructor(
    private service: MydetailsService,
    private http: HttpClient
  ) {
    this.userForm = new FormGroup({
      'name':new FormControl("",Validators.required),
      'email':new FormControl("",[Validators.required,Validators.email]),
      'Gender':new FormControl("male",Validators.required),
      'favfood':new FormArray([
        new FormGroup({
          'indian': new FormControl(true,Validators.required)
        }),
        new FormGroup({
          'chinese': new FormControl(false,Validators.required)
        }),
      ]),
      'addresses': new FormArray([
        this.createAddress()
      ])
    });
   }
   createAddress(){
    return new FormGroup({
      'line1' : new FormControl('', Validators.required),
      'line2' : new FormControl('', Validators.required),
      'country' : new FormControl('', Validators.required),
      'state' : new FormControl('', Validators.required),
      'city' : new FormControl('', Validators.required)
      })
   }
   addAddress(){
    let addressArray = this.userForm.get('addresses') as FormArray;
    addressArray.push(this.createAddress())  
   }
   removeAddress(index){
     let address = this.userForm.get('addresses') as FormArray;
     address.removeAt(index);
   }
   ngOnInit(): void {
   }
   submitForm(){
     if(this.userForm.valid){
      //  console.log(this.userForm.value);
       this.service.putData(this.userForm.value).subscribe(()=>{
         alert("success");
       });
     }
   }

}
