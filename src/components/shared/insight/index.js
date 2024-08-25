import Card from "react-bootstrap/Card";
import Image from "next/image";

function InsightCard() {
  return (
    <Card >
      <Image src="/assets/insight/insight.png" width={450} height={30} objectFit="cover" />
      <Card.Body>
        <Card.Title className="font-[600px] leading-[28px] text-[24px] text-[#0F0F0F]">
          Revisiting the 2024 IPO Outlook: Where are we now? 
        </Card.Title>
        <Card.Text className="font-[400px] text-[18px] leading-7 text-[#0F0F0F]">
          The initial public offering (IPO) landscape of 2024 has been dynamic,
          even if quieter than many had predicted. A diverse range of companies
          spanning technology, real estate, fashion, and beyond went public. In
          aggregate, these companies successfully.. A diverse range of companies
          spanning technology, real estate, fashion, and beyond went public. In
          aggregate, these companies successfully.In
          aggregate, these companies successfully.In
          aggregate, these companies successfully.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default InsightCard;
