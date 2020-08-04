export * from './dataset';
export * from './inlineObject';
export * from './inlineObject1';
export * from './inlineObject10';
export * from './inlineObject11';
export * from './inlineObject12';
export * from './inlineObject2';
export * from './inlineObject3';
export * from './inlineObject4';
export * from './inlineObject5';
export * from './inlineObject6';
export * from './inlineObject7';
export * from './inlineObject8';
export * from './inlineObject9';
export * from './inlineResponse200';
export * from './inlineResponse2001';
export * from './inlineResponse2001Dataset';
export * from './inlineResponse2001DatasetVariables';
export * from './inlineResponse2002';
export * from './inlineResponse2002Dataset';
export * from './inlineResponse2002DatasetResources';
export * from './inlineResponse2003';
export * from './inlineResponse2003Dataset';
export * from './inlineResponse2004';
export * from './inlineResponse2004Dataset';
export * from './inlineResponse2004DatasetVariables';
export * from './inlineResponse2005';
export * from './inlineResponse2005Dataset';
export * from './inlineResponse2006';
export * from './inlineResponse2006Dataset';
export * from './inlineResponse2007';
export * from './inlineResponse2007Dataset';
export * from './inlineResponse200Dataset';
export * from './inlineResponse200DatasetStandardVariables';
export * from './provenance';
export * from './resource';
export * from './standardVariable';
export * from './variable';

import localVarRequest = require('request');

import { Dataset } from './dataset';
import { InlineObject } from './inlineObject';
import { InlineObject1 } from './inlineObject1';
import { InlineObject10 } from './inlineObject10';
import { InlineObject11 } from './inlineObject11';
import { InlineObject12 } from './inlineObject12';
import { InlineObject2 } from './inlineObject2';
import { InlineObject3 } from './inlineObject3';
import { InlineObject4 } from './inlineObject4';
import { InlineObject5 } from './inlineObject5';
import { InlineObject6 } from './inlineObject6';
import { InlineObject7 } from './inlineObject7';
import { InlineObject8 } from './inlineObject8';
import { InlineObject9 } from './inlineObject9';
import { InlineResponse200 } from './inlineResponse200';
import { InlineResponse2001 } from './inlineResponse2001';
import { InlineResponse2001Dataset } from './inlineResponse2001Dataset';
import { InlineResponse2001DatasetVariables } from './inlineResponse2001DatasetVariables';
import { InlineResponse2002 } from './inlineResponse2002';
import { InlineResponse2002Dataset } from './inlineResponse2002Dataset';
import { InlineResponse2002DatasetResources } from './inlineResponse2002DatasetResources';
import { InlineResponse2003 } from './inlineResponse2003';
import { InlineResponse2003Dataset } from './inlineResponse2003Dataset';
import { InlineResponse2004 } from './inlineResponse2004';
import { InlineResponse2004Dataset } from './inlineResponse2004Dataset';
import { InlineResponse2004DatasetVariables } from './inlineResponse2004DatasetVariables';
import { InlineResponse2005 } from './inlineResponse2005';
import { InlineResponse2005Dataset } from './inlineResponse2005Dataset';
import { InlineResponse2006 } from './inlineResponse2006';
import { InlineResponse2006Dataset } from './inlineResponse2006Dataset';
import { InlineResponse2007 } from './inlineResponse2007';
import { InlineResponse2007Dataset } from './inlineResponse2007Dataset';
import { InlineResponse200Dataset } from './inlineResponse200Dataset';
import { InlineResponse200DatasetStandardVariables } from './inlineResponse200DatasetStandardVariables';
import { Provenance } from './provenance';
import { Resource } from './resource';
import { StandardVariable } from './standardVariable';
import { Variable } from './variable';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
        "Resource.ResourceTypeEnum": Resource.ResourceTypeEnum,
}

let typeMap: {[index: string]: any} = {
    "Dataset": Dataset,
    "InlineObject": InlineObject,
    "InlineObject1": InlineObject1,
    "InlineObject10": InlineObject10,
    "InlineObject11": InlineObject11,
    "InlineObject12": InlineObject12,
    "InlineObject2": InlineObject2,
    "InlineObject3": InlineObject3,
    "InlineObject4": InlineObject4,
    "InlineObject5": InlineObject5,
    "InlineObject6": InlineObject6,
    "InlineObject7": InlineObject7,
    "InlineObject8": InlineObject8,
    "InlineObject9": InlineObject9,
    "InlineResponse200": InlineResponse200,
    "InlineResponse2001": InlineResponse2001,
    "InlineResponse2001Dataset": InlineResponse2001Dataset,
    "InlineResponse2001DatasetVariables": InlineResponse2001DatasetVariables,
    "InlineResponse2002": InlineResponse2002,
    "InlineResponse2002Dataset": InlineResponse2002Dataset,
    "InlineResponse2002DatasetResources": InlineResponse2002DatasetResources,
    "InlineResponse2003": InlineResponse2003,
    "InlineResponse2003Dataset": InlineResponse2003Dataset,
    "InlineResponse2004": InlineResponse2004,
    "InlineResponse2004Dataset": InlineResponse2004Dataset,
    "InlineResponse2004DatasetVariables": InlineResponse2004DatasetVariables,
    "InlineResponse2005": InlineResponse2005,
    "InlineResponse2005Dataset": InlineResponse2005Dataset,
    "InlineResponse2006": InlineResponse2006,
    "InlineResponse2006Dataset": InlineResponse2006Dataset,
    "InlineResponse2007": InlineResponse2007,
    "InlineResponse2007Dataset": InlineResponse2007Dataset,
    "InlineResponse200Dataset": InlineResponse200Dataset,
    "InlineResponse200DatasetStandardVariables": InlineResponse200DatasetStandardVariables,
    "Provenance": Provenance,
    "Resource": Resource,
    "StandardVariable": StandardVariable,
    "Variable": Variable,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.serialize(date, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.deserialize(date, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
    public accessToken: string | (() => string) = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
