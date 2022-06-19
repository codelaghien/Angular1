import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HelperService {
  constructor() {}
  public name = 'Huy';

  public hello(): string {
    return 'Hello ' + this.name;
  }
}
