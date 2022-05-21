# What is this?

To improve the angular application performance we need to implement ngOnDestroy in each and every component and we need to manually make the component variable undefined and call unsubscribe for the subscriptions for Angular application performance improvement. 
Angular-Auto-Unsubscribe does this automatically

# Installation

```
npm i angular-auto-unsubscribe --save

```

# Usage

```
import { AutoUnSubscribe } from 'angular-auto-unsubscribe';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss'],
})
@AutoUnSubscribe()
export class ProjectsListComponent implements OnInit {

  autoUnSubscriptions = new Subscription();
  translateSubscription: Observable<string>;
  constructor(private apiService: ApiService, private translateDataService: TranslateDataService)

  ngOnInit():void{
    // this will get unsubscribed automatically
    this.autoUnSubscriptions.add(this.apiService.getSeverDetail().subscribe(res=> console.log(res)));

    this.translateSubscription = this.translateDataService.translateString(str).subscribe((res) => {
  }

}

```

```autoUnSubscriptions = new Subscription();``` Recommended for component has multiple subscription. 

```translateSubscription: Observable<string>;```  Recommended for component with one or two subscriptions.
