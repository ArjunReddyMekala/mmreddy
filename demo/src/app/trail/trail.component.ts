import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { TokenStorageService } from '../auth/token-storage.service';

@Component({
  selector: 'app-trail',
  templateUrl: './trail.component.html',
  styleUrls: ['./trail.component.css']
})
export class TrailComponent implements OnInit {
  isLoggedIn = false;
  info:any;
  
  constructor(private tokenStorage: TokenStorageService,private authService:AuthService) {
   
   }

  ngOnInit() {
    this.info = {
      token: this.tokenStorage.getToken(),
      username: this.tokenStorage.getUsername(),
    
    };
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
    }
}

logout(){
  this.tokenStorage.signOut();
  window.location.reload();
}

}