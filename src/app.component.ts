import { Component, forwardRef, Inject, Injectable, Injector } from "@angular/core";

@Component({ selector: 'app-root', template: 'Hello World' })
export class AppComponent {
  constructor(injector: Injector, @Inject(forwardRef(() => AppService)) private readonly appService: AppService) {
    console.log(appService);
    injector.get(AppService);
  }
}

@Injectable({ providedIn: 'root' })
export class AppService { }
