import { ThumbnailsItemModel } from '../models/thumbnails-item.model';
import { LocalizedDetailedItemModel } from './localized-detailed-item.model';

export class SnippedDetailedItemModel {
    public categoryId: string;
    public channelId: string;
    public channelTitle: string;
    public defaultAudioLanguage: string;
    public defaultLanguage: string;
    public description: string;
    public liveBroadcastContent: string;
    public localized: LocalizedDetailedItemModel;
    public publishedAt: string;
    public tags: string[];
    public thumbnails: ThumbnailsItemModel;

    public publishTime: string;
    public title: string;

}
