import { visionTool } from '@sanity/vision';
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import schemas from './sanity/schemas';

const config = defineConfig({
  projectId: "jx9lbmtw",
  dataset: "production",
  title: "My Personal Website",
  apiVersion: "2024-05-10",
  basePath: "/admin",
  plugins: [structureTool(), visionTool()],
  schema:{
    types:schemas
  }
});

export default config;
