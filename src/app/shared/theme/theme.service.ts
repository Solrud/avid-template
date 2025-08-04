import {Injectable} from '@angular/core';
import {Theme} from './theme.enum';

@Injectable({
  providedIn: 'root'
})
export class ThemeService{
  private currentTheme: Theme | null = null;

  toggleTheme(){
    if (this.currentTheme){
      document.body.classList.remove(this.currentTheme + '-theme');
    }
    this.currentTheme = this.currentTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
    document.body.classList.add(this.currentTheme + '-theme');
  }

  changeTheme(theme: Theme){
    if (this.currentTheme){
      document.body.classList.remove(this.currentTheme + '-theme');
    }

    this.currentTheme = theme;
    document.body.classList.add(this.currentTheme + '-theme');
  }
}
