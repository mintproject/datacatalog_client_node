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

export class InlineResponse2002DatasetResources {
    'resourceId'?: string;
    'resourceName'?: string;
    'resourceDataUrl'?: string;
    'resourceCreatedAt'?: Date;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "resourceId",
            "baseName": "resource_id",
            "type": "string"
        },
        {
            "name": "resourceName",
            "baseName": "resource_name",
            "type": "string"
        },
        {
            "name": "resourceDataUrl",
            "baseName": "resource_data_url",
            "type": "string"
        },
        {
            "name": "resourceCreatedAt",
            "baseName": "resource_created_at",
            "type": "Date"
        }    ];

    static getAttributeTypeMap() {
        return InlineResponse2002DatasetResources.attributeTypeMap;
    }
}

