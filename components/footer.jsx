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
  import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter , BsYoutube } from 'react-icons/bs';
  


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
            <FooterTitle className="text-default-500" title="about" />
            <FooterLinkGroup col>
              <FooterLink className="text-default-500" href="/aboutus.html">History</FooterLink>
              <FooterLink className="text-default-500" href="/aboutus.html">The President</FooterLink>
              <FooterLink className="text-default-500" href="/aboutus.html">Leadership Team</FooterLink>
              <FooterLink className="text-default-500" href="/aboutus.html">Achievements</FooterLink>
            </FooterLinkGroup>
          </div>
          <div>
            <FooterTitle title=" Dissemination" />
            <FooterLinkGroup col>
              <FooterLink className="text-default-500" href="/journal.html">Journal</FooterLink>
              <FooterLink className="text-default-500" href="/events.html">Events </FooterLink>
            </FooterLinkGroup>
          </div>
          <div>
            <FooterTitle title="Resourceful Links" />
            <FooterLinkGroup col>
              <FooterLink className="text-default-500" href="/memberships.html">Membership</FooterLink>
              <FooterLink className="text-default-500" href="/contactus.html">Contact US</FooterLink>
            </FooterLinkGroup>
          </div>
        </div>
      </div>
      <FooterDivider />
      <div className="w-full sm:flex sm:items-center sm:justify-between">
        <FooterCopyright href="/" by="ENFUSE" year={`${new Date().getFullYear()}`} />
        <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
          
        </div>
      </div>
    </div>
  </Footer>
  )
}
