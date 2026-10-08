import { expect } from "@playwright/test";

export function expectSuccess(status: number) {
    expect(status).toBe(200);
}

export function expectCreated(status: number) {
    expect(status).toBe(201);
}

export function expectBadRequest(status: number) {
    expect(status).toBe(400);
}

export function expectUnauthorized(status: number) {
    expect(status).toBe(401);
}

export function expectNotFound(status: number) {
    expect(status).toBe(404);
}