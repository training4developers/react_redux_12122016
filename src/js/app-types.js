import type { Store } from 'redux';

export type AppState = {
	cars: Car[]
};

export type AppAction = {
	type: string
}

export type AppStore = Store<AppState, AppAction>;