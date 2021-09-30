import Video from './Video';

// represents the full API response
export default interface FullVideoResponse {
    page: number,
    limit: number,
    explicit: boolean,
    total: number,
    has_more: boolean,
    list: Video[]
}