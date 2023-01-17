import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { TopnavComponent } from './topnav/topnav.component';
import { FooterComponent } from './footer/footer.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { SearchComponent } from './search/search.component';
import { DownloadComponent } from './download/download.component';
import { LsongComponent } from './lsong/lsong.component';
import { LepiComponent } from './lepi/lepi.component';
import { LibComponent } from './lib/lib.component';
import { WebComponent } from './web/web.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    ContentComponent,
    TopnavComponent,
    FooterComponent,
    PlaylistComponent,
    SearchComponent,
    DownloadComponent,
    LsongComponent,
    LepiComponent,
    LibComponent,
    WebComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }