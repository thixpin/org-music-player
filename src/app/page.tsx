"use client";  // Add this line at the top

import { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faCopy } from '@fortawesome/free-solid-svg-icons';
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
        <label htmlFor="album-filter" className="mr-4">Filter by Album:</label>
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

      <ul>
        {filteredMusicList.map((item, index) => (
          <li key={index} className="mb-6 p-4 border border-gray-700 rounded-lg shadow-md">
            <p><strong>Album Name:</strong> {item.albumName}</p>
            <p><strong>Title (Copy):</strong> {item.titleCopy}</p>
            <p><strong>Title (Original):</strong> {item.titleOriginal}</p>
            <p><strong>Author:</strong> {item.author}</p>
            <a href={item.youtubeUrl} target="_blank" rel="noreferrer" className="text-blue-500 me-5">{item.youtubeUrl}</a>
            {isClient && (
              <button 
                onClick={() => copyToClipboard(item.youtubeUrl)} 
                className="mr-4 px-4 py-2 bg-green-500 text-white rounded"
              >
                <FontAwesomeIcon icon={faCopy} className="mr-2" />
              </button>
            )}
            <button 
              onClick={() => playVideo(item.youtubeUrl)} 
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              Play
            </button>
          </li>
        ))}
      </ul>
      
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
