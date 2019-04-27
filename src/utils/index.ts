/*
Accepts the list of middleware wrappers defined in ./middleware/index.ts and express.Router
*/

import { Router, Request, Response, NextFunction } from "express";

// Creates a 'Wrapper' type which takes in an express.Router as an argument with a default return value of void
type Wrapper = ((router: Router) => void);

// Defining function which accepts a list of 'Wrapper' types and an express.Router type
// Creates each middleware in the list with the express.Router argument
export const applyMiddleware = (middleware: Wrapper[], router: Router) => {
  for (const f of middleware) {
    f(router);
  }
};

// Creates a 'Handler' function type which takes in an express.Request, express.Response, express.NextFunction as an argument with a default return value of void or Promise<void>
type Handler = ((req: Request, res: Response, next: NextFunction) => Promise<void> | void);

// Creates a 'Route' type which takes in a 'string' path, 'string' httpmethod, and 'Handler' as arguments
type Route = {
  path: string,
  method: string,
  handler: Handler | Handler[]
};

//Defines a function which accepts a list of type 'Route' (defined above) and an express.Router.
// Then creates an express route for each route in Route[]
export const applyRoutes = (routes: Route[], router: Router) => {
  for (const route of routes) {
    const { method, path, handler } = route;
    (router as any)[method](path, handler);
  }
};