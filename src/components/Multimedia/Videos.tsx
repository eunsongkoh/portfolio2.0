import { InstagramEmbed } from "react-social-media-embed";
import { YouTubeEmbed } from "react-social-media-embed";
export default function Videos() {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 gap-4 m-1">
        <InstagramEmbed
          url="https://www.instagram.com/reel/C_jBa3uSxco/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
          width={328}
        />
        <InstagramEmbed
          url="https://www.instagram.com/p/DBFDpswSwMD/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
          width={328}
        />
        <YouTubeEmbed
          url="https://www.youtube.com/embed/oLi7MGQ4aXc?si=_h3dkQHVYl2dfFLF"
          width={325}
          height={220}
        />
      </div>
    </div>
  );
}
