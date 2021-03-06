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
/**
 * 
 * @export
 * @interface InlineResponse2003Dataset
 */
export interface InlineResponse2003Dataset {
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2003Dataset
     */
    datasetId?: string;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2003Dataset
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2003Dataset
     */
    description?: string;
    /**
     * 
     * @type {object}
     * @memberof InlineResponse2003Dataset
     */
    metadata?: object;
    /**
     * 
     * @type {Date}
     * @memberof InlineResponse2003Dataset
     */
    createdAt?: Date;
}

export function InlineResponse2003DatasetFromJSON(json: any): InlineResponse2003Dataset {
    return InlineResponse2003DatasetFromJSONTyped(json, false);
}

export function InlineResponse2003DatasetFromJSONTyped(json: any, ignoreDiscriminator: boolean): InlineResponse2003Dataset {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'datasetId': !exists(json, 'dataset_id') ? undefined : json['dataset_id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'metadata': !exists(json, 'metadata') ? undefined : json['metadata'],
        'createdAt': !exists(json, 'created_at') ? undefined : (new Date(json['created_at'])),
    };
}

export function InlineResponse2003DatasetToJSON(value?: InlineResponse2003Dataset | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'dataset_id': value.datasetId,
        'name': value.name,
        'description': value.description,
        'metadata': value.metadata,
        'created_at': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
    };
}


