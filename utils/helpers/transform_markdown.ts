import { remark } from "remark";
import html from "remark-html";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const fsPromises = fs.promises;
const mdDirectory = path.join(process.cwd(), "markdown");

export async function getHTML(slug: string) {
  const fullPath = path.join(mdDirectory, `${slug}.md`);
  let contentHtml = `<h2 class="text-2xl">Story summary still in progress!</h2>`;
  try {
    const fileContents = await fsPromises.readFile(fullPath, "utf8");
    const matterResult = matter(fileContents);
    const processedContent = await remark()
      .use(html)
      .process(matterResult.content);
    contentHtml = processedContent.toString();
  } catch (error) {
    console.error(error);
  }

  return {
    slug,
    contentHtml,
  };
}

export async function getMDX(slug: string) {
  const fullPath = path.join(mdDirectory, `${slug}.mdx`);
  let contentHtml = `<h2 class="text-2xl">Story summary still in progress!</h2>`;
  try {
    const fileContents = await fsPromises.readFile(fullPath, "utf8");
    contentHtml = fileContents.toString();
  } catch (error) {
    console.error(error);
  }

  return {
    slug,
    contentHtml,
  };
}
