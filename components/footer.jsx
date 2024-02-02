import {
    Footer,
    FooterBrand,
    FooterCopyright,
    FooterDivider,
    FooterIcon,
    FooterLink,
    FooterLinkGroup,
    FooterTitle,
  } from 'flowbite-react';
  import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
  


export default function footer() {
  return (
    <Footer container className='w-screen'>
    <div className="w-full">
      <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
        <div>
          <FooterBrand
            href="/"
            src="/enfuse-modified.png"
            alt="Enfuse Logo"
            name="ENFUSE"
          />
        </div>
        <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
          <div>
            <FooterTitle title="about" />
            <FooterLinkGroup col>
              <FooterLink href="#">History</FooterLink>
              <FooterLink href="#">The President</FooterLink>
              <FooterLink href="#">Leadership Team</FooterLink>
              <FooterLink href="#">Office Bearers</FooterLink>
            </FooterLinkGroup>
          </div>
          <div>
            <FooterTitle title=" Dissemination" />
            <FooterLinkGroup col>
              <FooterLink href="/journal">Journal</FooterLink>
              <FooterLink href="/events">Events </FooterLink>
            </FooterLinkGroup>
          </div>
          <div>
            <FooterTitle title="Resourceful Links" />
            <FooterLinkGroup col>
              <FooterLink href="#">Important Links</FooterLink>
              <FooterLink href="#">External Publications</FooterLink>
            </FooterLinkGroup>
          </div>
        </div>
      </div>
      <FooterDivider />
      <div className="w-full sm:flex sm:items-center sm:justify-between">
        <FooterCopyright href="/" by="ENFUSE" year={`${new Date().getFullYear()}`} />
        <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
          <FooterIcon href="#" icon={BsFacebook} />
          <FooterIcon href="#" icon={BsInstagram} />
          <FooterIcon href="#" icon={BsTwitter} />
          <FooterIcon href="#" icon={BsGithub} />
          <FooterIcon href="#" icon={BsDribbble} />
        </div>
      </div>
    </div>
  </Footer>
  )
}
