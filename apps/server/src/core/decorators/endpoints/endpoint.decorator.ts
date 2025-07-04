import {
  All,
  applyDecorators,
  Delete,
  Get,
  Head,
  Options,
  Patch,
  Post,
  Put,
} from "@nestjs/common";
import type { ControllerDefinition } from "@shared/api-definition";
import {
  EndpointMethod,
  getEndpoint,
  getEndpointSlug,
} from "@shared/api-definition";

const decoratorMapper = (method?: EndpointMethod) => {
  switch (method) {
    case EndpointMethod.GET:
      return Get;
    case EndpointMethod.POST:
      return Post;
    case EndpointMethod.PUT:
      return Put;
    case EndpointMethod.DELETE:
      return Delete;
    case EndpointMethod.PATCH:
      return Patch;
    case EndpointMethod.ALL:
      return All;
    case EndpointMethod.OPTIONS:
      return Options;
    case EndpointMethod.HEAD:
      return Head;
    default:
      return Get;
  }
};

export function Endpoint<
  C extends ControllerDefinition,
  E extends keyof C["endpoints"],
>(controller: C, endpoint: E): MethodDecorator {
  const e = getEndpoint(controller, endpoint);

  return applyDecorators(
    decoratorMapper(e.method)(getEndpointSlug(controller, endpoint)),
  );
}
