import { Component, OnInit, OnDestroy, ElementRef } from '@angular/core';

declare var createjs: any; // Declarar createjs como una variable global
declare var TweenMax: any; // Declarar TweenMax como una variable global
declare var Power1: any; // Declarar Power1 como una variable global
declare var Cubic: any; // Declarar Cubic como una variable global

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponentimplements implements OnInit, OnDestroy {

  private totalWidth: number = window.innerWidth; 
  private totalHeight: number = window.innerHeight; 

  private particleSettings = [
    {
      id: "small",
      num: 300,
      fromX: 0,
      toX: this.totalWidth,
      ballwidth: 3,
      alphamax: 0.4,
      areaHeight: 0.5,
      color: "#0cdbf3",
      fill: false
    },
    {
      id: "medium",
      num: 100,
      fromX: 0,
      toX: this.totalWidth,
      ballwidth: 8,
      alphamax: 0.3,
      areaHeight: 1,
      color: "#6fd2f3",
      fill: true
    },
    {
      id: "large",
      num: 10,
      fromX: 0,
      toX: this.totalWidth,
      ballwidth: 15,
      alphamax: 0.2,
      areaHeight: 1,
      color: "#93e9f3",
      fill: true
    }
  ];

  private stage: any = null;
  private particleArray: any[] = []; 
  private lights: any[] = [
    {
      ellipseWidth: 400,
      ellipseHeight: 100,
      alpha: 0.6,
      offsetX: 0,
      offsetY: 0,
      color: "#ff000020" // ff000020  131a2400
    },
    {
      ellipseWidth: 350,
      ellipseHeight: 250,
      alpha: 0.3,
      offsetX: -50,
      offsetY: 0,
      color: "#131a2400"
    },
    {
      ellipseWidth: 100,
      ellipseHeight: 80,
      alpha: 0.2,
      offsetX: 80,
      offsetY: -50,
      color: "#131a2400"
    }
  ];

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.initialize();

  }

  ngOnDestroy(): void {
    if (this.stage) {
      createjs.Ticker.removeEventListener('tick', this.updateCanvas);
      window.removeEventListener('resize', this.resizeCanvas);
    }
  }
  

  private initialize(): void {
    const canvas = this.elementRef.nativeElement.querySelector('canvas');
    canvas.id = 'projector';

    this.stage = new createjs.Stage(canvas);

    createjs.Ticker.addEventListener('tick', this.updateCanvas.bind(this)); 

    canvas.width = this.totalWidth;
    canvas.height = this.totalHeight;

    
    window.addEventListener('resize', () => {
      this.resizeCanvas();
      this.resizeParticles(); 
    }); 

    this.drawBgLight();
    this.drawParticles();
  }

  private updateCanvas(): void {
    if (this.stage) {
      this.stage.update();
    }
  }

  private resizeCanvas(): void {
    const canvas = this.elementRef.nativeElement.querySelector('canvas');
    if (canvas) {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;

      if (this.stage) {
        this.stage.update();
      }
    }
  }

  private drawBgLight(): void {
    let light;
    let blurFilter;
    for (let i = 0, len = this.lights.length; i < len; i++) {
      light = new createjs.Shape();
      light.graphics
        .beginFill(this.lights[i].color)
        .drawEllipse(
          0,
          0,
          this.lights[i].ellipseWidth,
          this.lights[i].ellipseHeight
        );
      light.regX = this.lights[i].ellipseWidth / 2;
      light.regY = this.lights[i].ellipseHeight / 2;
      light.y = light.initY = window.innerHeight / 2 + this.lights[i].offsetY;
      light.x = light.initX = window.innerWidth / 2 + this.lights[i].offsetX;

      blurFilter = new createjs.BlurFilter(
        this.lights[i].ellipseWidth,
        this.lights[i].ellipseHeight,
        1
      );
      let bounds = blurFilter.getBounds();
      light.filters = [blurFilter];
      light.cache(
        bounds.x - this.lights[i].ellipseWidth / 2,
        bounds.y - this.lights[i].ellipseHeight / 2,
        bounds.width * 2,
        bounds.height * 2
      );
      light.alpha = this.lights[i].alpha;

      light.compositeOperation = "screen";
      if (this.stage) {
        this.stage.addChildAt(light, 0);
      }

      this.lights[i].elem = light;
    }

    TweenMax.fromTo(
      this.lights[0].elem,
      10,
      {
        scaleX: 1.5,
        x: this.lights[0].elem.initX,
        y: this.lights[0].elem.initY
      },
      {
        yoyo: true,
        repeat: -1,
        ease: Power1.easeInOut,
        scaleX: 2,
        scaleY: 0.7
      }
    );
    TweenMax.fromTo(
      this.lights[1].elem,
      12,
      {
        x: this.lights[1].elem.initX,
        y: this.lights[1].elem.initY
      },
      {
        delay: 5,
        yoyo: true,
        repeat: -1,
        ease: Power1.easeInOut,
        scaleY: 2,
        scaleX: 2,
        y: window.innerHeight / 2 - 50,
        x: window.innerWidth / 2 + 100
      }
    );
    TweenMax.fromTo(
      this.lights[2].elem,
      8,
      {
        x: this.lights[2].elem.initX,
        y: this.lights[2].elem.initY
      },
      {
        delay: 2,
        yoyo: true,
        repeat: -1,
        ease: Power1.easeInOut,
        scaleY: 1.5,
        scaleX: 1.5,
        y: window.innerHeight / 2,
        x: window.innerWidth / 2 - 200
      }
    );
  }

  private drawParticles(): void {
    if (!this.stage) return;

    for (let i = 0, len = this.particleSettings.length; i < len; i++) {
      const ball = this.particleSettings[i];
      let circle;
      for (let s = 0; s < ball.num; s++) {
        circle = new createjs.Shape();
        if (ball.fill) {
          circle.graphics
            .beginFill(ball.color)
            .drawCircle(0, 0, ball.ballwidth);
          let blurFilter = new createjs.BlurFilter(
            ball.ballwidth / 2,
            ball.ballwidth / 2,
            1
          );
          circle.filters = [blurFilter];
          let bounds = blurFilter.getBounds();
          circle.cache(
            -50 + bounds.x,
            -50 + bounds.y,
            100 + bounds.width,
            100 + bounds.height
          );
        } else {
          circle.graphics
            .beginStroke(ball.color)
            .setStrokeStyle(1)
            .drawCircle(0, 0, ball.ballwidth);
        }

        circle.alpha = this.range(0, 0.1);
        circle.alphaMax = ball.alphamax;
        circle.distance = ball.ballwidth * 2;
        circle.ballwidth = ball.ballwidth;
        circle.flag = ball.id;
        this.applySettings(
          circle,
          ball.fromX,
          ball.toX,
          ball.areaHeight
        );
        circle.speed = this.range(2, 10);
        circle.y = circle.initY;
        circle.x = circle.initX;
        circle.scaleX = circle.scaleY = this.range(0.3, 1);

        this.stage.addChild(circle);

        this.animateBall(circle);

        this.particleArray.push(circle);
      }
    }
  }

  private resizeParticles(): void {
    const totalWidth = window.innerWidth;
    const totalHeight = window.innerHeight;

    if (!this.stage) return;

    for (let i = 0, length = this.particleArray.length; i < length; i++) {
      this.applySettings(
        this.particleArray[i],
        0,
        totalWidth,
        this.particleArray[i].areaHeight
      );
    }

    for (let j = 0, len = this.lights.length; j < len; j++) {
      this.lights[j].elem.initY = totalHeight / 2 + this.lights[j].offsetY;
      this.lights[j].elem.initX = totalWidth / 2 + this.lights[j].offsetX;
      TweenMax.to(this.lights[j].elem, 0.5, {
        x: this.lights[j].elem.initX,
        y: this.lights[j].elem.initY
      });
    }
  }

  private applySettings(circle: any, positionX: number, totalWidth: number, areaHeight: number): void {
    circle.speed = this.range(1, 3);
    circle.initY = this.weightedRange(
      0,
      window.innerHeight,
      1,
      [
        (window.innerHeight * (2 - areaHeight / 2)) / 4,
        (window.innerHeight * (2 + areaHeight / 2)) / 4
      ],
      0.8
    );
    circle.initX = this.weightedRange(
      positionX,
      totalWidth,
      1,
      [
        positionX + (totalWidth - positionX) / 4,
        positionX + ((totalWidth - positionX) * 3) / 4
      ],
      0.6
    );
  }

  private animateBall(ball: any): void {
    const scale = this.range(0.3, 1);
    const xpos = this.range(ball.initX - ball.distance, ball.initX + ball.distance);
    const ypos = this.range(ball.initY - ball.distance, ball.initY + ball.distance);
    const speed = ball.speed;
    TweenMax.to(ball, speed, {
      scaleX: scale,
      scaleY: scale,
      x: xpos,
      y: ypos,
      onComplete: this.animateBall.bind(this, ball), // Vincular el contexto correcto
      ease: Cubic.easeInOut
    });
    TweenMax.to(ball, speed / 2, {
      alpha: this.range(0.1, ball.alphaMax),
      onComplete: this.fadeout.bind(this, ball, speed), // Vincular el contexto correcto
      ease: Cubic.easeInOut
    });
  }

  private fadeout(ball: any, speed: number): void {
    ball.speed = this.range(2, 10);
    TweenMax.to(ball, speed / 2, { alpha: 0 });
  }

  private weightedRange(to: number, from: number, decimalPlaces: number, weightedRange: number[], weightStrength: number): number {
    if (typeof from === "undefined" || from === null) {
      from = 0;
    }
    if (typeof decimalPlaces === "undefined" || decimalPlaces === null) {
      decimalPlaces = 0;
    }
    if (typeof weightedRange === "undefined" || weightedRange === null) {
      weightedRange = [0, 0];
    }
    if (typeof weightStrength === "undefined" || weightStrength === null) {
      weightStrength = 0;
    }

    let ret;
    if (to == from) {
      return to;
    }

    if (weightedRange && Math.random() <= weightStrength) {
      ret = this.round(
        Math.random() * (weightedRange[1] - weightedRange[0]) + weightedRange[0],
        decimalPlaces
      );
    } else {
      ret = this.round(Math.random() * (to - from) + from, decimalPlaces);
    }
    return ret;
  }

  private round(num: number, precision: number): number {
    const decimal = Math.pow(10, precision);
    return Math.round(decimal * num) / decimal;
  }

  private range(min: number, max: number): number {
    return min + (max - min) * Math.random();
  }
}
