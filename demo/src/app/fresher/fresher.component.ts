import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';
import { FresherService } from '../fresher.service';
import {Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';
import {NgbTabsetConfig} from '@ng-bootstrap/ng-bootstrap';



const skills = ['Angular js', 'Anjuar 1', 'Angular 2', 'Angular 3', 'Angular 4', 'Angular 5', 'Angular 6',
  'Java', 'Java Script', 'Advanced Java', '.net', 'Frame Work', 'php',
  'Html5', 'css3', 'Bootstrap 4', 'ng bootstrap', 'Sql', 'Mysql', 'Oracle', 'plsql', 'Devopps', 'Service Now',
  'tablue', 'muelsoft', 'spring boot', 'spring tools', 'springs', 'aws', 'inframatica', 'sap',
  ' sap fico', 'testing', 'manual testing', 'selinium testing', 'digital marketing', 'python', 'A.I (Artificial Intelligence)', 'V.R (Virtual Reality)',
  'A.R (Augmented Reality)', 'Robots', 'Data Science', 'Big Data and Cloud Computing', 'REACT', 'EXPRESS.JS', 'NODE.JS', 'Automation',
  'MicroServices', 'Blockchain', 'eCommerce', 'Animation', '3-D printing', 'Networking', 'Cloud Computing', 'Hadoop',
  'RPA', ' Network APIs', 'ERP systems', 'Cyber Security'];




@Component({
  selector: 'app-fresher',
  templateUrl: './fresher.component.html',
  styleUrls: ['./fresher.component.css']
})
export class FresherComponent implements OnInit {




  

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : skills.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )


 
  @Input() firstname;
  @Input() lastname;
  @Input() username;
  @Input() password;
  @Input() gender;
  @Input() address;
  @Input() phoneNumber;
  

  

reactiveForm: any=FormGroup;
/*
nestedReactiveForm: any = FormGroup;
*/

public userFile: any=File;
public userFiles: any=FileList;

boards=[{'id':'CBSE','name':'CBSE'},{'id':'ICSE','name':'ICSE'},{'id':'IB','name':'IB'},{'id':'STATEBOARD','name':'STATEBOARD'}]
inter_categories=[{'id':'IPE','name':'IPE'},{'id':'DIP','name':'DIP'}]
gradings=[{'id':1,'name':'scale 10'},{'id':2,'name':'scale 5'},{'id':3,'name':'%marks of 100max'}]


  onSelectFile(event) {
    const file=event.target.files[0];
    this.userFile=file;
  }
  onSelectFileSsc(event) {
    const file=event.target.files[0];
    this.userFile=file;
  }

  onSelectFileIpe(event) {
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
/*
  model: any = {}
  */


  


  constructor(config: NgbTabsetConfig,private fb: FormBuilder,private fresherService:FresherService) {

    config.justify = 'center';
    config.type = 'pills';
   /* 
    this.nestedReactiveForm = this.fb.group({
      graduations: this.fb.array([this.graduations()])
    });
    */
  }
  /*
  graduations(): FormGroup {
    return this.fb.group({
      course: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-z]*'), Validators.minLength(3)])],
      
      speciliazation: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-z]*'), Validators.minLength(2)])],
      university: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-z]*'), Validators.minLength(2)])],
      email: ['', Validators.compose([Validators.required, Validators.pattern('^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$')])],
      passedyear: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(4), Validators.maxLength(4)])],
      marks: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(1), Validators.maxLength(4)])],
      phoneNumber: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-z]*'), Validators.minLength(10), Validators.maxLength(14)])],
      courseType :new FormControl('',Validators.required),
      grading: new FormControl('',[Validators.required]),
      
  
    })
  }
  */

  /*
  addNewForm(): void {
    const control = this.nestedReactiveForm.controls.graduations;
    control.push(this.graduations());
  }

  removeSelectedForm(index: number): void {
    const control = this.nestedReactiveForm.controls.graduations;
    control.removeAt(index);
  }
*/



  ngOnInit() {
    this.reactiveForm=this.fb.group({

      firstName:new FormControl('',[Validators.required,Validators.compose([
        Validators.pattern('[a-zA-z]*'),Validators.minLength(3)
      ])]),

      lastName:new FormControl('',[Validators.required,Validators.compose([
        Validators.pattern('[a-zA-z]*'),Validators.minLength(3)
      ])]),
 
      username:new FormControl('',[Validators.required,Validators.compose([
        Validators.pattern ('^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$')
      ])]),
     

      password:new FormControl('',[Validators.required,Validators.compose([Validators.pattern('[a-zA-z0-9!@#$%^&*()_+]*'),Validators.minLength(6), Validators.maxLength(12)
    ])]),

    gender:new FormControl('',Validators.required),
  
      address:new FormControl('',[Validators.required,Validators.compose([
        Validators.pattern('[a-zA-z]*'),Validators.minLength(20), Validators.maxLength(250)
      ])]),

      phoneNumber:new FormControl('',[Validators.required,Validators.compose([
        Validators.pattern('[0-9]*'),Validators.minLength(10), Validators.maxLength(14)
      ])]),

board: new FormControl('',[Validators.required]),
    

      ssc_percentage: new FormControl('',[Validators.required,Validators.compose([
        Validators.pattern('[0-9%]*'),Validators.minLength(1), Validators.maxLength(3)
      ])]),

      ssc_school:new FormControl('',[Validators.required,Validators.compose([
        Validators.pattern('[a-z .A-z]*'),Validators.minLength(3)
      ])]),
     
      ssc_school_location:new FormControl('',[Validators.required,Validators.compose([
        Validators.pattern('[a-z A-z]*'),Validators.minLength(3)
      ])]),

      ssc_passed_out_year:new FormControl('',[Validators.required,Validators.compose([
        Validators.pattern('[0-9%]*'),Validators.minLength(4), Validators.maxLength(4)
      ])]),

      inter_category: new FormControl('',[Validators.required]),

      inter_percentage:new FormControl('',[Validators.required,Validators.compose([
        Validators.pattern('[0-9%]*'),Validators.minLength(1), Validators.maxLength(3)
      ])]),

      inter_school:new FormControl('',[Validators.required,Validators.compose([
        Validators.pattern('[a-z .A-z]*'),Validators.minLength(3)
      ])]),
     
      inter_school_location:new FormControl('',[Validators.required,Validators.compose([
        Validators.pattern('[a-zA-z]*'),Validators.minLength(3)
      ])]),
      
      inter_passed_out_year:new FormControl('',[Validators.required,Validators.compose([
        Validators.pattern('[0-9%]*'),Validators.minLength(4), Validators.maxLength(4)
      ])]),






      ugCourse: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-z]*'), Validators.minLength(2)])],
      
      ugSpecialization: ['', Validators.compose([Validators.required, Validators.pattern('[a-z A-z]*'), Validators.minLength(2)])],
      university_or_institute: ['', Validators.compose([Validators.required, Validators.pattern('[a-z .A-z]*'), Validators.minLength(2)])],
      courseType :new FormControl('',Validators.required),
      
      passed_out_year: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(4), Validators.maxLength(4)])],
      gradingSystem: new FormControl('',[Validators.required]),
       marks: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(0), Validators.maxLength(2)])],
      //  trainedornot :new FormControl('',Validators.required),
       skills:new FormControl('',Validators.required),
       
      
     })
  }
  registerUser(submitForm:FormGroup) {
    if(submitForm.valid){
      const user=submitForm.value;
      const formData=new FormData();
      formData.append('user',JSON.stringify(user));
     formData.append('file',this.userFile);
      //formData.append('files',this.userFiles);
      this.fresherService.registerFresher(formData).subscribe((response=>{
        console.log(response);
      }))
    }else{
      this.validateFormFields(submitForm);
    }


   /* this.fresherService.registerFresher
      this.firstname,
      this.lastname
    ).subscribe(
      data => {
        alert("data submitted successfully" + data);
        console.log(data);
      }
    );*/


  }

  validateFormFields(submitForm:FormGroup){
    Object.keys(submitForm.controls).forEach(field=>{
      const control=submitForm.get(field);
      if(control instanceof FormControl){
        control.markAsTouched({
          onlySelf:true
        })
      }
    })
  }

}