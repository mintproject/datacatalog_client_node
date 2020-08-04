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

import { exists, mapValues } from '../runtime';
import {
    InlineResponse2004Dataset,
    InlineResponse2004DatasetFromJSON,
    InlineResponse2004DatasetFromJSONTyped,
    InlineResponse2004DatasetToJSON,
} from './';

/**
 * 
 * @export
 * @interface InlineResponse2004
 */
export interface InlineResponse2004 {
    /**
     * 
     * @type {InlineResponse2004Dataset}
     * @memberof InlineResponse2004
     */
    dataset?: InlineResponse2004Dataset;
}

export function InlineResponse2004FromJSON(json: any): InlineResponse2004 {
    return InlineResponse2004FromJSONTyped(json, false);
}

export function InlineResponse2004FromJSONTyped(json: any, ignoreDiscriminator: boolean): InlineResponse2004 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'dataset': !exists(json, 'dataset') ? undefined : InlineResponse2004DatasetFromJSON(json['dataset']),
    };
}

export function InlineResponse2004ToJSON(value?: InlineResponse2004 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'dataset': InlineResponse2004DatasetToJSON(value.dataset),
    };
}

