import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import express from "express";
import path from "path";

export async function registerRoutes(app: Express): Promise<Server> {
  // Serve static audio files from public/music directory
  app.use("/music", express.static(path.join(process.cwd(), "public", "music")));

  // Get playlist endpoint
  app.get("/api/playlist", async (_req, res) => {
    try {
      const songs = await storage.getSongs();
      res.json({ songs });
    } catch (error) {
      console.error("Error fetching playlist:", error);
      res.status(500).json({ error: "Failed to fetch playlist" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
