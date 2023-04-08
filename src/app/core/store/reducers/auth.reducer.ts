import { Action, createReducer, on } from '@ngrx/store';
import { AuthUser } from '../../models/AuthUser.model';

export enum TokenStatus {
    PENDING = 'PENDING',
    VALIDATING = 'VALIDATING',
    VALID = 'VALID',
    INVALID = 'INVALID',
  }

  export const AUTH_FEATURE_KEY = 'auth';


export interface AuthState {
    isLoggedIn: boolean
    user: AuthUser | null;
    accessTokenStatus: TokenStatus,
    refreshTokenStatus: TokenStatus;
    isLoadingLogin: boolean;
    hasLoginError: any;
  }

export const initialState: AuthState = {
    isLoggedIn: false,
    user: null,
    accessTokenStatus: TokenStatus.PENDING,
    refreshTokenStatus: TokenStatus.PENDING,
    isLoadingLogin: false,
    hasLoginError:  false,
  };

const reducer = createReducer(initialState);

export function authReducer(state: AuthState | undefined, action: Action): AuthState {
    return reducer(state, action);
  }
  