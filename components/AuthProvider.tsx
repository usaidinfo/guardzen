
'use client';

import { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  email: string;
  name: string;
  role: 'user' | 'admin';
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isAdmin: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [mounted, setMounted] = useState(false);

useEffect(() => {
  setMounted(true);
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('user');
    if (stored) {
      setUser(JSON.parse(stored));
    }
  }
}, []);

const login = async (email: string, password: string): Promise<boolean> => {
  const isAdmin = email === 'admin@guardzen.com' && password === 'admin123';
  const mockUser: User = {
    id: isAdmin ? 'admin' : 'user-' + Date.now(),
    email,
    name: isAdmin ? 'Admin User' : email.split('@')[0],
    role: isAdmin ? 'admin' : 'user'
  };
  
  setUser(mockUser);
  if (typeof window !== 'undefined') {
    localStorage.setItem('user', JSON.stringify(mockUser));
  }
  return true;
};

  const signup = async (name: string, email: string, password: string): Promise<boolean> => {
    const mockUser: User = {
      id: 'user-' + Date.now(),
      email,
      name,
      role: 'user'
    };
    
    setUser(mockUser);
    localStorage.setItem('user', JSON.stringify(mockUser));
    return true;
  };

const logout = () => {
  setUser(null);
  if (typeof window !== 'undefined') {
    localStorage.removeItem('user');
  }
};

  if (!mounted) {
    return <div className="min-h-screen bg-white dark:bg-gray-900">{children}</div>;
  }

  return (
    <AuthContext.Provider value={{ 
      user, 
      login, 
      signup, 
      logout, 
      isAdmin: user?.role === 'admin' 
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    return {
      user: null,
      login: async () => false,
      signup: async () => false,
      logout: () => {},
      isAdmin: false
    };
  }
  return context;
};