"use client";  // Add this line at the top

import { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faCopy, faPlay } from '@fortawesome/free-solid-svg-icons';
import { musicList, MusicItem } from '@/data/musics';
import { trackGAEvent } from '@/components/GoogleAnalytics';
import { useDeviceSize } from '@/utils/useDeviceSize';



const Home = () => {
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);
  const [selectedAlbum, setSelectedAlbum] = useState<string>('All');
  const [filteredMusicList, setFilteredMusicList] = useState<MusicItem[]>(musicList);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (selectedAlbum === 'All') {
      setFilteredMusicList(musicList);
    } else {
      setFilteredMusicList(musicList.filter(item => item.albumName === selectedAlbum));
    }
  }, [selectedAlbum]);

  const extractVideoId = (url: string): string | null => {
    const urlParams = new URLSearchParams(new URL(url).search);
    return urlParams.get('v');
  };

  const shortYTUrl = (url: string): string => {
    const videoId = extractVideoId(url);
    return videoId ? `https://youtu.be/${videoId}` : url;
  }


  const playVideo = (url: string) => {
    const videoId = extractVideoId(url);
    if (!videoId) {
      toast.error('Invalid YouTube URL!');
      trackGAEvent('User', 'Invalid YouTube URL', url);
      return;
    }
    trackGAEvent('User', 'Play YouTube Video', videoId);
    setPlayingVideoId(videoId);
  };

  const copyToClipboard = (url: string) => {
    navigator.clipboard.writeText(url);
    toast.success('YouTube URL copied to clipboard!');
    trackGAEvent('User', 'Copy YouTube URL', url);
  };

  const opts = {
    height: '480',
    width: '853',
    playerVars: {
      autoplay: 1,
    },
  };

  const [width] = useDeviceSize();

  if (width < 853) {
    const maxWidth = width - 6;
    const maxHeight = maxWidth / 853 * 480;
    opts.height = maxHeight.toString();
    opts.width = maxWidth.toString();
  }

  const uniqueAlbums = Array.from(new Set(musicList.map(item => item.albumName)));

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Just listen back to original music</h1>

      <div className="mb-6">
        <label htmlFor="album-filter" className="mr-4 text-white">Filter by Album:</label>
        <select
          id="album-filter"
          value={selectedAlbum}
          onChange={(e) => setSelectedAlbum(e.target.value)}
          className="px-4 py-2 border border-gray-700 rounded bg-gray-800 text-white focus:outline-none focus:ring focus:border-blue-300"
        >
          <option value="All" className="bg-gray-800 text-white">All</option>
          {uniqueAlbums.map(album => (
            <option key={album} value={album} className="bg-gray-800 text-white">{album}</option>
          ))}
        </select>

      </div>

      <div className="flex flex-wrap -mx-2 mb-4">
        {filteredMusicList.map((item, index) => (
          <div key={index}  className="w-full sm:w-1 md:w-1/2 lg:w-1/3 p-2">
            <div className="mb-6 p-3 border border-gray-700 rounded-lg shadow-md">
              <p className="text-white"><strong>Album Name:</strong> {item.albumName}</p>
              <p className="text-white"><strong>Title (Copy):</strong> {item.titleCopy}</p>
              <p className="text-white"><strong>Title (Original):</strong> {item.titleOriginal}</p>
              <p className="text-white"><strong>Author:</strong> {item.author}</p>
              <a href={item.youtubeUrl} target="_blank" rel="noreferrer" className="text-blue-500 me-2 text-small">{shortYTUrl(item.youtubeUrl)}</a>
              {isClient && (
                <button
                  onClick={() => copyToClipboard(shortYTUrl(item.youtubeUrl))}
                  className="mr-2 px-2 py-1 bg-green-500 rounded"
                >
                  <FontAwesomeIcon icon={faCopy} className="mr-2" />
                </button>
              )}
              <button
                onClick={() => playVideo(item.youtubeUrl)}
                className="px-2 py-1 bg-red-500 rounded"
              >
                <FontAwesomeIcon icon={faPlay} className="mr-2" />
                Play
              </button>
            </div>
          </div>
        ))}
      </div>

      {playingVideoId && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
        >
          <div className="relative">
            <button
              onClick={() => setPlayingVideoId(null)}
              className="absolute top-2 right-2 text-white text-2xl"
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <YouTube
              videoId={playingVideoId}
              opts={opts}
              onEnd={() => setPlayingVideoId(null)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
