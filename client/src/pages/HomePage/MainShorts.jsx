import React from 'react';
import { TikTokEmbed } from 'react-social-media-embed';

function MainShorts() {
  return (
    <div>
      <iframe
        title="taggbox"
        src="https://widget.taggbox.com/119175"
        style={{ width: '100%', height: '600px', border: 'none' }}
      />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <TikTokEmbed
          url="https://www.tiktok.com/@ddoo_pd/video/7007646679000173825?is_from_webapp=1&sender_device=pc&web_id=7187318067687425537"
          width={325}
        />
      </div>
    </div>
  );
}

export default MainShorts;
