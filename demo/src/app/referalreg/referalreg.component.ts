import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';
@Component({
  selector: 'app-referalreg',
  templateUrl: './referalreg.component.html',
  styleUrls: ['./referalreg.component.css']
})
export class ReferalregComponent implements OnInit {

  reactiveForm: any=FormGroup;

  boards=[{'id':'JAVA','name':'JAVA'},{'id':'Testing','name':'Testing'},{'id':'AppDevelopement','name':'AppDevelopement'},{'id':'Non-Technical','name':'Non-Technical'}]
  quas=[{'id':'BE/B.Tech','name':'BE/B.Tech'},{'id':'Bsc','name':'Bsc'},{'id':'MBA/MCA','name':'MBA/MCA'},{'id':'Diploma/ITI','name':'Diploma/ITI'}]

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.reactiveForm=this.fb.group({

      candidatename:new FormControl('',[Validators.required,Validators.compose([
        Validators.pattern('[a-zA-z]*'),Validators.minLength(3)
      ])]),
      
      candidatemobile:new FormControl('',[Validators.required,Validators.compose([
        Validators.pattern('[0-9]*'),Validators.minLength(10), Validators.maxLength(14)
      ])]),

      candidateemail:new FormControl('',[Validators.required,Validators.compose([
        Validators.pattern ('^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$')
      ])]),

      candidatequalification:new FormControl('',[Validators.required,Validators.compose([
        Validators.pattern('[a-zA-z]*'),Validators.minLength(3)
      ])]),

      qua: new FormControl('',[Validators.required]),

      board: new FormControl('',[Validators.required]),

      gender:new FormControl('',Validators.required),

      referby:new FormControl('',[Validators.required,Validators.compose([
        Validators.pattern('[a-zA-z]*'),Validators.minLength(3)
      ])]),

      refemail:new FormControl('',[Validators.required,Validators.compose([
        Validators.pattern ('^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$')
      ])]),


      refermobileno:new FormControl('',[Validators.required,Validators.compose([
        Validators.pattern('[0-9]*'),Validators.minLength(10), Validators.maxLength(14)
      ])]),

    })

  }

}
