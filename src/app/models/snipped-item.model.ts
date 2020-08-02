import { ThumbnailsItemModel } from './thumbnails-item.model';
import { LocalizedItemModel } from './localized-item.model';

export class SnippedItemModel {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: ThumbnailsItemModel;
    channelTitle: string;
    tags: string[];
    categoryId: string;
    liveBroadcastContent: string;
    localized: LocalizedItemModel;
    defaultAudioLanguage: string;
}
