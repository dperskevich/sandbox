export interface User {
  id: string;
  nusername: string;
  // password: string; - we don't want to expose the password
}

export interface UserSchema {
  authData?: User;
}
