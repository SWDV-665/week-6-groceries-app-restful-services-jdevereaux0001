import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { SocialSharing} from '@ionic-native/social-sharing';
import { Tab1PageRoutingModule } from './tab1-routing.module';
import { GroceriesServiceService } from '../groceries-service.service';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule
  ],
  declarations: [Tab1Page],
  providers: [GroceriesServiceService],
  
})
export class Tab1PageModule {}
