# How to Update Your Music Playlist

This guide explains how to easily add, remove, or modify songs in your music playlist **without changing any code**.

## Overview

The music playlist is managed through a simple JSON file. You only need to:
1. Add your music files to the `public/music/` directory
2. Update the `server/data/songs.json` file to reference your music

## Step-by-Step Instructions

### Adding New Songs

1. **Place your music file in the music directory:**
   ```
   public/music/your-song-name.mp3
   ```

2. **Edit the songs.json file:**
   - Open `server/data/songs.json` in any text editor
   - Add a new song entry with the following format:

   ```json
   {
     "id": 16,
     "title": "Your Song Title",
     "artist": "Artist Name",
     "duration": 240,
     "src": "/music/your-song-name.mp3",
     "coverGradient": "from-purple-500 to-pink-500"
   }
   ```

3. **Save the file and restart the server** (if it's running)

4. **Refresh your browser** - the new song will appear in the playlist!

### Removing Songs

1. **Edit `server/data/songs.json`**
2. **Delete the entire song object** (including the curly braces)
3. **Make sure to remove any extra commas** to keep valid JSON
4. **Save and refresh your browser**

### Modifying Songs

1. **Open `server/data/songs.json`**
2. **Find the song you want to modify**
3. **Update any fields:**
   - `title` - Change the song name
   - `artist` - Change the artist name
   - `duration` - Update the length (in seconds)
   - `src` - Change the file path
   - `coverGradient` - Change the color scheme
4. **Save and refresh your browser**

## Song Fields Explained

| Field | Description | Required | Example |
|-------|-------------|----------|---------|
| `id` | Unique number for the song | Yes | `1`, `2`, `3`, etc. |
| `title` | Name of the song | Yes | `"Midnight Dreams"` |
| `artist` | Artist or band name | Yes | `"Luna Eclipse"` |
| `duration` | Song length in seconds | Yes | `240` (4 minutes) |
| `src` | Path to the audio file | Yes | `"/music/song1.mp3"` |
| `coverGradient` | Color gradient for album art | No | `"from-purple-500 to-pink-500"` |

## Duration Calculation

To calculate the duration in seconds:
- 3 minutes 45 seconds = (3 × 60) + 45 = **225 seconds**
- 4 minutes 30 seconds = (4 × 60) + 30 = **270 seconds**

You can also get the exact duration from your music file properties.

## Available Color Gradients

Choose from these pre-configured gradients:
- `from-purple-500 to-pink-500` - Purple to pink
- `from-blue-500 to-cyan-500` - Blue to cyan
- `from-green-500 to-teal-500` - Green to teal
- `from-orange-500 to-red-500` - Orange to red
- `from-indigo-500 to-purple-500` - Indigo to purple
- `from-yellow-500 to-orange-500` - Yellow to orange
- `from-pink-500 to-rose-500` - Pink to rose
- `from-teal-500 to-green-500` - Teal to green

## Example: Complete songs.json File

```json
[
  {
    "id": 1,
    "title": "First Song",
    "artist": "Artist One",
    "duration": 180,
    "src": "/music/first-song.mp3",
    "coverGradient": "from-purple-500 to-pink-500"
  },
  {
    "id": 2,
    "title": "Second Song",
    "artist": "Artist Two",
    "duration": 210,
    "src": "/music/second-song.mp3",
    "coverGradient": "from-blue-500 to-cyan-500"
  }
]
```

## Important Notes

- **IDs must be unique** - Each song needs a different ID number
- **Valid JSON format** - Make sure commas are correct (no comma after the last item)
- **File paths** - The `src` field must match the actual filename in `public/music/`
- **Supported formats** - MP3, WAV, OGG (MP3 recommended)
- **No code changes needed** - You only edit the JSON file and add music files!

## Troubleshooting

**Song doesn't appear in playlist:**
- Check that the JSON file is valid (use a JSON validator online)
- Make sure the file exists in `public/music/`
- Verify the `src` path matches the filename exactly

**Song won't play:**
- Confirm the audio file format is supported (MP3 works best)
- Check that the file isn't corrupted
- Verify the file path is correct in songs.json

**Browser shows old playlist:**
- Hard refresh your browser (Ctrl+Shift+R or Cmd+Shift+R)
- Clear your browser cache
- Make sure you saved the songs.json file

## Need Help?

The music playlist is designed to be simple and easy to manage. Just remember:
1. Music files go in `public/music/`
2. Song information goes in `server/data/songs.json`
3. No code changes are ever needed!

Enjoy your music! 🎵
