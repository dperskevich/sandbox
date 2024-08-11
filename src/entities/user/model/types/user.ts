export interface User {
  id: string;
  username: string;
  // password: string; - we don't want to expose the password
}

export interface UserSchema {
  authData?: User;
}
