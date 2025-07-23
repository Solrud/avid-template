import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {Header} from './components/header/header';
import {Footer} from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class App {

  // ToDo БАЗОВЫЙ КОНСТРУКТОР ПРОЕКТОВ НА ANGULAR
  //  * Библиотеки базовые:
  //    - @ng-bootstrap/ng-bootstrap
  //    - bootstrap
  //    - bootstrap-icons
  //    - @ngx-translate/core
  //    - ngx-translate-http-loader
  //  * Environment:
  //    - environment / environment.testbazis-auth / environment/testbazis / environment/bazis2-auth / environment/bazis2
  //    - Скрипты в package.json под билды env. (npm run {script})
  //    - Конфигурации билдов в angular.json для сборки под разные env.
  //  * SSL:
  //    - .cer, .key у bazis / localhost / testbazis
  //  * Компоненты базовые:
  //    - Компонент Header -> юзер/роли, ddm меню
  //    ! - Компонент Main   -> через RouterOutlet ->
  //        -- Routing базовый ''[guard], 'access-denied', '**'
  //    - Компонент Footer
  //    - Компонент AccessDenied (по структуре находится в shared/auth)
  //  * DATA API ===> Model/DTO/CRUD/Search-implements Services:
  //    ! - Реализация ООП API моделей
  //        -- IBase(DTO/Search/...)        -> Интерфейс пустой, для типизации в методах, чтобы понять какой тип модели используется
  //        -- ABase(DTO/Search/...)        -> Абстрактный класс с свойствами повторяющимися в дочерних классах
  //        -- impl./(name)(DTO/Search/...) -> Класс расширяется от ABase(DTO/Search/...), создает свои свойства
  //    ! - Реализация ООП API сервисов
  //        -- ABase                        -> Класс базовый для хранения baseUrl, (httpClient в ед. виде)   p.s. Расширяется в A(crud/search/...)
  //        -- I(crud/search/...)           -> Интерфейс каркаса методов для сервисов   p.s. Реализуется в A(crud/search/...)
  //        -- A(crud/search/...)           -> Абстрактный класс с методами реализующий interface I(...), расширяемый ABase.
  //        -- (CRUD/Search/...)Service     -> Сервис расширяемый от A(crud/search/...) но передающий в его super конструктор токен для url
  //        -- implements./(name)Service    -> Сервис реализующий все interface I(...), инжектит (CRUD/Search/etc..)Service и создает методы на их основе вызывая в них методы сервисов
  //  * Стили/Темы:
  //    - Константы Scss/ Тема Scss
  //    - Theme Service
  //    - Style.scss переопределения
  //  * Авторизация:
  //    - AuthService
  //    - Guard
  //    - Interceptor (withCredentials)
  //    - Page 403
  //    - Выдача ролей в main / next в EventService
  //  * LocalStorage:
  //    - Event Service
  //    - В Main.ts (в Smart компоненте) инициализация/присвоение значений из/в LocalStorage
  //  * Shared:
  //    - EventService => RxJs Observables
  //    - ...Остальные сервисы/ Работы с сущностями/ data и тд.
  //  * Модальные окна:
  //    - Компоненты диалогов:
  //      -- Developers  -> Инфо о разработчиках/Отделе
  //      -- Information -> Информационное окно с принятием решения
  //      -- Settings    -> Настройки сущностей
  //    - OpenDialog Service
  //  * Спиннер:
  //    - Interceptor счетчик запросов
  //    - Event Service
  //    - Директива спиннера [appToShowSpinner]
  //    - Компонент спиннера
  //  * Всплывающие уведомления:
  //    - Компонент Toast
  //    - Service Toast
  //  * i18n:
  //    - Библиотеки: @ngx-translate/core, ngx-translate-http-loader (не multi, т.к. используем 1 файл).
  //    - ./18n/ru.json
  //    - ./shared/httpLoaferFactory() функция
  //    - провайдинг в app.config()
  //  * Важные внесения изменений:
  //    - В angular.json:
  //      | ..schematics: @schematics/angular:component: "changeDetection": "OnPush".. |
  //      | ..assets: "input": "public","output": "public" |
  //      | в configurations у budgets если превышает норму budgets: maximumWarning, maximumError увеличить в размерах хранилище |
  //      | Прописать в configurations разные конфиги сборок под environments |
  //      | В serve: options: ssl: true, sslCert и sslKey пути до SSL
  //    - В package.json:
  //      Написать скрипты scripts:
  //       "build": "ng build --configuration bazis2 --base-href=/APP-NAME/",
  //       "build-auth": "ng build --configuration bazis2-auth --base-href=/APP-NAME/",
  //       "build-test": "ng build --configuration testbazis --base-href=/APP-NAME/",
  //       "build-test-auth": "ng build --configuration testbazis-auth --base-href=/APP-NAME/",
  //       "t-update": "ngx-translate-extract --input ./src --output public/i18n/ru.json public/i18n/en.json --sort --format namespaced-json",
  //      Запускать скрипты через: npm run {script name}
  //  * Прочее:
  //    - Изменить favicon.ico
  //    - Изменить title в index.html под название ПО
  //
  //  * Структура примерная:
  //?  ./src
  //?    |-- public
  //?    |   |-- files
  //?    |   |-- i18n
  //?    |   |-- images
  //?    |   |-- scss
  //?    |   `-- ssl
  //?    |-- app
  //?    |   |-- components
  //?    |   |-- dialogs
  //?    |   |-- pages
  //?    |   `-- shared
  //?    |         |-- data
  //?    |         |   |-- model
  //?    |         |   |-- service
  //?    |         |   `-- url
  //?    `-- environments

}
