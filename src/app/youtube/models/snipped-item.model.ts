import { ThumbnailsItemModel } from './thumbnails-item.model';
import { LocalizedItemModel } from './localized-item.model';

export class SnippedItemModel {
    public publishedAt: string;
    public channelId: string;
    public title: string;
    public description: string;
    public thumbnails: ThumbnailsItemModel;
    public channelTitle: string;
    public tags: string[];
    public categoryId: string;
    public liveBroadcastContent: string;
    public localized: LocalizedItemModel;
    public defaultAudioLanguage: string;
}
