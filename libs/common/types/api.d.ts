import { ProfileGroup, ProxyGroup, TaskGroup } from '../src';
import type { Category, Profile, Proxy, Store, Task } from '../src/models';
export interface APIGetAuthDiscordQuery {
    redirect_uri: string;
}
export interface APIGetAuthDiscordCallbackQuery {
    code: string;
    state: string;
}
export interface APIGetAuthDiscordRefreshBody {
    refresh_token: string;
}
export interface ApiPostPaymentsCreateResult {
    sessionId: string;
}
export interface ApiPostPaymentsPortalResult {
    url: string;
}
export declare type ApiPatchTaskCancelResult = Task;
export declare type ApiPatchTaskStartResult = Task;
export declare type ApiPatchTaskBody = Partial<ApiPutTasksBody>;
export declare type ApiPatchTaskResult = Task;
export declare type ApiGetTasksResult = Task[];
export interface ApiPutTasksBody {
    group_id: number;
    store: Store;
    category: Category;
    name: string;
    size: number;
    profile: number;
    proxy: number;
    recurring: boolean;
}
export declare type ApiPutTaskResult = Task;
export declare type ApiGetTaskGroupResult = TaskGroup[];
export interface ApiPutTaskGroupBody {
    name: string;
    monitor_delay: number;
    retry_delay: number;
}
export declare type ApiPutTaskGroupResult = TaskGroup;
export declare type ApiPatchTaskGroupBody = Partial<ApiPutTaskGroupBody>;
export declare type ApiPatchTaskGroupResult = TaskGroup;
export declare type ApiGetProxyGroupResult = ProxyGroup[];
export interface ApiPutProxyGroupBody {
    name: string;
}
export declare type ApiPutProxyGroupResult = ProxyGroup;
export declare type ApiPatchProxyGroupBody = Partial<ApiPutProxyGroupBody>;
export declare type ApiPatchProxyGroupResult = ProxyGroup;
export declare type ApiGetProfileGroupResult = ProfileGroup[];
export interface ApiPutProfileGroupBody {
    name: string;
}
export declare type ApiPutProfileGroupResult = ProfileGroup;
export declare type ApiPatchProfileGroupBody = Partial<ApiPutProfileGroupBody>;
export declare type ApiPatchProfileGroupResult = ProfileGroup;
export declare type ApiGetProfileResult = Profile[];
export interface ApiPutProfileBody {
    group_id: number;
    profile_name: string;
    email: string;
    first_name: string;
    last_name: string;
    phone: string;
    username?: string;
    password?: string;
    address1: string;
    address2?: string;
    city: string;
    zip: number;
    country: string;
    state?: string;
    cname: string;
    cnumber: string;
    month: number;
    year: number;
    cvv: number;
}
export declare type ApiPutProfileResult = Profile;
export declare type ApiPatchProfileBody = Partial<ApiPutProfileBody>;
export declare type ApiPatchProfileResult = Profile;
export declare type ApiGetProxyResult = (Proxy & {
    ping: number | null;
})[];
export interface ApiPutProxyBody {
    group_id: number;
    ip: string;
    port: string;
    username: string;
    password: string;
}
export declare type ApiPutProxyResult = Proxy;
export interface ApiDeleteProxyBody {
    proxy_group?: string | null;
}
export declare type ApiDeleteProxyResult = Proxy[];
//# sourceMappingURL=api.d.ts.map