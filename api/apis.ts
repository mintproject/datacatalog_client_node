export * from './datasetsApi';
import { DatasetsApi } from './datasetsApi';
export * from './resourcesApi';
import { ResourcesApi } from './resourcesApi';
export * from './standardVariablesApi';
import { StandardVariablesApi } from './standardVariablesApi';
export * from './variablesApi';
import { VariablesApi } from './variablesApi';
import * as fs from 'fs';
import * as http from 'http';

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;

export const APIS = [DatasetsApi, ResourcesApi, StandardVariablesApi, VariablesApi];
