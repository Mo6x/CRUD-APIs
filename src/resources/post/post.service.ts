import postModel from "@/resources/post/post.model";
import post from "@/resources/post/post.interface";

class postService {
      private post = postModel;

      // create a new post
      public async create(title: string, body: string): Promise<post> {
        try{
            const post = await this.post.create({ title, body });

            return post;
        } catch (error) {
            throw new Error("Unable to create post");
        }
      }
}
export default postService;