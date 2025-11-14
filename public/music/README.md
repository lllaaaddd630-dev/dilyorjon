# Music Files Directory

## How to Add Your Own Music

This directory is where your music files should be placed. The application will automatically serve these files to the music player.

### Instructions:

1. **Add Your Music Files:**
   - Place your MP3 files in this directory (`public/music/`)
   - Name them according to the `src` field in `server/data/songs.json`
   - Example: If songs.json has `"src": "/music/song1.mp3"`, place your file as `song1.mp3`

2. **Update the Playlist:**
   - Edit `server/data/songs.json` to add, remove, or modify songs
   - Each song should have:
     - `id`: Unique number for each song
     - `title`: Song name
     - `artist`: Artist name
     - `duration`: Song length in seconds
     - `src`: Path to the audio file (e.g., "/music/mysong.mp3")
     - `coverGradient`: (Optional) Tailwind gradient for album cover placeholder

3. **Supported Formats:**
   - MP3 (recommended)
   - WAV
   - OGG
   - Any format supported by HTML5 audio

### Example Song Entry in songs.json:

```json
{
  "id": 16,
  "title": "My Awesome Song",
  "artist": "My Band Name",
  "duration": 240,
  "src": "/music/my-awesome-song.mp3",
  "coverGradient": "from-purple-500 to-pink-500"
}
```

### Available Gradient Options:
- `from-purple-500 to-pink-500`
- `from-blue-500 to-cyan-500`
- `from-green-500 to-teal-500`
- `from-orange-500 to-red-500`
- `from-indigo-500 to-purple-500`
- `from-yellow-500 to-orange-500`
- `from-pink-500 to-rose-500`
- `from-teal-500 to-green-500`

### Important Notes:

- **The application will NOT work with the placeholder file names** (song1.mp3, song2.mp3, etc.) until you replace them with actual audio files
- You can use any MP3 files you own
- Make sure file names in songs.json match the actual files in this directory
- After updating songs.json, the playlist will automatically refresh on page reload
- You do NOT need to modify any code - just edit the JSON file!

### Quick Start:

1. Copy your MP3 files into this directory
2. Edit `server/data/songs.json` to match your files
3. Restart the server if it's running
4. Refresh your browser to see the updated playlist

That's it! Enjoy your music! 🎵
