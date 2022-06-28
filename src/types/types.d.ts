export interface Sub {
    nick: string,
    avatar: string,
    subMonths: number,
    description?: string
}
export interface MemoryHistory {
    create_at:string;
    typeGame:string;
    failCount:number;
    time:number;
    id:string;
    name:string;
}