import React from 'react';
import Image from 'next/image';
import discord from "../../assets/discord 1.png";
import instagram from "../../assets/insta 1.png";
import twitter from "../../assets/twitter 1.png";
import youtube from "../../assets/youtube 1.png";
import facebook from "../../assets/facebook 1.png";
import Link from 'next/link';

const HomeFooter = () => {
  return (
    <div className='HomeFoooterMainParent'>

      {/* Inne elementy... */}

      <Link href={"https://twitter.com/fsuni"} target={"_blank"}>
        <a className='cursor-pointer socialMediaIcon'>
          <Image src={twitter} quality={100} alt='social media' layout='fill' />
        </a>
      </Link>

      {/* Inne linki społecznościowe... */}

      <div className='text-center interFont madeWLove mt-8'>
        Made with Love
        <span className='text-red-500'>❤ </span>
        By Gamers, For Gamers
      </div>

      <div className='font-semibold text-center interFont madeWLove mt-3'>
        <span className='ml-2 font-semibold mr-2'>
          &copy;
        </span>
        {new Date().getFullYear()}
        <span className='ml-1'>FSUniversum.</span> All rights reserved
      </div>
    </div>
  );
};

export default HomeFooter;
