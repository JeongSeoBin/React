/*
    Request handler
    To handle a REST API request we need to specify its method, path, and a function that would return the mocked response.
    create request handlers by calling rest[method] and providing a request path (Rest API 호출)
    * rest[method]
      determines whether an outgoing request should be mocked, and specifies its mocked response using response resolver finction

    Response resolver
    To respond to an intercepted request we have to specify a mocked response using a response resolver function.
    resolver is used as an argument to a request handler
    resolver함수에서 리턴값이 없으면 MSW가 요청을 있는 그대로 수행하여 응답을 반환한다
    * resolver function 
      req: information about a matching request
      res: functional utility to create the mocked response
      ctx: a group of functions that help to set a status code, headers, body, etc. of the mocked response.
*/

import { rest } from "msw";

export const handlers = [
  // Response patching
  // mocked response를 실제 request 응답에 기반한 데이터로 구성할 수 있다
  rest.get(
    "https://jsonplaceholder.typicode.com/todos",
    async (req, res, ctx) => {
      const originalResponse = await ctx.fetch(req);
      const originalResponseData = await originalResponse.json();
      const parsedData = originalResponseData.map((item) => item.title);

      return res(ctx.json(parsedData));
    }
  ),

  // handles a POST /login request
  rest.post("/login", (req, res, ctx) => {
    // session 처리
    return res(ctx.status(200));
  }),

  // handles a GET /user request
  rest.get("/user", (req, res, ctx) => {
    if (true) {
      return res(
        ctx.status(200),
        ctx.json({
          username: "admin",
        })
      );
    } else {
      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: "해당 사용자 없음",
        })
      );
    }
  }),
];
