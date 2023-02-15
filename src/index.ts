import "dotenv/config";
import "module-alias/register";
import App from "./app";
import validateEnv  from "@/utils/validateEnv";
import postController from "@/resources/post/post.controller";

validateEnv();

const app = new App([ new postController() ], Number(process.env.PORT));

app.listen();
