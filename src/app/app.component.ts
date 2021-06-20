import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { map, filter } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TEstApp';
  public header?: string;
  constructor(private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.test();
  }

  test(): void {
    this.router
      .events.pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => {
          const child = this.activatedRoute.firstChild;
          if (child && child.snapshot.data['header']) {
            return child.snapshot.data['header'];
          }
          return '';
        }
        )).subscribe((ttl: string) => {
          this.header = ttl;
        });;
  }

}



