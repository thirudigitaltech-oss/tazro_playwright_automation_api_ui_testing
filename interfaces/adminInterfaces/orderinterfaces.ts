export interface UserInfo {
  id: number;
  name: string | null;
  phone: string | null;
}

export interface WorkerInfo {
  id: number;
  name: string | null;
  phone: string | null;
}

export interface OrderResponse {
  id: number;
  status: string | null;
  total: number | null;
  address: string | null;
  created_at: string | null;
  user: UserInfo | null;
  worker: WorkerInfo | null;
  items: any[];
}



// ==========================================
// 1. PUT Order Status Interfaces
// ==========================================
export interface UpdateOrderStatusRequestInterface {
    status: string;
}

export interface UpdateOrderStatusSuccessResponseInterface {
    message: string;
}

// Common Auth Error (401)
export interface AuthErrorResponseInterface {
    detail: string; // "Not authenticated"
}

// FastAPI Validation Error (422)
export interface ValidationErrorResponseInterface {
    detail: Array<{
        loc: (string | number)[];
        msg: string;
        type: string;
    }>;
}



