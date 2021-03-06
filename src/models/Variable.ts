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
 * @interface Variable
 */
export interface Variable {
    /**
     * Unique identifier
     * @type {string}
     * @memberof Variable
     */
    recordId: string;
    /**
     * record_id of the dataset that this variable belongs to
     * @type {string}
     * @memberof Variable
     */
    datasetId: string;
    /**
     * Display name/title/label of the variable
     * @type {string}
     * @memberof Variable
     */
    name: string;
    /**
     * 
     * @type {object}
     * @memberof Variable
     */
    metadata?: object;
}

export function VariableFromJSON(json: any): Variable {
    return VariableFromJSONTyped(json, false);
}

export function VariableFromJSONTyped(json: any, ignoreDiscriminator: boolean): Variable {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'recordId': json['record_id'],
        'datasetId': json['dataset_id'],
        'name': json['name'],
        'metadata': !exists(json, 'metadata') ? undefined : json['metadata'],
    };
}

export function VariableToJSON(value?: Variable | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'record_id': value.recordId,
        'dataset_id': value.datasetId,
        'name': value.name,
        'metadata': value.metadata,
    };
}


