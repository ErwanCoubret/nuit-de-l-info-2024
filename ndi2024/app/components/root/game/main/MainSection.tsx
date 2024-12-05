import HeadSvg from '@/public/man/HEAD.svg';
import ChestSvg from '@/public/man/CHEST.svg';
import LArmSvg from '@/public/man/L_ARM.svg';
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
    transform = '',
    size = '20vw', // Taille par défaut en pourcentage de l'écran
  }: {
    svg: string;
    right: string;
    top: string;
    link: string;
    altText?: string;
    transform?: string;
    size?: string; // Nouvelle prop pour la taille
  }) {
    return (
      <Link
        href={link}
        className="absolute cursor-pointer hover:scale-105 transition-transform duration-200"
        style={{
          right,
          top,
          transform,
          width: size,
          height: size, // Taille dynamique des body parts
        }}
      >
        <Image src={svg} alt={altText} layout="fill" objectFit="contain" />
      </Link>
    );
  }
  
  function Man() {
    return (
      <div className="relative">
        <BodyPart
          svg={LArmSvg}
          right="50%"
          top="25vh"
          link="/game/main/l-arm"
          altText="Right Arm"
          transform="rotate(135deg)"
        />
        <BodyPart
          svg={LArmSvg}
          right="30vw"
          top="25vh"
          link="/game/main/r-arm"
          altText="Left Arm"
          transform="rotate(-135deg)"
        />
        <BodyPart
          svg={LLegSvg}
          right="28vw"
          top="55vh"
          link="/game/main/l-leg"
          altText="Left Leg"
        />
        <BodyPart
          svg={RLegSvg}
          right="18vw"
          top="55vh"
          link="/game/main/r-leg"
          altText="Right Leg"
        />
        <BodyPart
          svg={ChestSvg}
          right="50%"
          top="30vh"
          link="/game/main/chest"
          altText="Chest"
        />
        <BodyPart
          svg={HeadSvg}
          right="50%"
          top="5vh"
          link="/game/main/head"
          altText="Head"
        />
      </div>
    );
  }
  
  export default function MainSection() {
    return (
      <div className="min-h-screen w-full flex items-center justify-center bg-black">
          <Man />
      </div>
    );  
  }
  