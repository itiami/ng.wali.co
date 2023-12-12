// post.state.ts

export const postFeatureName = "post";

export interface IPost {
    userId: number;
    id: number;
    title: string;
    body: string;
};

export interface PostState {
    loading: boolean;
    error: string | null;
    postArr: IPost[];
};

export const initialPostState: PostState = {
    error: null,
    loading: false,
    postArr: []
    /* postArr:
        [
            {
                "userId": 5100,
                "id": 1,
                "title": "Post_1",
                "body": "Post_1 Content"
            },
            {
                "userId": 5100,
                "id": 2,
                "title": "Post_2",
                "body": "Post_2 Content"
            },
        ] */
};

