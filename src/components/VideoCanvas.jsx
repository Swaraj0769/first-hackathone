import React, { useEffect, useRef } from 'react';

const VideoCanvas = ({ src }) => {
  const canvasRef = useRef(null);
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const video = videoRef.current;

    let animationFrameId;

    const handleScroll = () => {
      const container = containerRef.current;
      const scrollTop = window.scrollY - container.offsetTop;
      const maxScroll = container.offsetHeight - window.innerHeight;

      // Calculate scroll percentage
      const scrollFraction = Math.min(scrollTop / maxScroll, 1);
      if (video.duration) {
        video.currentTime = video.duration * scrollFraction;
      }

      // Draw frame to canvas
      const draw = () => {
        const ctx = canvas.getContext('2d');
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      };

      draw();
    };

    const setup = () => {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      // Trigger initial draw
      handleScroll();
    };

    // Wait for metadata to be loaded
    video.addEventListener('loadedmetadata', setup);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      video.removeEventListener('loadedmetadata', setup);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div ref={containerRef} className="h-[300vh] bg-gray-100 relative">
      {/* Hidden video for seeking */}
      <video ref={videoRef} src={src} className="hidden" muted crossOrigin="anonymous" />

      {/* Canvas that shows the video */}
      <canvas
        ref={canvasRef}
        className="sticky top-0 w-full h-auto max-w-8xl mx-auto shadow-lg"
      />
    </div>
  );
};

export default VideoCanvas;
