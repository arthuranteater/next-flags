import { getCountries } from "../../../utils/api/countries";
import { getCountry } from "../../../utils/api/countries";
import StoryDetail from "../../components/story-detail";
import { getBorderCountries } from "../../../utils/api/countries";
import { getClient } from "../../components/apollo-client";
import { GET_STORIES } from "../../../utils/api/github";
import { getPostData, getMDX } from "@/utils/helpers/transform_markdown";
import { evaluate } from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";
import mdx from "../../../markdown/view-all-countries-as-cards-with-summary-info.mdx";
import MyComponent from "@/app/components/MyComponent";

export async function generateStaticParams() {
  const { data } = await getClient().query({ query: GET_STORIES });
  const stories = data.node.items.nodes;

  return stories.map(({ title }) => {
    return {
      params: {
        slug: title?.toLowerCase().replaceAll(" ", "-"),
      },
      fallback: false,
    };
  });
}

export default async function DetailsPage({ params }) {
  const mdx = await getMDX(params.slug);
  const {
    default: MDXContent,
    // MDXDefinedComponent,
    ...rest
  } = await evaluate(mdx.contentHtml, runtime);

  return (
    <div className="mt-40 mb-20 flex flex-col justify-center items-center">
      <MDXContent components={{ MyComponent }} />
      {/* <MDXDefinedComponent/> */}
    </div>
  );
}
