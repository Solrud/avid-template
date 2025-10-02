import {Injectable, OnDestroy} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OnDestroySubject extends Subject<any> implements OnDestroy{
  ngOnDestroy(): void {
    this.next(null);
    this.complete();
  }
}

/* * Базовый сервис для управления подписками, который можно использовать во всех компонентах
   * Использовать этот сервис в компоненте:

  @Component({
    selector: 'app-component',
    providers: [UnsubscribeService] !!! ПРОВАЙД сервиса прямо в компоненте!!!
  })
  export class AppComponent implements OnInit {

    readonly private unsubscribe$ = inject(UnsubscribeService) !!! инжектить также в этом компоненте

    ngOnInit() {
      this.http.get('/api/data')
        .pipe(takeUntil(this.unsubscribe$))  !!! функция takeUntil(this.unsubscribe$)
        .subscribe( => {});

      this.websocketService.connect()
        .pipe(takeUntil(this.unsubscribe$))  !!! функция takeUntil(this.unsubscribe$)
        .subscribe( => {});
    }
  }

?  В итоге жизненный хук модифицированного экземпляра класса от Subject "синхронизируется"
?  с компонентным жизненным циклом и при ngOnDestroy сам отпишет нужные подписки

 */
