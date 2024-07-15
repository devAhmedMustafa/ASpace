import { createContext } from "react";

export const TransformContext = createContext(undefined)
export const TransformProvider = TransformContext.Provider
export const SetTransformContext = createContext(undefined)
export const BodyContext = createContext(undefined);
export const CentersContext = createContext(undefined);

export const FocusContext = createContext(undefined)