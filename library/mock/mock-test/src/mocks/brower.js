/*
    configure service worker
*/

import { setupWorker } from "msw";
import { handlers } from "./handlers";

// configures a service worker with request handler
export const worker = setupWorker(...handlers);
