import Link from "next/link";
import { FaXTwitter, FaLinkedin, FaInstagram, FaDiscord } from "react-icons/fa6";

function Footer() {
  return (
    <footer className=" text-gray-200  px-4 pb-0 pt-16"  >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-center gap-8 md:gap-12 pb-0">
        {/* Left: Logo, tagline, social */}
        <div className="flex-1 min-w-[220px] ml-0 md:ml-8">
          <div className="flex items-center gap-2 mb-2">
            {/* Replace with your logo */}
            <img src="/logo.webp" alt="TechKareer Logo" className="w-50 h-10" />
          </div>
          <p className="text-gray-400 mb-4 text-sm md:text-lg w-full md:w-1/2">
            The biggest tech opportunities aggregator. Find your next gig,
            internship, and job at our platform.
          </p>
          <div className="flex gap-3 mt-2">
            <a href="https://x.com/techkareer" aria-label="X" className="hover:text-white"><FaXTwitter size={32} className="md:w-10 md:h-10" /></a>
            <a href="https://www.linkedin.com/company/thetechkareer" aria-label="LinkedIn" className="hover:text-white"><FaLinkedin size={32} className="md:w-10 md:h-10" /></a>

          </div>
        </div>

        {/* Center: Product & Others */}
        <div className="flex-2 flex flex-col sm:flex-row gap-6 md:gap-12">
          <div className="mb-6 sm:mb-0">
            <h4 className="font-semibold mb-3 text-white text-sm md:text-base">COMMUNITY</h4>
            <ul className="space-y-2 text-xs md:text-sm">
              <li><Link href="https://discord.gg/gUbECA4V"><span className="hover:underline">Discord</span></Link></li>
              <li><Link href="https://dub.sh/tk-whatsapp"><span className="hover:underline">WhatsApp</span></Link></li>
              <li><Link href="https://dub.sh/tk-telegram"><span className="hover:underline">Telegram</span></Link></li>

            </ul>
          </div>
          <div className="mb-6 sm:mb-0">
            <h4 className="font-semibold mb-3 text-white text-sm md:text-base">OTHERS</h4>
            <ul className="space-y-2 text-xs md:text-sm">
              <li><Link href="https://techkareer.com/blog"><span className="hover:underline">Blog</span></Link></li>
              <li><Link href="https://techkareer.com/case-studies"><span className="hover:underline">Case Studies</span></Link></li>

            </ul>
          </div>
        </div>

        {/* Right: Legal */}
        <div className="flex-2 min-w-[180px] mb-6 md:mb-0">
          <h4 className="font-semibold mb-3 text-white text-sm md:text-base">LEGAL</h4>
          <ul className="space-y-2 text-xs md:text-sm">
            <li><Link href="/privacy-policy"><span className="hover:underline">Privacy Policy</span></Link></li>
            <li><Link href="/terms-of-service"><span className="hover:underline">Terms of Service</span></Link></li>


          </ul>
        </div>
      </div>
      {/* Optional: Large faded background text */}
      <div className="absolute left-0 right-0 z-0 text-[12vw] md:text-[10vw] font-bold opacity-5 md:opacity-10 select-none pointer-events-none" >
        <span className="hidden sm:block text-center w-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          TechKareer
        </span>
      </div>
    </footer>
  );
}

export default Footer;