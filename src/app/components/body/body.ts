import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {OpenDialog} from '../../shared/open-dialog/open-dialog';
import {DialogMode} from '../../shared/open-dialog/dialog';
import {ToastS} from '../../shared/toast/service/toast-s.service';
import {ToastC, ToastTextC} from '../../shared/toast/config/toast.class';

@Component({
  selector: 'app-body',
  imports: [],
  templateUrl: './body.html',
  styleUrl: './body.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Body {

  readonly openDialog = inject(OpenDialog);
  readonly toast = inject(ToastS);


  test(){
    this.toast.showPositiveFixed(new ToastTextC('Тостер выпрыгнул!'))
  }

}
