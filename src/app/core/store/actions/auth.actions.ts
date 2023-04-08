import { createAction, props } from '@ngrx/store';
import { Login } from '../../models/login.model';
import { AuthUser } from '../../models/AuthUser.model';

export const loginRequest = createAction(
    '[Auth] Login Request',
    props<{ login: Login }>()
);

export const loginSuccess = createAction(
    '[Auth] Login Success',
    props<{ token: string }>()
);

export const loginFailure = createAction(
    '[Auth] Login Failure',
    props<{ error: any }>()
);

// Auth
export const getAuthUserRequest = createAction(
    '[Auth] Auth User Request'
    );
    
export const getAuthUserSuccess = createAction(
  '[Auth] Auth User Success',
  props<{ user: AuthUser }>()
);
export const getAuthUserFailure = createAction(
    '[Auth] Auth User Failure',
props<{error:Error}>());

export const logout = createAction(
    '[Auth] Logout'
);

export const logoutSuccess = createAction(
    '[Auth] Logout Success'
);

export const logoutFailure = createAction(
    '[Auth] Logout Failure',
    props<{ error: any }>()
);


// Refresh token
export const refreshTokenRequest = createAction(
    '[Auth] Refresh Token Request'
    );
export const refreshTokenSuccess = createAction(
    '[Auth] Refresh Token Success'
    );
export const refreshTokenFailure = createAction(
    '[Auth] Refresh Token Failure',
    props<{ error: Error }>());
