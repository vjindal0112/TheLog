import { createContext } from 'react';

interface AppContext {
  userId: string;
}

const initialContext: AppContext = {
  userId: '',
}

const AppContext = createContext<AppContext>(initialContext)

export { AppContext, initialContext }