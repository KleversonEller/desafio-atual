import { StatusCodes } from 'http-status-codes';

import type PostService from '@services/post.service';
import type {Request, Response} from 'express';

export default class PostController {
    private readonly _service: PostService;

    constructor(service: PostService) {
        this._service = service;
    };

    public async getPost(_req: Request, res: Response): Promise<Response> {
        const result = await this._service.getPost();

        return res.status(StatusCodes.OK).json(result);
    };

    public async createPost(req: Request, res: Response): Promise<Response> {
        const result = await this._service.createPost(req.body);

        return res.status(StatusCodes.CREATED).json({message: result});
    };

    public async getPostById(req: Request, res: Response): Promise<Response> {
        const result = await this._service.getPostById(req.params.id);

        return res.status(StatusCodes.OK).json(result);
    };

    public async updatePost(req: Request, res: Response): Promise<Response> {
        const result = await this._service.updatePost(req.params.id, req.body);

        return res.status(StatusCodes.ACCEPTED).json(result);
    };
};
