import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {AlbumsComponent} from './albums/albums.component';
import {AlbumDetailComponent} from './album-detail/album-detail.component';
import {AlbumPhotosComponent} from './album-photos/album-photos.component';
import {PhotoDetailComponent} from './photo-detail/photo-detail.component';
import {PhotosComponent} from './photos/photos.component';
import {NoSuchComponent} from './no-such/no-such.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'albums', component: AlbumsComponent},
  {path: 'albums/:albumId', component: AlbumDetailComponent},
  {path: 'photos/:photoId', component: PhotoDetailComponent},
  {path: 'albums/:albumId/photos/page/:pageNum', component: AlbumPhotosComponent},
  {path: 'albums/:albumId/photos', redirectTo: `albums/:albumId/photos/page/${1}`, pathMatch: 'full'},
  {path: 'albums/:albumId/photos/page', redirectTo: `albums/:albumId/photos/page/${1}`, pathMatch: 'full'},
  {path: 'photos/page/:pageNum', component: PhotosComponent},
  {path: 'photos', redirectTo: `photos/page/${1}`, pathMatch: 'full'},
  {path: 'photos/page', redirectTo: `photos/page/${1}`, pathMatch: 'full'},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: NoSuchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
