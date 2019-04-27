/*
Imports all of the middleware to provide a single connection point for the server.ts
Import middleware and export
*/

import {
    handleCors,
    handleBodyRequestParsing,
    handleCompression
} from "./common";

import { handleAPIDocs } from "./apiDocs";
  
export default [handleCors, handleBodyRequestParsing, handleCompression, handleAPIDocs];