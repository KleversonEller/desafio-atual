import {Router} from 'express';

import PostModel from '@models/post.model';
import PostService from '@services/post.service';
import PostController from '@controllers/post.controller';
import prisma from '@models/connect.prisma';

const model = new PostModel(prisma);
const service = new PostService(model);
const controller = new PostController(service);
const postRouter = Router();

postRouter.get('/', async (req, res) => controller.getPost(req, res));
postRouter.post('/createPost', async (req, res) => controller.createPost(req, res));
postRouter.get('/api/getArticle/:id', async (req, res) => controller.getPostById(req, res));
postRouter.put('/api/updateArticle/:id', async (req, res) => controller.updatePost(req, res));

export default postRouter;
