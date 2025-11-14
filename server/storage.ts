import { type Song } from "@shared/schema";
import fs from "fs/promises";
import path from "path";

const SONGS_FILE = path.join(process.cwd(), "server", "data", "songs.json");

export interface IStorage {
  getSongs(): Promise<Song[]>;
}

export class MemStorage implements IStorage {
  private songs: Song[] = [];

  constructor() {
    this.loadSongs();
  }

  private async loadSongs() {
    try {
      const data = await fs.readFile(SONGS_FILE, "utf-8");
      this.songs = JSON.parse(data);
    } catch (error) {
      console.error("Failed to load songs.json:", error);
      this.songs = [];
    }
  }

  async getSongs(): Promise<Song[]> {
    await this.loadSongs();
    return this.songs;
  }
}

export const storage = new MemStorage();
