import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { AuthService } from '../../shared/services/auth.service';
import { FirebaseService } from '../../shared/services/firebase.service';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { NgParticlesService, NgxParticlesModule } from '@tsparticles/angular';
import { Container, Engine, MoveDirection, OutMode } from '@tsparticles/engine';
import { loadSnowPreset } from '@tsparticles/preset-snow';
import { loadFull } from 'tsparticles';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, FormsModule, ReactiveFormsModule, AngularFireModule, AngularFireDatabaseModule, AngularFireAuthModule, AngularFirestoreModule, ToastrModule, NgxParticlesModule],
  providers: [FirebaseService, { provide: ToastrService, useClass: ToastrService }],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  id = 'tsparticles';

  @ViewChild('particleJS')
  particleJs: any;
  public angularLoginForm!: FormGroup;
  public firebaseLoginForm!: FormGroup;
  public error: string = '';
  public errorMessage: string = '';
  public _error = { name: '', message: '' };
  public active = 'Angular';
  public visibilityMap: Record<string, boolean> = {
    Angular: false,
    Firebase: false
  };
  public iconMap: Record<string, string> = {
    Angular: 'fe fe-eye-off',
    Firebase: 'fe fe-eye-off'
  };

  firestoreModule: any;
  databaseModule: any;
  authModule: any;

  disabled = '';
  constructor(
    @Inject(DOCUMENT) private document: Document, private elementRef: ElementRef,
    private sanitizer: DomSanitizer,
    public authservice: AuthService,
    private router: Router,
    private formBuilder: FormBuilder,
    private renderer: Renderer2,
    private firebaseService: FirebaseService,
    private toastr: ToastrService,
    private readonly ngParticlesService: NgParticlesService
  ) {
    document.body.classList.add('authentication-background');
  }

    particlesOptions:any = {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "area": 800
        }
      },
      "color": {
        "value": "#d1d9e0"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#d1d9e0"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.1,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 2,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "links": {
        "enable": true,
        "distance": 150,
        "color": "#d1d9e0",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 2,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detectsOn": "canvas",
      "events": {
        "onHover": {
          "enable": true,
          "mode": "grab"
        },
        "onClick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 150,
          "links": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "detectRetina": true
  }
  ngOnInit(): void {
    this.ngParticlesService.init(async (engine: Engine) => {
      await loadSnowPreset(engine);
      await loadFull(engine);
    });

    this.angularLoginForm = this.formBuilder.group({
      username: ['spruko@admin.com', [Validators.required, Validators.email]],
      password: ['sprukoadmin', Validators.required]
    });

    this.firebaseLoginForm = this.formBuilder.group({
      username: ['spruko@admin.com', [Validators.required, Validators.email]],
      password: ['sprukoadmin', Validators.required]
    });

    this.firestoreModule = this.firebaseService.getFirestore();
    this.databaseModule = this.firebaseService.getDatabase();
    this.authModule = this.firebaseService.getAuth();
  }

  ngOnDestroy(): void {
    document.body.classList.remove('authentication-background');
  }

  toggleVisibility(tab: string): void {
    this.visibilityMap[tab] = !this.visibilityMap[tab];
    this.iconMap[tab] = this.visibilityMap[tab] ? 'fe fe-eye' : 'fe fe-eye-off';
  }

  clearErrorMessage(): void {
    this.errorMessage = '';
    this._error = { name: '', message: '' };
  }

  validateForm(email: string, password: string): boolean {
    if (!email) {
      this.errorMessage = 'Please enter email ID';
      return false;
    }
    if (!password) {
      this.errorMessage = 'Please enter password';
      return false;
    }
    if (password.length < 6) {
      this.errorMessage = 'Password should be at least 6 characters';
      return false;
    }
    return true;
  }

  login(): void {
    this.clearErrorMessage();
    const email = this.firebaseLoginForm.controls['username'].value;
    const password = this.firebaseLoginForm.controls['password'].value;

    if (this.validateForm(email, password)) {
      this.authservice.loginWithEmail(email, password)
        .then(() => {
          this.router.navigate(['/dashboards/sales']);
          this.toastr.success('Login successful', 'zynix', {
            timeOut: 3000,
            positionClass: 'toast-top-right'
          });
        })
        .catch((_error: any) => {
          this._error = _error;
          this.router.navigate(['/']);
          this.toastr.error('Invalid details', 'zynix', {
            timeOut: 3000,
            positionClass: 'toast-top-right'
          });
        });

    } else {
      this.toastr.error('Invalid details', 'zynix', {
        timeOut: 3000,
        positionClass: 'toast-top-right'
      });
    }
  }

  Submit(): void {
    const { username, password } = this.angularLoginForm.controls;
    if (username.value === 'spruko@admin.com' && password.value === 'sprukoadmin') {
      this.router.navigate(['/dashboards/sales']);
      this.toastr.success('Login successful', 'zynix', {
        timeOut: 3000,
        positionClass: 'toast-top-right'
      });
    } else {
      this.toastr.error('Invalid details', 'zynix', {
        timeOut: 3000,
        positionClass: 'toast-top-right'
      });
    }
  }

}


