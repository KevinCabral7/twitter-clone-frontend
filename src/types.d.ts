export interface Posts {
    like: [];
    comments_count: 0;
    repost: 0;
    content: '';
    profile_username: '';
    profile_identificator: '';
    id: 9999;
}

export interface user {
    post_count: number;
    profile_image: string;
    username: string;
    identificator: string;
    following_count: number;
    follower_count: number;
    profile_cover: string;
}

export interface PostType {
    id: number;
    post: {
        like: number[];
        comment_count: number;
        repost: number;
        content: string;
        profile_username: string;
        profile_identificator: string;
        id: number;
        profile_image: string;
    };
}
