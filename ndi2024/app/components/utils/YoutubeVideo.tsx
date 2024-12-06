import React from "react";

const YoutubeEmbed = ({ videoUrl }: { videoUrl: string }) => {
	return (
		<div className="video-responsive rounded-xl">
			<iframe
				width="853"
				height="480"
				src={videoUrl}
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
				title="Embedded youtube"
			/>

			<style jsx>{`
				.video-responsive {
					overflow: hidden;
					padding-bottom: 56.25%;
					position: relative;
					height: 0;
				}

				.video-responsive iframe {
					left: 0;
					top: 0;
					height: 100%;
					width: 100%;
					position: absolute;
				}
			`}</style>
		</div>
	);
};

export default YoutubeEmbed;
