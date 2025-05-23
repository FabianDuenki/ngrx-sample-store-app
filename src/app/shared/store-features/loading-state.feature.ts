import { signalStoreFeature, withComputed, withState } from '@ngrx/signals';
import { computed } from '@angular/core';

export type LoadingStatus =
  | 'idle'
  | 'loading'
  | 'fulfilled'
  | { error: string };

export type LoadingState = {
  status: LoadingStatus;
};

export function withLoadingState() {
  return signalStoreFeature(
    withState<LoadingState>({ status: 'idle' }),
    withComputed(({ status }) => ({
      isIdle: computed(() => status() === 'idle'),
      isLoading: computed(() => status() === 'loading'),
      isFulfilled: computed(() => status() === 'fulfilled'),
      isError: computed(() => {
        return typeof status() === 'object';
      }),
    })),
  );
}

export function setIdle(): LoadingState {
  return { status: 'idle' };
}

export function setPending(): LoadingState {
  return { status: 'loading' };
}

export function setFulfilled(): LoadingState {
  return { status: 'fulfilled' };
}

export function setError(error: string): LoadingState {
  return { status: { error } };
}
