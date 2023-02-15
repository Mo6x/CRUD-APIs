import { Router, Request, Response, NextFunction } from "express";
import Controller from "@/utils/interfaces/controller.Interface";
import HttpException from "@/utils/exceptions/http.exceptions";
import validationMiddleware from "@/middleware/validation.middleware";
import validate from "@/resources/post/post.validation"
import postService from "@/resources/post/post.service";

class postController implements Controller {
    public path = "/posts";
    public router = Router();
    private postService = new postService();

    constructor() {
        this.initialiseRoutes();
    }
    private initialiseRoutes(): void {
        this.router.post(
            `${this.path}`,
            validationMiddleware(validate.create),
            this.create
        );
    }

    private create = async(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response | void> =>{
        try{
            const { title, body } = req.body;
            const post = await  this.postService.create(title, body);
            res.status(201).json({ post });
        } catch (error){
            next(new HttpException(400, "Cannot Create Post"));
        }
    };
};

export default postController;
