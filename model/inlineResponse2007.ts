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
import { InlineResponse2007Dataset } from './inlineResponse2007Dataset';

export class InlineResponse2007 {
    'dataset'?: InlineResponse2007Dataset;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "dataset",
            "baseName": "dataset",
            "type": "InlineResponse2007Dataset"
        }    ];

    static getAttributeTypeMap() {
        return InlineResponse2007.attributeTypeMap;
    }
}
