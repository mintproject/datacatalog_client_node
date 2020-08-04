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

import { RequestFile } from '../api';

export class InlineResponse2006Dataset {
    'variableId'?: string;
    'name'?: string;
    /**
    * record_id of the dataset that this variable belongs to
    */
    'datasetId'?: string;
    'metadata'?: object;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "variableId",
            "baseName": "variable_id",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "datasetId",
            "baseName": "dataset_id",
            "type": "string"
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "object"
        }    ];

    static getAttributeTypeMap() {
        return InlineResponse2006Dataset.attributeTypeMap;
    }
}
