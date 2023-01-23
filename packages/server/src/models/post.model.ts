import type {PrismaClient, post} from '@prisma/client';

export default class PostModel {
    private readonly _connect: PrismaClient;

    constructor(connect: PrismaClient) {
        this._connect = connect
    };

    public async getPost(): Promise<post[]> {
        const post = await this._connect.post.findMany();

        return post
    };

    public async createPost(data: post[]): Promise<string> {
        //! Usaria um "createMany" para criar mais de um post porem o banco sqlite nao aceita

        data.map(async (post: post) => this._connect.post.create({
                data: {
                    id: post.id,
                    type: post.type,
                    content: post?.content,
                }}));

        return "Post criado com sucesso";
    };

    public async getPostById(data: string): Promise<post> {
        const post = await this._connect.post.findUnique({where: {id: data}});

        return post;
    };

    public async updatePost(id: string, data: post): Promise<post> {
        const update = await this._connect.post.update({
            where: {id},
            data
        });

        return update;
    };
};
