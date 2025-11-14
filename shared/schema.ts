import { z } from "zod";

// Song schema for the music playlist
export const songSchema = z.object({
  id: z.number(),
  title: z.string(),
  artist: z.string(),
  duration: z.number(), // in seconds
  src: z.string(), // path to audio file
  coverGradient: z.string().optional(), // gradient for placeholder album cover
});

export type Song = z.infer<typeof songSchema>;

// Playlist schema
export const playlistSchema = z.object({
  songs: z.array(songSchema),
});

export type Playlist = z.infer<typeof playlistSchema>;
