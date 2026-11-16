import { Component, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgParticlesService, NgxParticlesModule } from "@tsparticles/angular";
import { Container, Engine, MoveDirection, OutMode } from '@tsparticles/engine';
import { loadFull } from 'tsparticles';
import { loadSnowPreset } from '@tsparticles/preset-snow';

@Component({
  selector: 'app-error404',
  standalone: true,
  imports: [RouterModule,NgxParticlesModule ],
  templateUrl: './error404.html',
  styleUrl: './error404.scss'
})
export class Error404 {
  id = 'tsparticles';
  @ViewChild('particleJS') particleJs: any;
  constructor(private readonly ngParticlesService: NgParticlesService){}

    particlesOptions:any = {
    background: {
      color: {
        value: 'none',
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "attract",
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#ffffff",
      },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      move: {
        direction: MoveDirection.none,
        enable: true,
        outModes: {
          default: OutMode.bounce,
        },
        random: false,
        speed: 1,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 80,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 1 },
      },
    },
    detectRetina: true,
  };

  ngOnInit(): void {
    this.ngParticlesService.init(async (engine: Engine) => {
      await loadSnowPreset(engine); // Load the snow preset
      await loadFull(engine); // Load core features (optional, depending on needs)
    });
  }

  particlesLoaded(container: Container): void {

}
}


