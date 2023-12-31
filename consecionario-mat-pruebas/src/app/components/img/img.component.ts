import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent {

  @Input() img: string = '';
  @Output() loaded = new EventEmitter<string>();
  imageDefault = './assets/Images/BMW/cosySec(1).jpg'

  constructor(){}
  ngOnInit(): void{}
  imgError(){
    this.img = this.imageDefault;

  }



}
