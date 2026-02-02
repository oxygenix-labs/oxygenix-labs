// Mock user data for authentication
export interface User {
    id: string;
    email: string;
    name: string;
    phone?: string;
    createdAt: string;
}

// Hardcoded test users (using plain text passwords for mock implementation)
export const mockUsers: Record<string, { password: string; user: User }> = {
    'demo@oxygenixlabs.com': {
        password: 'password123',
        user: {
            id: 'user_1',
            email: 'demo@oxygenixlabs.com',
            name: 'Demo User',
            phone: '+91 98765 43210',
            createdAt: '2024-01-15T10:00:00Z',
        },
    },
    'test@example.com': {
        password: 'password123',
        user: {
            id: 'user_2',
            email: 'test@example.com',
            name: 'Test User',
            createdAt: '2024-02-01T08:30:00Z',
        },
    },
};

// Store for newly registered users (in-memory, resets on page reload)
const registeredUsers: Record<string, { password: string; user: User }> = {};

export function getAllMockUsers() {
    return { ...mockUsers, ...registeredUsers };
}

export function addMockUser(email: string, password: string, name: string) {
    const newUser: User = {
        id: `user_${Date.now()}`,
        email,
        name,
        createdAt: new Date().toISOString(),
    };

    registeredUsers[email] = {
        password, // Store plain text for mock implementation
        user: newUser,
    };

    return newUser;
}

export function getMockUser(email: string) {
    const allUsers = getAllMockUsers();
    return allUsers[email];
}
