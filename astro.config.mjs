import { defineConfig } from 'astro/config';
const repository = process.env.GITHUB_REPOSITORY?.split('/')[1];
const owner = process.env.GITHUB_REPOSITORY?.split('/')[0];
const isRoot = repository && owner && repository.toLowerCase() === `${owner.toLowerCase()}.github.io`;
export default defineConfig({
  output: 'static',
  site: process.env.GITHUB_REPOSITORY ? `https://${owner}.github.io` : 'http://localhost:4321',
  base: repository && !isRoot ? `/${repository}` : '/',
});
