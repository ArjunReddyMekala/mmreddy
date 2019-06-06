import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';
@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {

  reactiveForm: any=FormGroup;

  public userFile: any=File;
  public userFiles: any=FileList;

  gradings=[{'id':1,'name':'scale 10'},{'id':2,'name':'scale 5'},{'id':3,'name':'%marks of 100max'}]

onSelectFile(event) {
    const file=event.target.files[0];
    this.userFile=file;
  }

  onSelectFileGraduation(event) {
    const file=event.target.files;
    this.userFiles=file;
  }
  onSelectFileSkills(event) {
    const file=event.target.files[0];
    this.userFile=file;
  }




  constructor(private fb: FormBuilder) {

   }

  ngOnInit() {
    this.reactiveForm=this.fb.group({
      name:new FormControl('',[Validators.required,Validators.compose([
        Validators.pattern('[a-zA-z]*'),Validators.minLength(3)
      ])]),

     
      password:new FormControl('',[Validators.required,Validators.compose([Validators.pattern('[a-zA-z0-9!@#$%^&*()_+]*'),Validators.minLength(6), Validators.maxLength(12)
    ])]),
    address:new FormControl('',Validators.required),
    phoneNumber:new FormControl('',[Validators.required,Validators.compose([
      Validators.pattern('[0-9]*'),Validators.minLength(10), Validators.maxLength(14)
    ])]),

    ugCourse: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-z]*'), Validators.minLength(3)])],
    ugSpecialization: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-z]*'), Validators.minLength(2)])],
    university_or_institute: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-z]*'), Validators.minLength(2)])],
    courseType :new FormControl('',Validators.required),
    
    passed_out_year: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(4), Validators.maxLength(4)])],
    gradingSystem: new FormControl('',[Validators.required]),
       marks:new FormControl('',Validators.required),
       skills:new FormControl('',Validators.required),

       total_experience_in_years: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(4), Validators.maxLength(4)])],

       total_experience_in_months: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(4), Validators.maxLength(4)])],
       
       relevant_experience_in_years: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(4), Validators.maxLength(4)])],
       relevant_experience_in_months: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(4), Validators.maxLength(4)])],
       
       
       current_ctc: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(4), Validators.maxLength(4)])],
       noticePeriod_in_days: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(4), Validators.maxLength(4)])],
       

    })
  }

}
