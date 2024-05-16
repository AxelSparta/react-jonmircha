import React, { useState, useEffect } from "react";
import { helpHttp } from "../helpers/helpHttp";
import SongDetails from "./SongDetails";
import SongForm from "./SongForm";

const SongSearch = () => {
  const [search, setSearch] = useState(null);
  const [lyric, setLyric] = useState(null);
  const [bio, setBio] = useState(null);
  const [loading, setLoading] = useState(false);

  let api = helpHttp();

  useEffect(() => {
    if (search === null) return;

    const fetchData = async () => {
      const { artist, song } = search;
      let lirycUrl = `https://api.lyrics.ovh/v1/${artist}/${song}`;
      let artistUrl = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${artist}`;

      try {
        const [lirycRes, artistRes] = await Promise.all([
          api.get(lirycUrl),
          api.get(artistUrl),
        ]);
        console.log(lirycRes, artistRes);
      } catch (error) {
        console.error(error);
      }
      console.log(lirycUrl, artistUrl);
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  const handleSearch = (data) => {
    setSearch(data);
  };

  return (
    <div>
      <h2>SongSearch</h2>
      <SongForm handleSearch={handleSearch} />
      <SongDetails />
    </div>
  );
};

export default SongSearch;
