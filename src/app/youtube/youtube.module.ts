import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './pages/main-page/main-page.component';
import { FilterBlockComponent } from './components/filter-block/filter-block.component';
import { SearchModelComponent } from './components/search-model/search-model.component';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { VideoThumbnailComponent } from './components/video-thumbnail/video-thumbnail.component';
import { ViewsCountComponent } from './components/views-count/views-count.component';
import { LikesCountComponent } from './components/likes-count/likes-count.component';
import { DislikesCountComponent } from './components/dislikes-count/dislikes-count.component';
import { CommentsCountComponent } from './components/comments-count/comments-count.component';
import { VideoTitleComponent } from './components/video-title/video-title.component';
import { MoreButtonComponent } from './components/more-button/more-button.component';
import { FilterButtonsComponent } from './components/filter-buttons/filter-buttons.component';
import { FilterInputComponent } from './components/filter-input/filter-input.component';
import { BorderColorDirective } from './directives/border-color.directive';
import { SortingPipe } from './pipes/sorting.pipe';
import { FilterByWordPipe } from './pipes/filter-by-word.pipe';
import { DetailedInformationPageComponent } from './pages/detailed-information/detailed-information-page/detailed-information-page.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: ':id', component: DetailedInformationPageComponent }
];

@NgModule({
  declarations: [
    MainPageComponent,
    FilterBlockComponent,
    SearchModelComponent,
    SearchItemComponent,
    VideoThumbnailComponent,
    ViewsCountComponent,
    LikesCountComponent,
    DislikesCountComponent,
    CommentsCountComponent,
    VideoTitleComponent,
    MoreButtonComponent,
    FilterButtonsComponent,
    FilterInputComponent,
    BorderColorDirective,
    SortingPipe,
    FilterByWordPipe,
    DetailedInformationPageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ]
})
export class YoutubeModule { }
