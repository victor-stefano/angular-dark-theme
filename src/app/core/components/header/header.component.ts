import { Component } from '@angular/core';

//Enums
import { ETheme } from '../../enums/ETheme.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public icon: string = ETheme.ICON_MOON;
  public altTextTheme:string = ETheme.TEXT_DARK;

  public toggleTheme(){
    const theme = document.body.classList.toggle('dark-theme')
    if(theme){
      this.icon = ETheme.ICON_SUM;
      this.altTextTheme = ETheme.TEXT_LIGHT;
    } else {
      this.icon = ETheme.ICON_MOON;
      this.altTextTheme = ETheme.TEXT_DARK;
    }
  }
}
