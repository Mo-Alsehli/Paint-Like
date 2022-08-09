import userModel from "../../dbModels/user";

export type User = {
  id?: string;
  username: string;
  password: string;
};

export class userStore {
  async show(id: string): Promise<User> {
    try {
      const user = (await userModel.findOne({ _id: id })) as User;
      return user;
    } catch (error) {
      throw new Error(`Unable To Find User With Id: ${id}: ${error}`);
    }
  }
  async create(user: User): Promise<User> {
    try {
      const newUser = await userModel.create(user);
      return newUser;
    } catch (error) {
      throw new Error(`Unable To Create User: ${error}`);
    }
  }
}
