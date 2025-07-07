import { Outlet } from 'react-router-dom';

const Authentication = () => {
  return (
    <>
      <h1>Authentication</h1>
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default Authentication