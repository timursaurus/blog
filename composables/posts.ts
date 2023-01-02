
interface PostQueryParams {
  year?: string;
  month?: string;
  day?: string;
  slug?: string;
  title: string;
}

export async function  usePosts({
  year,
  month,
  day,
  title,
}: PostQueryParams) {


  const posts = await useAsyncData('posts', () => queryContent('posts').where({

  }).find())
}