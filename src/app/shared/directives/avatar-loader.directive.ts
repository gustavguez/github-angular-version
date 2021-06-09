import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Directive({
  selector: '[appAvatarLoader]'
})
export class AvatarLoaderDirective implements OnInit {
  @Input('appAvatarLoader') name: string | undefined = '';

  constructor(
    private hostElement: ElementRef
  ){}

  ngOnInit(){
    //Load image logic
    const image: any = new Image();
    image.onload = () => {
      //Load image src to host element 
      this.hostElement.nativeElement.style.backgroundImage = 'url(' + image.src + ')';
    };
    image.src = `${environment.avatarsGeneratorUrl}?name=${this.name}`;
  }

}
