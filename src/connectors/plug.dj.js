'use strict';

Connector.playerSelector = '.community__bottom';

Connector.artistTrackSelector = '.bottom__playback-meta .community__playback-meta--desktop .community__song-playing';

Connector.filter = MetadataFilter.getYoutubeFilter();

Connector.isPlaying = () => {
	return $('.community').attr('data-state') === 'playing';
};
