export interface Notification {
    type?: null | "primary" | "link" | "info" | "success" | "warning" | "danger" ;
    title?: string;
    detail?: string;
    life?: 5000;
    sticky?: boolean;
}
