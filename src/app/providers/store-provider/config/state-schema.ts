import { CounterSchema } from 'entities/counter';
import { UserSchema } from 'entities/user';
import { LoginSchema } from 'features/auth-by-username/model/types/login-schema';

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;
  login: LoginSchema
}
