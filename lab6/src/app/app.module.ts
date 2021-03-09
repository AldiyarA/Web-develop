import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumDetailComponent } from './album-detail/album-detail.component';
import { AlbumPhotosComponent } from './album-photos/album-photos.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { TopBarComponent } from './top-bar/top-bar.component';
import { PhotoDetailComponent } from './photo-detail/photo-detail.component';
import { PhotosComponent } from './photos/photos.component';
import { NoSuchComponent } from './no-such/no-such.component';
import { PhotosListComponent } from './photos-list/photos-list.component';
import { CreateAlbumComponent } from './create-album/create-album.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    AlbumsComponent,
    AlbumDetailComponent,
    AlbumPhotosComponent,
    TopBarComponent,
    PhotoDetailComponent,
    PhotosComponent,
    NoSuchComponent,
    PhotosListComponent,
    CreateAlbumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

