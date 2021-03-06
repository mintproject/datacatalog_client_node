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
    InlineObject11,
    InlineObject11FromJSON,
    InlineObject11ToJSON,
    InlineObject12,
    InlineObject12FromJSON,
    InlineObject12ToJSON,
    InlineResponse2007,
    InlineResponse2007FromJSON,
    InlineResponse2007ToJSON,
} from '../models';

export interface GetStandardVariableInfoRequest {
    body: InlineObject12;
}

export interface RegisterStandardVariablesRequest {
    body: InlineObject11;
}

/**
 * 
 */
export class StandardVariablesApi extends runtime.BaseAPI {

    /**
     * Detailed information about the standard variable
     */
    async getStandardVariableInfoRaw(requestParameters: GetStandardVariableInfoRequest): Promise<runtime.ApiResponse<InlineResponse2007>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling getStandardVariableInfo.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/standard_variables/get_standard_variable_info`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: InlineObject12ToJSON(requestParameters.body),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => InlineResponse2007FromJSON(jsonValue));
    }

    /**
     * Detailed information about the standard variable
     */
    async getStandardVariableInfo(requestParameters: GetStandardVariableInfoRequest): Promise<InlineResponse2007> {
        const response = await this.getStandardVariableInfoRaw(requestParameters);
        return await response.value();
    }

    /**
     * Create standard_variable record(s)
     */
    async registerStandardVariablesRaw(requestParameters: RegisterStandardVariablesRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling registerStandardVariables.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/knowledge_graph/register_standard_variables`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: InlineObject11ToJSON(requestParameters.body),
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Create standard_variable record(s)
     */
    async registerStandardVariables(requestParameters: RegisterStandardVariablesRequest): Promise<void> {
        await this.registerStandardVariablesRaw(requestParameters);
    }

}
