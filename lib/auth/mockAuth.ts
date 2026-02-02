import { User, getMockUser, addMockUser, getAllMockUsers } from '@/lib/data/mockUsers';

const AUTH_STORAGE_KEY = 'oxygenix_auth';
const SESSION_DURATION = 7 * 24 * 60 * 60 * 1000; // 7 days

export interface AuthSession {
    user: User;
    token: string;
    expiresAt: number;
}

// Get current session from localStorage
export function getSession(): AuthSession | null {
    if (typeof window === 'undefined') return null;

    try {
        const stored = localStorage.getItem(AUTH_STORAGE_KEY);
        if (!stored) return null;

        const session: AuthSession = JSON.parse(stored);

        // Check if session is expired
        if (Date.now() > session.expiresAt) {
            logout();
            return null;
        }

        return session;
    } catch (error) {
        console.error('Error reading session:', error);
        return null;
    }
}

// Save session to localStorage
function saveSession(user: User): AuthSession {
    const session: AuthSession = {
        user,
        token: `mock_token_${Date.now()}_${Math.random()}`,
        expiresAt: Date.now() + SESSION_DURATION,
    };

    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(session));
    return session;
}

// Login with email and password
export async function login(email: string, password: string): Promise<{ success: boolean; error?: string; user?: User }> {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    const mockUser = getMockUser(email);

    if (!mockUser) {
        return {
            success: false,
            error: 'Invalid email or password',
        };
    }

    // Simple password comparison for mock implementation
    const isValid = mockUser.password === password;

    if (!isValid) {
        return {
            success: false,
            error: 'Invalid email or password',
        };
    }

    // Save session
    saveSession(mockUser.user);

    return {
        success: true,
        user: mockUser.user,
    };
}

// Register new user
export async function signup(
    email: string,
    password: string,
    name: string
): Promise<{ success: boolean; error?: string; user?: User }> {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Check if user already exists
    const existingUser = getMockUser(email);
    if (existingUser) {
        return {
            success: false,
            error: 'An account with this email already exists',
        };
    }

    // Create new user (store plain text password for mock implementation)
    const newUser = addMockUser(email, password, name);

    // Auto-login after signup
    saveSession(newUser);

    return {
        success: true,
        user: newUser,
    };
}

// Logout
export function logout(): void {
    if (typeof window === 'undefined') return;
    localStorage.removeItem(AUTH_STORAGE_KEY);
    window.location.href = '/';
}

// Check if user is authenticated
export function isAuthenticated(): boolean {
    const session = getSession();
    return session !== null;
}

// Get current user
export function getCurrentUser(): User | null {
    const session = getSession();
    return session?.user || null;
}

// Mock password reset (just validates email exists)
export async function requestPasswordReset(email: string): Promise<{ success: boolean; error?: string }> {
    await new Promise((resolve) => setTimeout(resolve, 600));

    const mockUser = getMockUser(email);

    if (!mockUser) {
        // For security, don't reveal if email exists
        return {
            success: true,
        };
    }

    // In real implementation, this would send an email
    // For now, just return success
    return {
        success: true,
    };
}

// Mock password reset confirmation
export async function resetPassword(token: string, newPassword: string): Promise<{ success: boolean; error?: string }> {
    await new Promise((resolve) => setTimeout(resolve, 600));

    // In mock implementation, we'll just accept any token
    // In real implementation, this would validate the token

    return {
        success: true,
    };
}

// Update user profile
export async function updateProfile(updates: Partial<User>): Promise<{ success: boolean; error?: string; user?: User }> {
    await new Promise((resolve) => setTimeout(resolve, 500));

    const session = getSession();
    if (!session) {
        return {
            success: false,
            error: 'Not authenticated',
        };
    }

    // Update user in session
    const updatedUser = {
        ...session.user,
        ...updates,
        id: session.user.id, // Don't allow ID changes
        email: session.user.email, // Don't allow email changes via this method
    };

    saveSession(updatedUser);

    return {
        success: true,
        user: updatedUser,
    };
}
