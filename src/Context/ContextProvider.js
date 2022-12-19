import { FunctionProvider } from './FunctionProvider';

export default function ContextProviders({ children }) {
  //需要其他context時這裡再夾進去
  return <FunctionProvider>{children}</FunctionProvider>;
}
