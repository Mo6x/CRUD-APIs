import { Router, Request, Response, NextFunction } from "express";
import Controller from "@/utils/interfaces/controller.Interface";
import HttpException from "@/utils/exceptions/http.exceptions";
import validationMiddleware from "@/middleware/validation.middleware";
import validate from "@/resources/post/post.validation";
import postService from "@/resources/post/post.service";

class postController implements controller {
    public path = "/posts";
    public router = Router();

    constructor() {
        this.initialiseRoutes();
    }
    private initialiseRoutes(): void {}
};


