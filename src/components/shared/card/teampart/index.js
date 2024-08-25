import Card from 'react-bootstrap/Card';
import Image from 'next/image';
function TeamPart() {
  return (
    <Card className='no-border'>
      <Card.Body>
       <div className='md:mb-[-100px]'>
       <div className='md:mb-[-250px]'><Image 
       src='/assets/team3.png'
       width={400}
       height={200}
      className="eventImage1 "
       /></div>
 
 <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-285px] ">
  <button
    className="hidden md:flex text-white border border-white rounded-lg px-8 py-2 items-center ml-[-95px]"
    onClick={() => window.location.href = 'mailto:rit@ritscapital.com?subject=Resume%20Submission'}
  >
    Send your Resume
    <Image
      src="/icon/Vector.png" 
      alt="Arrow Icon"
      width={8}
      height={4}
      className="ml-2 "
    />
  </button>
</div>

       </div>
      </Card.Body>
    </Card>
  );
}

export default TeamPart;