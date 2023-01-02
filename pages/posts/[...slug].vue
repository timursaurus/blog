<template>
  <main class="prose font-sans text-md lg:prose-base mx-auto">
    <!-- <pre>
      {{ route }}
    </pre>

    <pre>
      year:
      {{ year }}
    </pre> -->
    <div>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora magnam, eum asperiores aliquid deserunt quaerat similique quas, suscipit blanditiis earum cumque consectetur molestiae mollitia, reiciendis fugiat minima laborum nam porro.
    </div>
    <p>
      Lorem, ipsum.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae. aopsdaosdas
    </p>
    <pre>
      {{ posts }}
    </pre>

    <ContentDoc />
  </main>
</template>

<script lang="ts" setup>
const route = useRoute();

const [year, month, day, title] = route.params.slug;

const date = `${year}-${month}-${day}`;

const posts = await useAsyncData("posts", async () => {
  const p = await queryContent("posts").sort({
    date: -1,
  }).where({
  }).find()

  const parsed = p.map((post) => {
    return {
      ...post,
      date: new Date(post.date).toISOString().split("T")[0],
      meta: {
        year: new Date(post.date).toISOString().split("T")[0].split("-")[0],
        month: new Date(post.date).toISOString().split("T")[0].split("-")[1],
        day: new Date(post.date).toISOString().split("T")[0].split("-")[2],
      }
    }
  })

  return parsed
}
);


// query by year month day


// const posts = await useAsyncData("posts", () =>
//   queryContent("posts").where({}).find()
// );
</script>
