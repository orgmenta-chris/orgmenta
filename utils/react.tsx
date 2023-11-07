// Placeholder.
// Yes, I appreciate that this one will make people's eye twitch. I think this will be justified in the long-run.
// If it helps to reconcile this in your head, consider this codebase to be an abstracted programming language in its own right.

import {
  ReactNode,
  useMemo,
  memo,
  useCallback,
  useEffect,
  useRef,
  useState,
  Ref,
  ComponentType,
  useReducer,
  isValidElement,
  createElement,
  useLayoutEffect,
} from "react";

// NODE

export type TypeReactNode = ReactNode;

// MEMO

export const useReactMemo = useMemo;

export const WrapperReactMemo = memo;

// EFFECT

export const useReactEffect = useEffect;

// REF

export const useReactRef = useRef;

export type TypeReactRef = Ref<any>;

// STATE

export const useReactState = useState;

// CALLBACK

export const useReactCallback = useCallback;

// COMPONENT

export type TypeReactComponent = ComponentType;

// REDUCER

export const useReactReducer = useReducer;

// LAYOUT

export const useReactLayout = useLayoutEffect;