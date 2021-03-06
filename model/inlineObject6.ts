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

export class InlineObject6 {
    'datasetNamesIn'?: Array<string>;
    'datasetIdsIn'?: Array<string>;
    'standardVariableIdsIn'?: Array<string>;
    'standardVariableNamesIn'?: Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "datasetNamesIn",
            "baseName": "dataset_names__in",
            "type": "Array<string>"
        },
        {
            "name": "datasetIdsIn",
            "baseName": "dataset_ids__in",
            "type": "Array<string>"
        },
        {
            "name": "standardVariableIdsIn",
            "baseName": "standard_variable_ids__in",
            "type": "Array<string>"
        },
        {
            "name": "standardVariableNamesIn",
            "baseName": "standard_variable_names__in",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return InlineObject6.attributeTypeMap;
    }
}

