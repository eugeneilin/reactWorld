import { TopNav } from '../topnav/topnav.component';
import { Container } from 'react-bootstrap';

export const MainLayout = ({ className, children }) => {
  return (
    <div className={className}>
      <TopNav />
      <Container>
        <div className='my-4'>{children}</div>
      </Container>
    </div>
  );
};
