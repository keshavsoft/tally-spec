export interface TallyLeafDef {
    action: string;
    resource: string;
    tdl?: string;
    reportId?: string;
    staticVariables?: string;
    description: string;
}

export interface TallySpecSource {
    tally: Record<string, any>;
}

export declare const source: TallySpecSource;
export declare const apiPaths: string[];

declare const _default: {
    source: TallySpecSource;
    apiPaths: string[];
};

export default _default;
