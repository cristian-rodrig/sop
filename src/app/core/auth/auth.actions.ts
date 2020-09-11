import { createAction, props} from '@ngrx/store';
import { User } from '@shared/models/user.model';

// Recibe el usuario que queremos authenticar
export const setUser = createAction('[Auth] setUser', props<{ user: User }>());

export const unSetUser = createAction('[Auth] unSetUser');
