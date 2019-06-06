import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';
import { ExperienceService } from '../experience.service';

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
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {



  public model: any;

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : skills.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )


 
  @Input() firstName;
  @Input() lastName;
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
    const file=event.target.files[0];
    this.userFiles=file;
  }
  onSelectFileSkills(event) {
    const file=event.target.files[0];
    this.userFile=file;
  }

  onSelectFileofferletter(event) {
    const file=event.target.files[0];
    this.userFiles=file;
  }

  onSelectFileappoinment_letter(event) {
    const file=event.target.files[0];
    this.userFiles=file;
  }

  onSelectFilepayslips(event) {
    const file=event.target.files[0];
    this.userFiles=file;
  }



/*
  model: any = {}
  */


  


  constructor(config: NgbTabsetConfig,private fb: FormBuilder,private experienceService:ExperienceService) {
   
    config.justify = 'center';
    config.type = 'pills';

    /*
    this.nestedReactiveForm = this.fb.group({
      companydetails: this.fb.array([this.companydetails()])
    });
    */
    
  }

  /*
  companydetails(): FormGroup {
    return this.fb.group({
     
      companyname: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-z]*'), Validators.minLength(2)])],
      designation: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-z]*'), Validators.minLength(2)])],
      responsibility: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-z]*'), Validators.minLength(2)])],
      rcompanyname: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-z]*'), Validators.minLength(2)])],
      rdesignation: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-z]*'), Validators.minLength(2)])],
      rresponsibility: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-z]*'), Validators.minLength(2)])],

    })
  }
  
 
  addNewForm(): void {
    const control = this.nestedReactiveForm.controls.companydetails;
    control.push(this.companydetails());
  }

  removeSelectedForm(index: number): void {
    const control = this.nestedReactiveForm.controls.companydetails;
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
        Validators.pattern('[a-zA-z]*'),Validators.minLength(10),Validators.maxLength(100)
      ])]),

      phoneNumber:new FormControl('',[Validators.required,Validators.compose([
        Validators.pattern('[0-9]*'),Validators.minLength(10), Validators.maxLength(14)
      ])]),

       board: new FormControl('',[Validators.required]),
    
      ssc_percentage:new FormControl('',[Validators.required,Validators.compose([
        Validators.pattern('[0-9%]*'),Validators.minLength(0), Validators.maxLength(3)
      ])]),

      ssc_school:new FormControl('',[Validators.required,Validators.compose([
        Validators.pattern('[a-z .A-z]*'),Validators.minLength(3)
      ])]),
      
      ssc_school_location:new FormControl('',[Validators.required,Validators.compose([
        Validators.pattern('[a-zA-z]*'),Validators.minLength(3)
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




      ugCourse: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-z]*'), Validators.minLength(3)])],
    
      ugSpecialization: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-z]*'), Validators.minLength(2)])],
      university_or_institute: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-z]*'), Validators.minLength(2)])],
      courseType :new FormControl('',Validators.required),
      
      passed_out_year: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(4), Validators.maxLength(4)])],
      gradingSystem: new FormControl('',[Validators.required]),
       marks: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(0), Validators.maxLength(4)])],
   
       skills:new FormControl('',Validators.required),
       
    
     
total_experience_in_years: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(0), Validators.maxLength(2)])],

total_experience_in_months: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(0), Validators.maxLength(2)])],

relevant_experience_in_years: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(0), Validators.maxLength(2)])],
relevant_experience_in_months: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(0), Validators.maxLength(5)])],
relevant_skills: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-z0-9]*'), Validators.minLength(2)])],

current_ctc: ['', Validators.compose([Validators.required, Validators.pattern('[0-9kK]*'), Validators.minLength(0), Validators.maxLength(3)])],
noticePeriod_in_days: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(1), Validators.maxLength(2)])],


companies:this.fb.array([
  this.addCompanies()
]),


/*
relevant_skills_companies:this.fb.array([
  this.addRelevantCompanies()
])
*/
});
  
  }


  addCompanies():FormGroup{
    return this.fb.group({
      companyName:['',Validators.required],
      designation:['',Validators.required],
      duration_from:['',Validators.required],
      duration_to:['',Validators.required],
      responsibility:['',Validators.required]
    })
  }

  addCompanyButtonClick():void{
  (<FormArray>this.reactiveForm.get('companies')).push(this.addCompanies());
  }

  removeCompany(companyIndex:number){
   (<FormArray>this.reactiveForm.get('companies')).removeAt(companyIndex);
  }



/*----------------------
  addRelevantCompanies():FormGroup{
    return this.fb.group({
      companyName:['',Validators.required],
      designation:['',Validators.required],
      duration_from:['',Validators.required],
      duration_to:['',Validators.required],
      responsibility:['',Validators.required]
    })
  }

  addRelevantCompanyButtonClick():void{
  (<FormArray>this.reactiveForm.get('relevant_skills_companies')).push(this.addRelevantCompanies());
  }

  removeRelevantCompany(RelevantcompanyIndex:number){
   (<FormArray>this.reactiveForm.get('relevant_skills_companies')).removeAt(RelevantcompanyIndex);
  }

------------------------------*/
  
  

  registerUser(submitForm:FormGroup) {
    if(submitForm.valid){
      const user=submitForm.value;
      const formData=new FormData();
      formData.append('user',JSON.stringify(user));
     formData.append('file',this.userFile);
      //formData.append('files',this.userFiles);
      this.experienceService.registerFresher(formData).subscribe((response=>{
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