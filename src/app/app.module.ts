import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { UserLogoComponent } from './components/user-logo/user-logo.component';
import { FilterBlockComponent } from './components/filter-block/filter-block.component';
import { SearchModelComponent } from './components/search-model/search-model.component';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { LogoComponent } from './components/logo/logo.component';
import { SettingButtonComponent } from './components/setting-button/setting-button.component';
import { FilterButtonsComponent } from './components/filter-buttons/filter-buttons.component';
import { FilterInputComponent } from './components/filter-input/filter-input.component';
import { VideoThumbnailComponent } from './components/video-thumbnail/video-thumbnail.component';
import { ViewsCountComponent } from './components/views-count/views-count.component';
import { LikesCountComponent } from './components/likes-count/likes-count.component';
import { DislikesCountComponent } from './components/dislikes-count/dislikes-count.component';
import { CommentsCountComponent } from './components/comments-count/comments-count.component';
import { VideoTitleComponent } from './components/video-title/video-title.component';
import { MoreButtonComponent } from './components/more-button/more-button.component';
import { BorderColorDirective } from './directivs/border-color.directive';
import { SortingPipe } from './pipe/sorting.pipe';
import { FilterByWordPipe } from './pipe/filter-by-word.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchInputComponent,
    UserLogoComponent,
    FilterBlockComponent,
    SearchModelComponent,
    SearchItemComponent,
    LogoComponent,
    SettingButtonComponent,
    FilterButtonsComponent,
    FilterInputComponent,
    VideoThumbnailComponent,
    ViewsCountComponent,
    LikesCountComponent,
    DislikesCountComponent,
    CommentsCountComponent,
    VideoTitleComponent,
    MoreButtonComponent,
    BorderColorDirective,
    SortingPipe,
    FilterByWordPipe
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
