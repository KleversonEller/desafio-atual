import type PostModel from '@models/post.model';
import type { post } from '@prisma/client';

export default class PostService {
    private readonly _model: PostModel;

    constructor(model: PostModel) {
        this._model = model
    };

    public async getPost(): Promise<post[]> {
        const posts = await this._model.getPost();

        return posts
    };

    public async createPost(data: post[]): Promise<string> {
        const create = await this._model.createPost(data);

        return create;
    };

    public async getPostById(id: string): Promise<post> {
        const post =  await this._model.getPostById(id);

        return post;
    };

    public async updatePost(id: string, data: post): Promise<post> {
        const update = await this._model.updatePost(id, data);

        return update;
    };
};
