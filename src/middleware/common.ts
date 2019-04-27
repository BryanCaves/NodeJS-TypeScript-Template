/*
Contains common middleware that will be used by our server.
It is imported and defined in this class and exported.
They all accept the 'express' router. Can be switched to a Koa or Hapi.js router easily
*/

import { Router } from "express";
import cors from "cors";
import parser from "body-parser";
import compression from "compression";

export const handleCors = (router: Router) =>
  router.use(cors({ credentials: true, origin: true }));

export const handleBodyRequestParsing = (router: Router) => {
  router.use(parser.urlencoded({ extended: true }));
  router.use(parser.json());
};

export const handleCompression = (router: Router) => {
  router.use(compression());
};