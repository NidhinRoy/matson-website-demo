
import React, { useState } from 'react';
import { Video, Play, Pause } from 'lucide-react';
import { cn } from '@/lib/utils';

interface VideoPlayerProps {
  videoSrc?: string;
  thumbnailSrc: string;
  title?: string;
  autoPlay?: boolean;
  className?: string;
}

const VideoPlayer = ({ 
  videoSrc, 
  thumbnailSrc, 
  title, 
  autoPlay = false, 
  className 
}: VideoPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [showThumbnail, setShowThumbnail] = useState(!autoPlay);
  
  const handlePlayClick = () => {
    setShowThumbnail(false);
    setIsPlaying(true);
  };
  
  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className={cn("relative rounded-lg overflow-hidden shadow-lg", className)}>
      {/* Video thumbnail overlay */}
      {showThumbnail && (
        <div className="relative w-full aspect-video">
          <img 
            src={thumbnailSrc} 
            alt={title || "Video thumbnail"}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center">
            {title && (
              <h3 className="text-white text-xl md:text-2xl font-serif mb-4">{title}</h3>
            )}
            <button 
              onClick={handlePlayClick}
              className="w-16 h-16 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-gold transition-colors"
              aria-label="Play video"
            >
              <Play size={36} className="text-gold hover:text-white ml-1" />
            </button>
          </div>
        </div>
      )}

      {/* Actual video player */}
      {!showThumbnail && videoSrc && (
        <div className="relative w-full">
          <video
            src={videoSrc}
            className="w-full aspect-video"
            autoPlay={autoPlay || isPlaying}
            controls={isPlaying}
            onPause={() => setIsPlaying(false)}
            onPlay={() => setIsPlaying(true)}
          />
          {!isPlaying && (
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <button 
                onClick={togglePlayPause}
                className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center cursor-pointer hover:bg-gold transition-colors"
                aria-label="Play video"
              >
                <Play size={24} className="text-gold hover:text-white ml-1" />
              </button>
            </div>
          )}
        </div>
      )}
      
      {/* Fallback message when no video source is provided */}
      {!showThumbnail && !videoSrc && (
        <div className="w-full aspect-video bg-gray-100 flex flex-col items-center justify-center text-muted-foreground">
          <Video size={48} className="mb-4 opacity-50" />
          <p>Video will be available soon</p>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
