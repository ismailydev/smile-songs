export const countTypes = (songs, key) => {
    const types = songs.map((obj) => obj[key]);
    return [...new Set(types)];
};

export const count = (songs, key, type) => {
    return songs.reduce((count, song) => {
        if (song[key] === type) {
            count++;
        }
        return count;
    }, 0);
};

export const getAlbumCount = (songs, artist) => {
    const artistSongs = songs.filter((song) => song.artist === artist);
    const uniqueAlbums = artistSongs.reduce((albums, song) => {
        if (!albums.includes(song.album)) {
            albums.push(song.album);
        }
        return albums;
    }, []);
    return uniqueAlbums.length;
};
