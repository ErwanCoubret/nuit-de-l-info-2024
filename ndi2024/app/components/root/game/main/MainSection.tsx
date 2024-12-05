import HeadSvg from '@/public/man/HEAD.svg';
import ChestSvg from '@/public/man/CHEST.svg';
import LArmSvg from '@/public/man/L_ARM.svg';
import RArmSvg from '@/public/man/R_ARM.svg';
import LLegSvg from '@/public/man/L_LEG.svg';
import RLegSvg from '@/public/man/R_LEG.svg';
import Link from 'next/link';
import Image from 'next/image';

function BodyPart({
  svg,
  right,
  top,
  link,
  altText = 'Body Part',
}: Readonly<{
  svg: string;
  right: string;
  top: string;
  link: string;
  altText?: string;
}>) {

  return (
    <Link href={link}
        className="absolute cursor-pointer hover:scale-105 transition-transform duration-200"
        style={{
          right,
          top,
        }}
      >
        <Image src={svg} alt={altText} className="pointer-events-auto" style={{
            pointerEvents: 'visiblePainted', // Interactions limitées aux parties du svg
          }} />
    </Link>
  );

}

function Man() {
    return (
      <div>
        <div className="relative w-96 h-96">
          <BodyPart svg={HeadSvg} right="50%" top="0%" link="/game/main/head" altText="Head" />
          <BodyPart svg={ChestSvg} right="50%" top="50%" link="/game/main/chest" altText="Chest" />
          <BodyPart svg={LArmSvg} right="0%" top="50%" link="/game/main/l-arm" altText="Left Arm" />
          <BodyPart svg={RArmSvg} right="100%" top="50%" link="/game/main/r-arm" altText="Right Arm" />
          <BodyPart svg={LLegSvg} right="25%" top="100%" link="/game/main/l-leg" altText="Left Leg" />
          <BodyPart svg={RLegSvg} right="75%" top="100%" link="/game/main/r-leg" altText="Right Leg" />
        </div>
       </div>
    );
}

export default function MainSection() {
    return (
      <div>
        <Man />
      </div>
    );
  }