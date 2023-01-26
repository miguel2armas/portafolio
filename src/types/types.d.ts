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
export interface ResultErrorOpenAi {
    response:{
        status:number
        data:DataError
    }
    message:string
}
interface DataError {
  code?: any;
  message: string;
  param?: any;
}
export interface ResultOpenAiImg {
  data: Data;
  status: number;
}

interface Data {
  created: number;
  data: Datum[];
}

interface Datum {
  url: string;
}
export interface ResultOpenAiQuestion {
  data: DataQuestion;
  status: number;
  statusText: string;
}

interface DataQuestion {
  id: string;
  object: string;
  created: number;
  model: string;
  choices: Choice[];
  usage: Usage;
}

interface Usage {
  prompt_tokens: number;
  completion_tokens: number;
  total_tokens: number;
}

interface Choice {
  text: string;
  index: number;
  logprobs?: any;
  finish_reason: string;
}