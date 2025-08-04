import {ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, input, OnInit, signal} from '@angular/core';
import {NgbDropdown, NgbDropdownItem, NgbDropdownMenu, NgbDropdownToggle} from '@ng-bootstrap/ng-bootstrap';
import {TranslatePipe} from '@ngx-translate/core';
import { Theme } from '../../shared/theme/theme.enum';
import {Role, ROLE_UNDEFINED, User, USER_UNDEFINED} from '../../shared/auth/auth-config';
import {Subscription} from 'rxjs';
import {Event} from '../../shared/event/event';
import {ThemeService} from '../../shared/theme/theme.service';
import {OpenDialog} from '../../shared/open-dialog/open-dialog';

@Component({
  selector: 'app-header',
  imports: [
    NgbDropdown,
    NgbDropdownMenu,
    NgbDropdownToggle,
    TranslatePipe,
    NgbDropdownItem
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Header implements OnInit{
  private hookList: (Subscription | undefined)[] = [];
  readonly currentUser = signal<User>(USER_UNDEFINED);
  readonly currentRole = signal<Role | null>(ROLE_UNDEFINED);
  readonly currentTheme = signal<Theme | null>(null);
  readonly showNewsAttention = signal<boolean>(false);

  readonly currentAppRoleList = signal<Role[] | null>(null);

  private readonly event = inject(Event);
  private readonly theme = inject(ThemeService);
  private readonly openDialog = inject(OpenDialog);

  protected readonly Theme = Theme;

  ngOnInit() {
    this._getCurrentUser();
    this._getRole();
    this._getAppTheme();
    this._getRoleList();
  }

  //подписка на получение пользователя
  _getCurrentUser() {
    const hookUser = this.event.getUser()
      .subscribe({
        next: currentUser => {
          this.currentUser.set(currentUser);
        }
      });
    this.hookList.push(hookUser);
  }

  _getAppTheme(){
    const hookTheme = this.event.getAppTheme()
      .subscribe({
        next: currentTheme => {
          if (currentTheme) this.currentTheme.set(currentTheme);
        }
      });
    this.hookList.push(hookTheme);
  }

  //подписка на смену роли
  _getRole() {
    const hookRole = this.event.getRole()
      .subscribe({
        next: currentRole => {
          this.currentRole.set(currentRole);
          //todo проверить что изначально устанавливается текущую роль из куков или по умолчанию а не ROLE_UNDEFINED
          // console.log(this.currentRole());
        }
      });
    this.hookList.push(hookRole);
  }

  _getRoleList(): void {
    const hookRoleList = this.event.getRoleList()
      .subscribe({
        next: roleList => {
          if (roleList) this.currentAppRoleList.set(roleList);
        }
      })

    this.hookList.push(hookRoleList);
  }

  //получение названия роли
  getRoleViewName(role: Role): string {
    const viewName = role.viewName.split(':');
    return viewName[viewName.length-1];
  }

  _changeAppVersion(){

  }

  //выбор роли из списка
  onClickSelectRole(event: any): void {
    const role: Role | undefined = this.currentAppRoleList()?.find((role) => role.name === event.target.value);
    if (role instanceof Role)
      this.event.setRole(role)
  }

  onClickOpenNewsDialog(){
    this.openDialog.openNews();
  }

  onClickToggleTheme(): void {
    console.log('this.ct() = ' + this.currentTheme())
    const newTheme = this.currentTheme() === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
    console.log('new theme = ' + newTheme)
    this.event.setAppTheme(newTheme);
  }

  onClickSettings(){
    this.openDialog.openSettings();
  }

  onClickOpenDevelopersInfoDialog(){
    this.openDialog.openDevelopers();
  }

  //смена пользователя
  onClickChangeUserOrLogout() {

  }
}
