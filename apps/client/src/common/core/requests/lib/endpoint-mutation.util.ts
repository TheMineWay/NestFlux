import type { RequestOptions } from "@core/hooks/utils/api/use-request.util";
import { getClientEndpointRequest } from "@core/utils/request/get-client-endpoint-request.util";
import type {
  ControllerDefinition,
  InferEndpointDTO,
  InferEndpointResponseDTO} from "@shared/api-definition";
import {
  getEndpointResponseDTO,
} from "@shared/api-definition";
import type { AxiosResponse } from "axios";

/**
 * NOTE:
 * - The 'endpointQuery' derives its behavior from this method.
 */

/**
 * Perform a request to the API
 */
export const endpointMutation = <
  C extends ControllerDefinition,
  E extends keyof C["endpoints"],
  R = never
>(
  controller: C,
  endpoint: E,
  requestFn: (options: RequestOptions) => Promise<AxiosResponse>,
  options?: Parameters<typeof getClientEndpointRequest>[2]
) => {
  return async (data: InferEndpointDTO<C, E>) => {
    const response = await requestFn(
      getClientEndpointRequest(controller, endpoint, { data, ...options })
    );

    const responseDto = getEndpointResponseDTO(controller, endpoint);

    if (responseDto)
      return responseDto.parse(response.data) as InferEndpointResponseDTO<C, E>;
    return response.data as R;
  };
};
