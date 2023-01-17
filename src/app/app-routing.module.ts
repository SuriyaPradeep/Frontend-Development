import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { DownloadComponent } from './download/download.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LepiComponent } from './lepi/lepi.component';
import { LibComponent } from './lib/lib.component';
import { LsongComponent } from './lsong/lsong.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { SearchComponent } from './search/search.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopnavComponent } from './topnav/topnav.component';
import { WebComponent } from './web/web.component';

const routes: Routes = [
  {path:"header",component:HeaderComponent},
  {path:"sidebar",component:SidebarComponent},
  {path:"content",component:ContentComponent},
  {path:"topnav",component:TopnavComponent},
  {path:"footer",component:FooterComponent},
  {path:"playlist",component:PlaylistComponent},
  {path:"search",component:SearchComponent},
  {path:"download",component:DownloadComponent},
  {path:"lsong",component:LsongComponent},
  {path:"lepi",component:LepiComponent},
  {path:"lib",component:LibComponent},
  {path:"web",component:WebComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
