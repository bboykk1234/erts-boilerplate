import * as dotenv from "dotenv";

const { error } : dotenv.DotenvConfigOutput = dotenv.config();

if (error) throw error;

export const isDev : boolean = process.env.NODE_ENV === 'development';
export const isProd : boolean = process.env.NODE_ENV === 'production';
export const isTest : boolean = process.env.NODE_ENV === 'test';

export const isDebugMode : boolean = process.env.DEBUG_MODE as unknown as boolean;

export const port = Number(process.env.PORT);
export const url = process.env.URL;
export const env = process.env.NODE_ENV as "development" | "production";

export const appPath : string = (isDev) ?
    `${ process.env.URL }:${ process.env.PORT }/app` :
    `${ process.cwd() }/app`;
