import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header/header.component';
import { RelationshipIncomeComponent } from './pages/relationship-income/relationship-income.component';
import { DealsComponent } from './pages/deals/deals.component';
import { AccessComponent } from './pages/access/access.component';
import { DetailsComponent } from './pages/details/details.component';
import { HttpClientModule } from "@angular/common/http";
import { EntityFilterComponent } from './components/entity-filter/entity-filter.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        HeaderComponent,
        RelationshipIncomeComponent,
        DealsComponent,
        AccessComponent,
        DetailsComponent,
        EntityFilterComponent
    ],
    imports: [
        FormsModule,
        HttpClientModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
