export interface FootballHeaders {
    date?: string;
    "x-api-version"?: string;
    "x-authenticated-client"?: string;
    "x-requestcounter-reset"?: string;
    "x-requests-available-minute"?: string;
}

export interface FootballResponse<DataType> {
    ok: boolean;
    status: number;
    url: string;
    headers: FootballHeaders;
    data: DataType;
}
