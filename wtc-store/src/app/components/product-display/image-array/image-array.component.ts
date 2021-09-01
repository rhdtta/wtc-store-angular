import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'ws-image-array',
  templateUrl: './image-array.component.html',
  styleUrls: ['./image-array.component.css']
})
export class ImageArrayComponent implements OnInit {
  currentNum: number = 1;
  randomArray: Array<number> = [];
  @ViewChildren("5") imgList: QueryList<ElementRef> = new QueryList;
  
  constructor() { }

  ngOnInit(): void {
    for(let i=0; i<5; i++){
      this.randomArray.push(Math.floor(Math.random()*5 + 1));
    }
  }

  onClick(n: number) {
    this.currentNum = n;
    console.log(this.imgList);
    console.log(n);
    this.imgList.forEach(x => {
      // if(x.nativeElement.innerText == this.currentNum){
      //   x.nativeElement.classList.add("active")
      // }
      // else{
      //   x.nativeElement.classList.remove("active")
      // }
      console.log(x)
    });
  }

}
