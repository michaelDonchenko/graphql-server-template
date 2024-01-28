// Only Interface exports
export interface GetUsersArgs {
    info: GraphQLResolveInfo;
  }
  
export  interface GetUserArgs extends GetUsersArgs {
    id: string;
  }
  
export  interface UserInput {
    email: string;
    username?: string;
  }
