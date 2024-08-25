import Card from 'react-bootstrap/Card';
import Image from 'next/image';
function Teamcard() {
  return (
    <Card className='no-border relative'>
      <Card.Body className='no-border'>
      <div className='md:mb-[-400px]'><Image 
       src='/assets/team2.png'
       width={300}
       height={100}
      className="eventImage1 "
       /></div>
      </Card.Body>
    </Card>
  );
}

export default Teamcard;