import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
  
  productForm:any=this.fb.group({
    title      :['',Validators.required],
    price      :['',Validators.required],
    category   :['',Validators.required],
    description:['',Validators.required]
  })
  ngOnInit(): void {
  }

  // product form
  onSubmit(){
    console.log('productForm',this.productForm.value)
  }
}
