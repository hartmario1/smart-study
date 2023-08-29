export interface User {
    user_id: `${bigint}`;
    email: string;
}
export interface Customer {
    user_id: `${bigint}`;
    customer_id: string;
}
export interface Subscription {
    user_id: `${bigint}`;
    subscription_id: string;
}
export declare enum Store {
    supreme = 0,
    snkrs = 1,
    bodega = 2,
    shoepalace = 3,
    undefeated = 4
}
export declare enum Category {
    all = 0,
    new = 1,
    jackets = 2,
    shirts = 3,
    topsOrSweaters = 4,
    sweatshirts = 5,
    pants = 6,
    shorts = 7,
    hats = 8,
    bags = 9,
    accessories = 10,
    shoes = 11,
    skate = 12,
    tShirts = 13
}
export declare enum Status {
    idle = 0,
    stopped = 1,
    failed = 2,
    waiting = 3,
    waitingForCancel = 4,
    loading = 5,
    captcha = 6,
    checkingOut = 7,
    done = 8
}
export interface TaskGroup {
    user_id: `${bigint}`;
    id: number;
    name: string;
    monitor_delay: number;
    retry_delay: number;
}
export interface ProxyGroup {
    user_id: `${bigint}`;
    id: number;
    name: string;
}
export interface ProfileGroup {
    user_id: `${bigint}`;
    id: number;
    name: string;
}
export interface Task {
    id: number;
    user_id: `${bigint}`;
    group_id: number;
    store: Store;
    category: Category;
    name: string;
    profile: number;
    proxy: number;
    size: number;
    created_at: Date;
    status: Status;
    recurring: boolean;
}
export interface Profile {
    user_id: `${bigint}`;
    group_id: number;
    profile_name: string;
    email: string;
    first_name: string;
    last_name: string;
    phone: string;
    username: string | null;
    password: string | null;
    address1: string;
    address2: string | null;
    city: string;
    zip: number;
    country: string;
    state: string | null;
    cname: string;
    cnumber: string;
    month: number;
    year: number;
    cvv: number;
}
export interface Proxy {
    user_id: `${bigint}`;
    group_id: number;
    ip: string;
    port: string;
    username: string;
    password: string;
}
//# sourceMappingURL=models.d.ts.map