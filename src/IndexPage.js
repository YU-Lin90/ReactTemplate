import { Outlet } from 'react-router-dom';
import NavigationBar from './NavigationBar';
function IndexPage() {
  return (
    <>
      <NavigationBar />
      <Outlet />
    </>
  );
}
export default IndexPage;
