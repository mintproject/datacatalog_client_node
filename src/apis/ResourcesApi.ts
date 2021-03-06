/* tslint:disable */
/* eslint-disable */
/**
 * MINT Data Catalog
 * API Documentation for MINT Data Catalog
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: danf@usc.edu
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    InlineObject8,
    InlineObject8FromJSON,
    InlineObject8ToJSON,
    InlineObject9,
    InlineObject9FromJSON,
    InlineObject9ToJSON,
    InlineResponse2005,
    InlineResponse2005FromJSON,
    InlineResponse2005ToJSON,
} from '../models';

export interface GetResourceInfoRequest {
    body: InlineObject9;
}

export interface RegisterResourcesRequest {
    body: InlineObject8;
}

/**
 * 
 */
export class ResourcesApi extends runtime.BaseAPI {

    /**
     * Detailed information about the resource
     */
    async getResourceInfoRaw(requestParameters: GetResourceInfoRequest): Promise<runtime.ApiResponse<InlineResponse2005>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling getResourceInfo.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/resources/get_resource_info`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: InlineObject9ToJSON(requestParameters.body),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => InlineResponse2005FromJSON(jsonValue));
    }

    /**
     * Detailed information about the resource
     */
    async getResourceInfo(requestParameters: GetResourceInfoRequest): Promise<InlineResponse2005> {
        const response = await this.getResourceInfoRaw(requestParameters);
        return await response.value();
    }

    /**
     * Create resource record(s)
     */
    async registerResourcesRaw(requestParameters: RegisterResourcesRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling registerResources.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/datasets/register_resources`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: InlineObject8ToJSON(requestParameters.body),
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Create resource record(s)
     */
    async registerResources(requestParameters: RegisterResourcesRequest): Promise<void> {
        await this.registerResourcesRaw(requestParameters);
    }

}
